import { initializeDatabase } from './db/init';
import { LocalBackgroundRemovalService } from './features/background-removal/providers/local-python-background-removal-service';
import { FalBackgroundClient } from './features/background-removal/providers/fal-background-client';
import { AtlasImageClient } from './features/image-generation/providers/atlas-image-client';
import { OpenRouterTtsClient } from './features/text-to-speech/providers/openrouter-tts-client';
import { loadServerEnv } from './config/env';
import { createApp } from './http/create-app';

async function main() {
  try {
    const env = loadServerEnv();
    await initializeDatabase();

    const serverServices = {
      gameplayMode: env.gameplayMode,
      atlasImageClient: new AtlasImageClient({
        apiKey: env.atlasCloudApiKey,
      }),
      localBackgroundRemovalService: new LocalBackgroundRemovalService(),
      falBackgroundClient: new FalBackgroundClient({
        apiKey: env.falApiKey,
      }),
      openRouterTtsClient: new OpenRouterTtsClient({
        apiKey: env.openRouterApiKey,
      }),
    };
    const app = createApp(serverServices);

    app.listen(env.port, () => {
      console.log(`Server listening on port ${env.port}`);
    });
  } catch (error) {
    console.error('Failed to initialize server:', error);
    process.exit(1);
  }
}

main();
