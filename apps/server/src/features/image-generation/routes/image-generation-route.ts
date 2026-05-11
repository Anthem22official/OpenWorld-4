import { type Response, Router } from 'express';
import { z } from 'zod';
import {
  AtlasApiError,
  AtlasImageClient,
  IMAGE_OUTPUT_FORMATS,
  IMAGE_QUALITIES,
  IMAGE_SIZES,
} from '../providers/atlas-image-client';

const ALLOWED_PREVIEW_IMAGE_HOST = 'atlas-img.oss-us-west-1.aliyuncs.com';
const ALLOWED_PREVIEW_IMAGE_PATH_PREFIX = '/images/';

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

  router.get('/preview', async (request, response) => {
    const parsedUrl = parsePreviewImageUrl(request.query.url);

    if (!parsedUrl.success) {
      response.status(400).json({
        error: 'INVALID_IMAGE_PREVIEW_URL',
        message: parsedUrl.message,
      });
      return;
    }

    try {
      const previewResponse = await fetchPreviewImage(parsedUrl.url);

      response.status(200);
      response.setHeader('Content-Type', previewResponse.contentType);
      response.setHeader('Content-Disposition', 'inline');
      response.setHeader('Cache-Control', 'no-store');
      response.send(previewResponse.body);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

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

interface PreviewImageResponse {
  body: Buffer;
  contentType: string;
}

class PreviewImageProxyError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'PreviewImageProxyError';
  }
}

type PreviewImageUrlResult =
  | {
      success: true;
      url: URL;
    }
  | {
      success: false;
      message: string;
    };

function parsePreviewImageUrl(value: unknown): PreviewImageUrlResult {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return {
      success: false,
      message: 'Image preview url query parameter is required',
    };
  }

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return {
      success: false,
      message: 'Image preview url query parameter must be a valid URL',
    };
  }

  if (url.protocol !== 'https:') {
    return {
      success: false,
      message: 'Image preview url must use https',
    };
  }

  if (url.hostname !== ALLOWED_PREVIEW_IMAGE_HOST) {
    return {
      success: false,
      message: `Image preview url host must be ${ALLOWED_PREVIEW_IMAGE_HOST}`,
    };
  }

  if (!url.pathname.startsWith(ALLOWED_PREVIEW_IMAGE_PATH_PREFIX)) {
    return {
      success: false,
      message: `Image preview url path must start with ${ALLOWED_PREVIEW_IMAGE_PATH_PREFIX}`,
    };
  }

  return {
    success: true,
    url,
  };
}

async function fetchPreviewImage(url: URL): Promise<PreviewImageResponse> {
  let upstreamResponse: globalThis.Response;

  try {
    upstreamResponse = await fetch(url);
  } catch (error) {
    throw new PreviewImageProxyError('Image preview upstream request failed', 502, {
      url: redactPreviewUrl(url),
      message: error instanceof Error ? error.message : 'Unknown fetch error',
    });
  }

  const contentType = upstreamResponse.headers.get('content-type');

  if (!upstreamResponse.ok) {
    throw new PreviewImageProxyError(
      `Image preview upstream request failed with HTTP ${upstreamResponse.status}`,
      upstreamResponse.status,
      {
        url: redactPreviewUrl(url),
        contentType,
      },
    );
  }

  if (!contentType || !contentType.toLowerCase().startsWith('image/')) {
    throw new PreviewImageProxyError('Image preview upstream response is not an image', 502, {
      url: redactPreviewUrl(url),
      contentType,
    });
  }

  const body = Buffer.from(await upstreamResponse.arrayBuffer());

  if (body.length === 0) {
    throw new PreviewImageProxyError('Image preview upstream response body is empty', 502, {
      url: redactPreviewUrl(url),
      contentType,
    });
  }

  return {
    body,
    contentType,
  };
}

function redactPreviewUrl(url: URL): string {
  return `${url.origin}${url.pathname}`;
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

  if (error instanceof PreviewImageProxyError) {
    response.status(error.status).json({
      error: 'IMAGE_PREVIEW_PROXY_FAILED',
      message: error.message,
      details: error.details,
    });
    return;
  }

  throw error;
}
