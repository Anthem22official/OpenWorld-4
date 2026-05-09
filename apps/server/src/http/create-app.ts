import express, { type ErrorRequestHandler } from 'express';
import { LocalBackgroundRemovalService } from '../features/background-removal/providers/local-python-background-removal-service';
import { FalBackgroundClient } from '../features/background-removal/providers/fal-background-client';
import { createBackgroundRemovalRouter } from '../features/background-removal/routes/fal-background-removal-route';
import { AtlasImageClient } from '../features/image-generation/providers/atlas-image-client';
import { createImageGenerationRouter } from '../features/image-generation/routes/image-generation-route';
import { createLocalBackgroundRemovalRouter } from '../features/background-removal/routes/local-background-removal-route';

interface ServerServices {
  atlasImageClient: AtlasImageClient;
  localBackgroundRemovalService: LocalBackgroundRemovalService;
  falBackgroundClient: FalBackgroundClient;
}

export function createApp({
  atlasImageClient,
  localBackgroundRemovalService,
  falBackgroundClient,
}: ServerServices) {
  const app = express();

  app.use(express.json());
  app.use('/api/images', createImageGenerationRouter({ atlasImageClient }));
  app.use(
    '/api/images/background-removals/local',
    createLocalBackgroundRemovalRouter({ localBackgroundRemovalService }),
  );
  app.use(
    '/api/images/background-removals',
    createBackgroundRemovalRouter({ falBackgroundClient }),
  );

  app.use((request, response) => {
    response.status(404).json({
      error: 'ROUTE_NOT_FOUND',
      message: `Route not found: ${request.method} ${request.path}`,
    });
  });

  app.use(errorHandler);

  return app;
}

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  response.status(500).json({
    error: 'INTERNAL_SERVER_ERROR',
    message: error instanceof Error ? error.message : 'Unknown server error',
  });
};
