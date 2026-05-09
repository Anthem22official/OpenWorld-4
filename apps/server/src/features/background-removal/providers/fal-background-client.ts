const FAL_BACKGROUND_REMOVAL_URL = 'https://queue.fal.run/fal-ai/bria/background/remove';

const MAX_POLL_ATTEMPTS = 120;
const POLL_INTERVAL_MS = 2000;

export interface FalBackgroundRemovalInput {
  image_url: string;
}

interface FalBackgroundClientConfig {
  apiKey: string;
}

export class FalApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details: unknown,
  ) {
    super(message);
    this.name = 'FalApiError';
  }
}

interface FalQueueSubmission {
  request_id: string;
  response_url: string;
  status_url: string;
}

interface FalQueueStatus {
  status: string;
  response_url: string;
}

export class FalBackgroundClient {
  constructor(private readonly config: FalBackgroundClientConfig) {}

  async removeBackground(input: FalBackgroundRemovalInput): Promise<unknown> {
    const submission = await this.submitRequest(input);
    return this.pollForResult(submission);
  }

  private async submitRequest(input: FalBackgroundRemovalInput): Promise<FalQueueSubmission> {
    const response = await fetch(FAL_BACKGROUND_REMOVAL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Key ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        image_url: input.image_url,
        sync_mode: false,
      }),
    });

    const body = await readResponseBody(response);

    if (!response.ok) {
      throw new FalApiError('fal background-removal request failed', response.status, body);
    }

    if (!isFalQueueSubmission(body)) {
      throw new FalApiError('fal background-removal submission returned an invalid payload', 502, body);
    }

    return body;
  }

  private async pollForResult(submission: FalQueueSubmission): Promise<unknown> {
    for (let attempt = 1; attempt <= MAX_POLL_ATTEMPTS; attempt += 1) {
      const status = await this.fetchStatus(submission.status_url);

      if (status.status === 'COMPLETED') {
        return this.fetchResult(submission.response_url);
      }

      if (status.status === 'FAILED' || status.status === 'CANCELLED') {
        throw new FalApiError(`fal background-removal request ended with status ${status.status}`, 502, status);
      }

      if (attempt < MAX_POLL_ATTEMPTS) {
        await delay(POLL_INTERVAL_MS);
      }
    }

    throw new FalApiError('Timed out waiting for fal background-removal result', 504, {
      request_id: submission.request_id,
      status_url: submission.status_url,
      response_url: submission.response_url,
    });
  }

  private async fetchStatus(statusUrl: string): Promise<FalQueueStatus> {
    const response = await fetch(statusUrl, {
      headers: {
        Authorization: `Key ${this.config.apiKey}`,
      },
    });

    const body = await readResponseBody(response);

    if (!response.ok) {
      throw new FalApiError('fal background-removal status request failed', response.status, body);
    }

    if (!isFalQueueStatus(body)) {
      throw new FalApiError('fal background-removal status returned an invalid payload', 502, body);
    }

    return body;
  }

  private async fetchResult(responseUrl: string): Promise<unknown> {
    const response = await fetch(responseUrl, {
      headers: {
        Authorization: `Key ${this.config.apiKey}`,
      },
    });

    const body = await readResponseBody(response);

    if (!response.ok) {
      throw new FalApiError('fal background-removal result request failed', response.status, body);
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
    return text;
  }
}

function isFalQueueSubmission(value: unknown): value is FalQueueSubmission {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.request_id === 'string' &&
    typeof record.response_url === 'string' &&
    typeof record.status_url === 'string'
  );
}

function isFalQueueStatus(value: unknown): value is FalQueueStatus {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return typeof record.status === 'string' && typeof record.response_url === 'string';
}

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
