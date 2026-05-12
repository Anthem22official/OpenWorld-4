const OPENROUTER_SPEECH_URL = 'https://openrouter.ai/api/v1/audio/speech';
const OPENROUTER_RESPONSE_FORMAT = 'pcm';
const WAV_SAMPLE_RATE = 24000;
const WAV_CHANNELS = 1;
const WAV_BITS_PER_SAMPLE = 16;

export interface OpenRouterSpeechInput {
  input: string;
  model: string;
  voice: string;
}

export interface OpenRouterSpeechResult {
  audio: Buffer;
  generationId?: string;
}

interface OpenRouterTtsClientConfig {
  apiKey: string | undefined;
}

export class OpenRouterTtsConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OpenRouterTtsConfigError';
  }
}

export class OpenRouterTtsError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details: unknown,
  ) {
    super(message);
    this.name = 'OpenRouterTtsError';
  }
}

export class OpenRouterTtsClient {
  constructor(private readonly config: OpenRouterTtsClientConfig) {}

  async generateSpeechWav(input: OpenRouterSpeechInput): Promise<OpenRouterSpeechResult> {
    const apiKey = this.requireApiKey();
    const response = await fetch(OPENROUTER_SPEECH_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: input.model,
        input: input.input,
        voice: input.voice,
        response_format: OPENROUTER_RESPONSE_FORMAT,
      }),
    });

    const responseBytes = Buffer.from(await response.arrayBuffer());

    if (!response.ok) {
      throw new OpenRouterTtsError('OpenRouter speech request failed', response.status, {
        statusText: response.statusText,
        body: responseBytes.toString('utf8'),
      });
    }

    if (responseBytes.length === 0) {
      throw new OpenRouterTtsError('OpenRouter returned an empty audio response', 502, null);
    }

    return {
      audio: wrapPcmAsWav(responseBytes),
      generationId: readOptionalHeader(response, 'x-generation-id'),
    };
  }

  private requireApiKey(): string {
    const apiKey = this.config.apiKey?.trim();
    if (!apiKey) {
      throw new OpenRouterTtsConfigError('OpenRouter text-to-speech is not configured for this gameplay mode');
    }

    return apiKey;
  }
}

function wrapPcmAsWav(pcmBuffer: Buffer): Buffer {
  const byteRate = WAV_SAMPLE_RATE * WAV_CHANNELS * (WAV_BITS_PER_SAMPLE / 8);
  const blockAlign = WAV_CHANNELS * (WAV_BITS_PER_SAMPLE / 8);
  const wavBuffer = Buffer.alloc(44 + pcmBuffer.length);

  wavBuffer.write('RIFF', 0);
  wavBuffer.writeUInt32LE(36 + pcmBuffer.length, 4);
  wavBuffer.write('WAVE', 8);
  wavBuffer.write('fmt ', 12);
  wavBuffer.writeUInt32LE(16, 16);
  wavBuffer.writeUInt16LE(1, 20);
  wavBuffer.writeUInt16LE(WAV_CHANNELS, 22);
  wavBuffer.writeUInt32LE(WAV_SAMPLE_RATE, 24);
  wavBuffer.writeUInt32LE(byteRate, 28);
  wavBuffer.writeUInt16LE(blockAlign, 32);
  wavBuffer.writeUInt16LE(WAV_BITS_PER_SAMPLE, 34);
  wavBuffer.write('data', 36);
  wavBuffer.writeUInt32LE(pcmBuffer.length, 40);
  pcmBuffer.copy(wavBuffer, 44);

  return wavBuffer;
}

function readOptionalHeader(response: Response, headerName: string): string | undefined {
  const value = response.headers.get(headerName);

  if (!value || value.trim().length === 0) {
    return undefined;
  }

  return value;
}
