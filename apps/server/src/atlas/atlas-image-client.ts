export const ATLAS_TEXT_TO_IMAGE_MODEL = 'openai/gpt-image-2/text-to-image';

export const IMAGE_SIZES = [
  '1024x768',
  '768x1024',
  '1024x1024',
  '1024x1536',
  '1536x1024',
  '2560x1440',
  '1440x2560',
  '3840x2160',
  '2160x3840',
] as const;

export const IMAGE_QUALITIES = ['low', 'medium', 'high'] as const;
export const IMAGE_OUTPUT_FORMATS = ['jpeg', 'png'] as const;

export type ImageSize = (typeof IMAGE_SIZES)[number];
export type ImageQuality = (typeof IMAGE_QUALITIES)[number];
export type ImageOutputFormat = (typeof IMAGE_OUTPUT_FORMATS)[number];

export interface AtlasImageGenerationInput {
  prompt: string;
  size?: ImageSize;
  quality?: ImageQuality;
  output_format?: ImageOutputFormat;
}

export interface AtlasPredictionResponse {
  id: string;
  status: string;
  outputs: string[];
  created_at?: string;
  has_nsfw_contents?: boolean[];
  model?: string;
  urls?: Record<string, unknown>;
}

interface AtlasImageClientConfig {
  apiKey: string;
}

export class AtlasApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details: unknown,
  ) {
    super(message);
    this.name = 'AtlasApiError';
  }
}

const ATLAS_BASE_URL = 'https://api.atlascloud.ai';

export class AtlasImageClient {
  constructor(private readonly config: AtlasImageClientConfig) {}

  async generateImage(input: AtlasImageGenerationInput): Promise<AtlasPredictionResponse> {
    const response = await fetch(`${ATLAS_BASE_URL}/api/v1/model/generateImage`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        model: ATLAS_TEXT_TO_IMAGE_MODEL,
        prompt: input.prompt,
        size: input.size,
        quality: input.quality,
        output_format: input.output_format,
      }),
    });

    return this.readPredictionResponse(response);
  }

  async getImageGenerationResult(requestId: string): Promise<AtlasPredictionResponse> {
    const response = await fetch(
      `${ATLAS_BASE_URL}/api/v1/model/result/${encodeURIComponent(requestId)}`,
      {
        method: 'GET',
        headers: this.headers(),
      },
    );

    return this.readPredictionResponse(response);
  }

  private headers(): HeadersInit {
    return {
      Authorization: `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  private async readPredictionResponse(response: Response): Promise<AtlasPredictionResponse> {
    const body = await readResponseBody(response);

    if (!response.ok) {
      throw new AtlasApiError('Atlas Cloud request failed', response.status, body);
    }

    return normalizePredictionResponse(body);
  }
}

async function readResponseBody(response: Response): Promise<unknown> {
  const text = await response.text();

  if (text.trim().length === 0) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    if (!response.ok) {
      return text;
    }

    throw new AtlasApiError('Atlas Cloud returned invalid JSON', 502, text);
  }
}

function normalizePredictionResponse(body: unknown): AtlasPredictionResponse {
  const payload = unwrapAtlasPayload(body);

  if (!isRecord(payload)) {
    throw new AtlasApiError('Atlas Cloud returned an invalid prediction payload', 502, body);
  }

  const id = payload.id;
  const status = payload.status;

  if (typeof id !== 'string' || id.length === 0) {
    throw new AtlasApiError('Atlas Cloud prediction payload is missing id', 502, body);
  }

  if (typeof status !== 'string' || status.length === 0) {
    throw new AtlasApiError('Atlas Cloud prediction payload is missing status', 502, body);
  }

  return {
    id,
    status,
    outputs: readStringArray(payload.outputs),
    created_at: readOptionalString(payload.created_at),
    has_nsfw_contents: readBooleanArray(payload.has_nsfw_contents),
    model: readOptionalString(payload.model),
    urls: isRecord(payload.urls) ? payload.urls : undefined,
  };
}

function unwrapAtlasPayload(body: unknown): unknown {
  if (!isRecord(body)) {
    return body;
  }

  if ('data' in body) {
    return body.data;
  }

  return body;
}

function readStringArray(value: unknown): string[] {
  if (value === undefined || value === null) {
    return [];
  }

  if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
    throw new AtlasApiError('Atlas Cloud prediction payload has invalid outputs', 502, value);
  }

  return value;
}

function readBooleanArray(value: unknown): boolean[] | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (!Array.isArray(value) || !value.every((item) => typeof item === 'boolean')) {
    throw new AtlasApiError(
      'Atlas Cloud prediction payload has invalid has_nsfw_contents',
      502,
      value,
    );
  }

  return value;
}

function readOptionalString(value: unknown): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'string') {
    throw new AtlasApiError('Atlas Cloud prediction payload has invalid string field', 502, value);
  }

  return value;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
