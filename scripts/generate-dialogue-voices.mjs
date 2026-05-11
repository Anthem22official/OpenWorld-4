import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const OPENROUTER_SPEECH_URL = 'https://openrouter.ai/api/v1/audio/speech';
const MODEL = 'google/gemini-3.1-flash-tts-preview';
const VOICE = 'Charon';
const RESPONSE_FORMAT = 'pcm';
const SAMPLE_RATE = 24000;
const CHANNELS = 1;
const BITS_PER_SAMPLE = 16;
const REPO_ROOT = process.cwd();
const SERVER_ENV_PATH = path.join(REPO_ROOT, 'apps/server/.env');
const VOICE_ROOT = path.join(
  REPO_ROOT,
  'apps/gameplay/public/assets/database/characters/alex-kiriya/voice',
);

const voiceJobs = [
  {
    id: 'line-2',
    text: '静かに話す場所としては、東京でいちばん騒がしい場所を選んだね。',
    outputFileName: 'line-2.wav',
  },
  {
    id: 'response-cold-1',
    text: '気をつけて。渋谷は、自信のある顔から先に飲み込んでいく街だ。',
    outputFileName: 'response-cold-1.wav',
  },
];

const overwrite = process.argv.includes('--overwrite');

async function main() {
  const env = await readEnvFile(SERVER_ENV_PATH);
  const apiKey = env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) throw new Error('Missing required environment variable: OPENROUTER_API_KEY');

  await mkdir(VOICE_ROOT, { recursive: true });

  for (const job of voiceJobs) {
    const outputPath = path.join(VOICE_ROOT, job.outputFileName);
    if (existsSync(outputPath) && !overwrite) {
      throw new Error(`Output already exists: ${outputPath}. Pass --overwrite to regenerate.`);
    }

    const pcmBuffer = await generatePcm({ apiKey, input: job.text });
    const wavBuffer = wrapPcmAsWav(pcmBuffer);
    await writeFile(outputPath, wavBuffer);
    console.log(`Generated ${job.id}: ${path.relative(REPO_ROOT, outputPath)}`);
  }
}

async function readEnvFile(envPath) {
  const envText = await readFile(envPath, 'utf8');
  const env = {};

  for (const rawLine of envText.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    env[key] = value.replace(/^["']|["']$/g, '');
  }

  return env;
}

async function generatePcm({ apiKey, input }) {
  const response = await fetch(OPENROUTER_SPEECH_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      input,
      voice: VOICE,
      response_format: RESPONSE_FORMAT,
    }),
  });

  const responseBytes = Buffer.from(await response.arrayBuffer());
  if (!response.ok) {
    const responseText = responseBytes.toString('utf8');
    throw new Error(`OpenRouter speech request failed: ${response.status} ${response.statusText} ${responseText}`);
  }

  if (responseBytes.length === 0) throw new Error('OpenRouter returned an empty audio response');
  return responseBytes;
}

function wrapPcmAsWav(pcmBuffer) {
  const byteRate = SAMPLE_RATE * CHANNELS * (BITS_PER_SAMPLE / 8);
  const blockAlign = CHANNELS * (BITS_PER_SAMPLE / 8);
  const wavBuffer = Buffer.alloc(44 + pcmBuffer.length);

  wavBuffer.write('RIFF', 0);
  wavBuffer.writeUInt32LE(36 + pcmBuffer.length, 4);
  wavBuffer.write('WAVE', 8);
  wavBuffer.write('fmt ', 12);
  wavBuffer.writeUInt32LE(16, 16);
  wavBuffer.writeUInt16LE(1, 20);
  wavBuffer.writeUInt16LE(CHANNELS, 22);
  wavBuffer.writeUInt32LE(SAMPLE_RATE, 24);
  wavBuffer.writeUInt32LE(byteRate, 28);
  wavBuffer.writeUInt16LE(blockAlign, 32);
  wavBuffer.writeUInt16LE(BITS_PER_SAMPLE, 34);
  wavBuffer.write('data', 36);
  wavBuffer.writeUInt32LE(pcmBuffer.length, 40);
  pcmBuffer.copy(wavBuffer, 44);

  return wavBuffer;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
