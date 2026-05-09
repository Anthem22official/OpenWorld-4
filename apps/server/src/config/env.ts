import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface ServerEnv {
  atlasCloudApiKey: string;
  modelslabApiKey: string;
  port: number;
  databaseUrl: string;
}

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

function parsePort(value: string): number {
  const port = Number(value);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535');
  }

  return port;
}

export function loadServerEnv(): ServerEnv {
  return {
    atlasCloudApiKey: requireEnv('ATLASCLOUD_API_KEY'),
    modelslabApiKey: requireEnv('MODELSLAB_API_KEY'),
    port: parsePort(requireEnv('PORT')),
    databaseUrl: requireEnv('DATABASE_URL'),
  };
}
