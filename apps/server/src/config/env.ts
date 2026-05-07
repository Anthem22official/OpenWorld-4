export interface ServerEnv {
  atlasCloudApiKey: string;
  port: number;
}

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
    port: parsePort(requireEnv('PORT')),
  };
}
