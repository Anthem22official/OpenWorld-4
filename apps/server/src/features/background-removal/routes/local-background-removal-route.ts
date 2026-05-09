import { type Response, Router } from 'express';
import { BackgroundRemovalError } from '../errors';
import {
  extractSingleUploadedFile,
  parseMultipartFormData,
} from '../utils/multipart';
import { LocalBackgroundRemovalService } from '../providers/local-python-background-removal-service';

interface LocalBackgroundRemovalRouterOptions {
  localBackgroundRemovalService: LocalBackgroundRemovalService;
}

export function createLocalBackgroundRemovalRouter({
  localBackgroundRemovalService,
}: LocalBackgroundRemovalRouterOptions): Router {
  const router = Router();

  router.post('/', async (request, response) => {
    try {
      const cleanup = readCleanupQuery(request.query.cleanup);
      const formData = await parseMultipartFormData(request);
      const uploadedFile = extractSingleUploadedFile(formData);
      const imageBuffer = Buffer.from(await uploadedFile.arrayBuffer());
      const pngBuffer = await localBackgroundRemovalService.removeBackground(imageBuffer, cleanup);

      response.status(200);
      response.setHeader('Content-Type', 'image/png');
      response.setHeader('Content-Length', String(pngBuffer.length));
      response.send(pngBuffer);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

  return router;
}

function readCleanupQuery(value: unknown): boolean {
  if (value === undefined) {
    return false;
  }

  if (value === 'true' || value === '1') {
    return true;
  }

  if (value === 'false' || value === '0') {
    return false;
  }

  throw new BackgroundRemovalError(
    'cleanup query parameter must be true or false',
    400,
    'INVALID_BACKGROUND_REMOVAL_REQUEST',
  );
}

function sendRouteError(response: Response, error: unknown): void {
  if (error instanceof BackgroundRemovalError) {
    response.status(error.status).json({
      error: error.code,
      message: error.message,
      details: error.details,
    });
    return;
  }

  throw error;
}
