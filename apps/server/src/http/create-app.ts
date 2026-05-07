import express, { type ErrorRequestHandler } from 'express';
import { AtlasImageClient } from '../atlas/atlas-image-client';
import { createImageGenerationRouter } from '../routes/image-generation';

interface CreateAppOptions {
  atlasImageClient: AtlasImageClient;
}

export function createApp({ atlasImageClient }: CreateAppOptions) {
  const app = express();

  app.use(express.json());
  app.use('/api/images', createImageGenerationRouter({ atlasImageClient }));

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
