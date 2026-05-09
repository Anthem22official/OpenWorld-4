import { initializeDatabase } from './db/init';
import { AtlasImageClient } from './atlas/atlas-image-client';
import { LocalBackgroundRemovalService } from './background-removal/local-background-removal-service';
import { FalBackgroundClient } from './fal/fal-background-client';
import { loadServerEnv } from './config/env';
import { createApp } from './http/create-app';

async function main() {
  try {
    const env = loadServerEnv();
    await initializeDatabase();

    const atlasImageClient = new AtlasImageClient({
      apiKey: env.atlasCloudApiKey,
    });
    const localBackgroundRemovalService = new LocalBackgroundRemovalService();
    const falBackgroundClient = new FalBackgroundClient({
      apiKey: env.faiApiKey,
    });
    const app = createApp({
      atlasImageClient,
      localBackgroundRemovalService,
      falBackgroundClient,
    });

    app.listen(env.port, () => {
      console.log(`Server listening on port ${env.port}`);
    });
  } catch (error) {
    console.error('Failed to initialize server:', error);
    process.exit(1);
  }
}

main();
