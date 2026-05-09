import { type Response, Router } from 'express';
import { z } from 'zod';
import {
  ModelslabApiError,
  ModelslabBackgroundClient,
} from '../modelslab/modelslab-background-client';

const removeBackgroundSchema = z
  .object({
    image_url: z.string().trim().url(),
    only_mask: z.boolean().optional(),
    inverse_mask: z.boolean().optional(),
    seed: z.number().int().nullable().optional(),
    alpha_matting: z.boolean().optional(),
    post_process_mask: z.boolean().optional(),
    track_id: z.string().trim().min(1).nullable().optional(),
    base64: z.enum(['yes', 'no']).optional(),
    webhook: z.string().trim().url().nullable().optional(),
  })
  .strict();

interface BackgroundRemovalRouterOptions {
  modelslabBackgroundClient: ModelslabBackgroundClient;
}

export function createBackgroundRemovalRouter({
  modelslabBackgroundClient,
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
      const result = await modelslabBackgroundClient.removeBackground(parsedBody.data);
      response.status(202).json(result);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

  return router;
}

function sendRouteError(response: Response, error: unknown): void {
  if (error instanceof ModelslabApiError) {
    response.status(error.status).json({
      error: 'MODELSLAB_REQUEST_FAILED',
      message: error.message,
      details: error.details,
    });
    return;
  }

  throw error;
}
