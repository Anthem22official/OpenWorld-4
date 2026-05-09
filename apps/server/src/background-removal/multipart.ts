import type { IncomingHttpHeaders, IncomingMessage } from 'node:http';
import { BackgroundRemovalError } from './errors';

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;

export async function parseMultipartFormData(request: IncomingMessage): Promise<FormData> {
  const contentType = request.headers['content-type'];

  if (typeof contentType !== 'string' || !contentType.startsWith('multipart/form-data')) {
    throw new BackgroundRemovalError(
      'Expected multipart/form-data upload',
      400,
      'INVALID_BACKGROUND_REMOVAL_UPLOAD',
    );
  }

  const body = await readRequestBody(request, MAX_UPLOAD_BYTES);

  if (body.length === 0) {
    throw new BackgroundRemovalError(
      'Uploaded image payload is empty',
      400,
      'EMPTY_BACKGROUND_REMOVAL_UPLOAD',
    );
  }

  const fetchRequest = new Request(
    'http://localhost/background-removal/local',
    {
    method: request.method ?? 'POST',
    headers: toHeaders(request.headers),
    body: body as unknown as BodyInit,
    duplex: 'half',
    } as RequestInit & { duplex: 'half' },
  );

  try {
    return await fetchRequest.formData();
  } catch (error) {
    throw new BackgroundRemovalError(
      'Unable to parse multipart upload',
      400,
      'INVALID_BACKGROUND_REMOVAL_UPLOAD',
      error instanceof Error ? error.message : String(error),
    );
  }
}

export function extractSingleUploadedFile(formData: FormData): File {
  let foundFile: File | null = null;

  formData.forEach((value, fieldName) => {
    if (!(value instanceof File)) {
      throw new BackgroundRemovalError(
        `Unexpected multipart field: ${fieldName}`,
        400,
        'INVALID_BACKGROUND_REMOVAL_UPLOAD',
      );
    }

    if (foundFile) {
      throw new BackgroundRemovalError(
        'Expected exactly one uploaded image',
        400,
        'INVALID_BACKGROUND_REMOVAL_UPLOAD',
      );
    }

    if (value.size === 0) {
      throw new BackgroundRemovalError(
        'Uploaded image is empty',
        400,
        'EMPTY_BACKGROUND_REMOVAL_UPLOAD',
      );
    }

    if (value.type.length > 0 && !value.type.startsWith('image/')) {
      throw new BackgroundRemovalError(
        'Uploaded file must be an image',
        400,
        'INVALID_BACKGROUND_REMOVAL_UPLOAD',
      );
    }

    foundFile = value;
  });

  if (!foundFile) {
    throw new BackgroundRemovalError(
      'No uploaded image was provided',
      400,
      'EMPTY_BACKGROUND_REMOVAL_UPLOAD',
    );
  }

  return foundFile;
}

async function readRequestBody(request: IncomingMessage, maxBytes: number): Promise<Buffer> {
  const chunks: Buffer[] = [];
  let totalBytes = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    totalBytes += buffer.length;

    if (totalBytes > maxBytes) {
      throw new BackgroundRemovalError(
        'Uploaded image is too large',
        413,
        'BACKGROUND_REMOVAL_UPLOAD_TOO_LARGE',
      );
    }

    chunks.push(buffer);
  }

  return Buffer.concat(chunks, totalBytes);
}

function toHeaders(headers: IncomingHttpHeaders): Headers {
  const result = new Headers();

  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        result.append(key, item);
      }
      continue;
    }

    result.set(key, value);
  }

  return result;
}
