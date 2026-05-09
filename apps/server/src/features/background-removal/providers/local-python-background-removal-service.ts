import { spawn, spawnSync } from 'node:child_process';
import { accessSync, constants } from 'node:fs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BackgroundRemovalError } from '../errors';

const PYTHON_EXECUTABLE = 'python';
const SCRIPT_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../python/remove_background.py',
);

export class LocalBackgroundRemovalService {
  private runtimeValidationChecked = false;
  private runtimeValidationError: BackgroundRemovalError | null = null;

  async removeBackground(image: Buffer, cleanup: boolean): Promise<Buffer> {
    this.ensureRuntimeIsAvailable();

    const workDir = await mkdtemp(path.join(os.tmpdir(), 'openworld-bg-'));
    const inputPath = path.join(workDir, 'input-image');
    const outputPath = path.join(workDir, 'output.png');

    try {
      await writeFile(inputPath, image);
      await this.runPythonScript(inputPath, outputPath, cleanup);
      const output = await readFile(outputPath);

      if (output.length === 0) {
        throw new BackgroundRemovalError(
          'Python background removal script produced an empty output file',
          500,
          'BACKGROUND_REMOVAL_SCRIPT_FAILED',
        );
      }

      return output;
    } finally {
      await rm(workDir, { recursive: true, force: true });
    }
  }

  private ensureRuntimeIsAvailable(): void {
    if (this.runtimeValidationChecked) {
      if (this.runtimeValidationError) {
        throw this.runtimeValidationError;
      }

      return;
    }

    try {
      accessSync(SCRIPT_PATH, constants.F_OK);
    } catch {
      this.runtimeValidationError = new BackgroundRemovalError(
        `Background removal script not found: ${SCRIPT_PATH}`,
        500,
        'BACKGROUND_REMOVAL_SCRIPT_MISSING',
      );
      this.runtimeValidationChecked = true;
      throw this.runtimeValidationError;
    }

    const dependencyCheck = spawnSync(PYTHON_EXECUTABLE, ['-c', 'import PIL, cv2, numpy, rembg'], {
      encoding: 'utf8',
    });

    if (dependencyCheck.error) {
      this.runtimeValidationError = new BackgroundRemovalError(
        `Python interpreter is unavailable: ${dependencyCheck.error.message}`,
        500,
        'BACKGROUND_REMOVAL_PYTHON_UNAVAILABLE',
      );
      this.runtimeValidationChecked = true;
      throw this.runtimeValidationError;
    }

    if (dependencyCheck.status !== 0) {
      this.runtimeValidationError = new BackgroundRemovalError(
        'Python background removal dependencies are unavailable',
        500,
        'BACKGROUND_REMOVAL_DEPENDENCY_MISSING',
        readProcessFailureDetails(dependencyCheck.stdout, dependencyCheck.stderr),
      );
      this.runtimeValidationChecked = true;
      throw this.runtimeValidationError;
    }

    this.runtimeValidationChecked = true;
  }

  private runPythonScript(
    inputPath: string,
    outputPath: string,
    cleanup: boolean,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const child = spawn(
        PYTHON_EXECUTABLE,
        [
          SCRIPT_PATH,
          '--input',
          inputPath,
          '--output',
          outputPath,
          ...(cleanup ? ['--cleanup'] : []),
        ],
        {
          stdio: ['ignore', 'pipe', 'pipe'],
        },
      );

      let stderr = '';

      child.stderr.setEncoding('utf8');
      child.stderr.on('data', (chunk: string) => {
        stderr += chunk;
      });

      child.on('error', (error) => {
        reject(
          new BackgroundRemovalError(
            `Failed to start Python background removal process: ${error.message}`,
            500,
            'BACKGROUND_REMOVAL_PROCESS_FAILED',
            error,
          ),
        );
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve();
          return;
        }

        reject(
          new BackgroundRemovalError(
            `Python background removal process exited with code ${code ?? 'unknown'}`,
            500,
            'BACKGROUND_REMOVAL_SCRIPT_FAILED',
            stderr.trim().length > 0 ? stderr.trim() : undefined,
          ),
        );
      });
    });
  }
}

function readProcessFailureDetails(stdout: string | Buffer, stderr: string | Buffer): unknown {
  const stdoutText = Buffer.isBuffer(stdout) ? stdout.toString('utf8').trim() : stdout.trim();
  const stderrText = Buffer.isBuffer(stderr) ? stderr.toString('utf8').trim() : stderr.trim();

  return {
    stdout: stdoutText.length > 0 ? stdoutText : undefined,
    stderr: stderrText.length > 0 ? stderrText : undefined,
  };
}
