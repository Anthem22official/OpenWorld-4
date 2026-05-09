import { type Response, Router } from 'express';
import { z } from 'zod';
import {
  AtlasApiError,
  AtlasImageClient,
  IMAGE_OUTPUT_FORMATS,
  IMAGE_QUALITIES,
  IMAGE_SIZES,
} from '../providers/atlas-image-client';

const createImageGenerationSchema = z
  .object({
    prompt: z.string().trim().min(1),
    size: z.enum(IMAGE_SIZES).optional(),
    quality: z.enum(IMAGE_QUALITIES).optional(),
    output_format: z.enum(IMAGE_OUTPUT_FORMATS).optional(),
  })
  .strict();

interface ImageGenerationRouterOptions {
  atlasImageClient: AtlasImageClient;
}

export function createImageGenerationRouter({
  atlasImageClient,
}: ImageGenerationRouterOptions): Router {
  const router = Router();

  router.post('/generations', async (request, response) => {
    const parsedBody = createImageGenerationSchema.safeParse(request.body);

    if (!parsedBody.success) {
      response.status(400).json({
        error: 'INVALID_IMAGE_GENERATION_REQUEST',
        message: 'Image generation request body is invalid',
        details: z.treeifyError(parsedBody.error),
      });
      return;
    }

    try {
      const prediction = await atlasImageClient.generateImage(parsedBody.data);
      response.status(202).json(prediction);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

  router.get('/generations/:id', async (request, response) => {
    const requestId = request.params.id;

    if (!requestId || requestId.trim().length === 0) {
      response.status(400).json({
        error: 'INVALID_IMAGE_GENERATION_ID',
        message: 'Image generation request id is required',
      });
      return;
    }

    try {
      const prediction = await atlasImageClient.getImageGenerationResult(requestId);
      response.status(200).json(prediction);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

  return router;
}

function sendRouteError(response: Response, error: unknown): void {
  if (error instanceof AtlasApiError) {
    response.status(error.status).json({
      error: 'ATLAS_CLOUD_REQUEST_FAILED',
      message: error.message,
      details: error.details,
    });
    return;
  }

  throw error;
}
