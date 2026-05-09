const MODELSLAB_BACKGROUND_REMOVAL_URL =
  'https://modelslab.com/api/v8/images/background-removal';

export const MODELSLAB_BACKGROUND_REMOVAL_MODEL = 'background-remover-1';

export interface ModelslabBackgroundRemovalInput {
  image_url: string;
  only_mask?: boolean;
  inverse_mask?: boolean;
  seed?: number | null;
  alpha_matting?: boolean;
  post_process_mask?: boolean;
  track_id?: string | null;
  base64?: 'yes' | 'no';
  webhook?: string | null;
}

interface ModelslabBackgroundClientConfig {
  apiKey: string;
}

export class ModelslabApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details: unknown,
  ) {
    super(message);
    this.name = 'ModelslabApiError';
  }
}

export class ModelslabBackgroundClient {
  constructor(private readonly config: ModelslabBackgroundClientConfig) {}

  async removeBackground(input: ModelslabBackgroundRemovalInput): Promise<unknown> {
    const response = await fetch(MODELSLAB_BACKGROUND_REMOVAL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_url: input.image_url,
        only_mask: input.only_mask ?? false,
        inverse_mask: input.inverse_mask ?? false,
        seed: input.seed ?? null,
        alpha_matting: input.alpha_matting ?? false,
        post_process_mask: input.post_process_mask ?? false,
        track_id: input.track_id ?? null,
        model_id: MODELSLAB_BACKGROUND_REMOVAL_MODEL,
        base64: input.base64 ?? 'no',
        webhook: input.webhook ?? null,
        key: this.config.apiKey,
      }),
    });

    const body = await readResponseBody(response);

    if (!response.ok) {
      throw new ModelslabApiError('Modelslab background-removal request failed', response.status, body);
    }

    return body;
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

    throw new ModelslabApiError('Modelslab returned invalid JSON', 502, text);
  }
}
