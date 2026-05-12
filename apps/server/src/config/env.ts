import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface ServerEnv {
  gameplayMode: GameplayMode;
  atlasCloudApiKey: string | undefined;
  falApiKey: string | undefined;
  openRouterApiKey: string | undefined;
  port: number;
  databaseUrl: string;
}

export type GameplayMode =
  | 'public-local-full'
  | 'public-local-cloud-assets'
  | 'private-maintainer-hosted';

const serverRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const envPath = path.join(serverRoot, '.env');

dotenv.config({ path: envPath, quiet: true });

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function readOptionalEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value && value.length > 0 ? value : undefined;
}

function parsePort(value: string): number {
  const port = Number(value);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535');
  }

  return port;
}

function parseGameplayMode(value: string | undefined): GameplayMode {
  if (!value) return 'public-local-full';

  if (
    value === 'public-local-full' ||
    value === 'public-local-cloud-assets' ||
    value === 'private-maintainer-hosted'
  ) {
    return value;
  }

  throw new Error(
    'GAMEPLAY_MODE must be public-local-full, public-local-cloud-assets, or private-maintainer-hosted',
  );
}

export function loadServerEnv(): ServerEnv {
  const gameplayMode = parseGameplayMode(readOptionalEnv('GAMEPLAY_MODE'));

  if (gameplayMode === 'public-local-cloud-assets') {
    throw new Error(
      `GAMEPLAY_MODE ${gameplayMode} is recognized but not implemented in this P0 local-first pass`,
    );
  }

  const databaseUrl = requireEnv('DATABASE_URL');
  validateDatabaseUrl(gameplayMode, databaseUrl);

  return {
    gameplayMode,
    atlasCloudApiKey: readOptionalEnv('ATLASCLOUD_API_KEY'),
    falApiKey: readOptionalEnv('FAL_API_KEY'),
    openRouterApiKey: readOptionalEnv('OPENROUTER_API_KEY'),
    port: parsePort(requireEnv('PORT')),
    databaseUrl,
  };
}

function validateDatabaseUrl(gameplayMode: GameplayMode, databaseUrl: string): void {
  if (gameplayMode === 'public-local-full' && !databaseUrl.startsWith('file:')) {
    throw new Error('Public Local Full requires a SQLite DATABASE_URL starting with file:');
  }

  if (gameplayMode === 'private-maintainer-hosted' && !databaseUrl.startsWith('postgres')) {
    throw new Error('Private Maintainer Hosted requires a Postgres DATABASE_URL');
  }
}
