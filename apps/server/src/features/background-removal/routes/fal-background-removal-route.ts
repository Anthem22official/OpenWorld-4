import { type Response, Router } from 'express';
import { z } from 'zod';
import { FalApiError, FalBackgroundClient, FalConfigError } from '../providers/fal-background-client';

const removeBackgroundSchema = z
  .object({
    image_url: z.string().trim().url(),
  })
  .strict();

interface BackgroundRemovalRouterOptions {
  falBackgroundClient: FalBackgroundClient;
}

export function createBackgroundRemovalRouter({
  falBackgroundClient,
}: BackgroundRemovalRouterOptions): Router {
  const router = Router();

  router.post('/', async (request, response) => {
    const parsedBody = removeBackgroundSchema.safeParse(request.body);

    if (!parsedBody.success) {
      response.status(400).json({
        error: 'INVALID_BACKGROUND_REMOVAL_REQUEST',
        message: 'Background-removal request body is invalid',
        details: z.treeifyError(parsedBody.error),
      });
      return;
    }

    try {
      const result = await falBackgroundClient.removeBackground(parsedBody.data);
      response.status(200).json(result);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

  return router;
}

function sendRouteError(response: Response, error: unknown): void {
  if (error instanceof FalConfigError) {
    response.status(503).json({
      error: 'FAL_NOT_CONFIGURED',
      message: error.message,
    });
    return;
  }

  if (error instanceof FalApiError) {
    response.status(error.status).json({
      error: 'FAL_REQUEST_FAILED',
      message: error.message,
      details: error.details,
    });
    return;
  }

  throw error;
}
