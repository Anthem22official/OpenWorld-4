import { type Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { OpenRouterTtsClient, OpenRouterTtsError } from '../providers/openrouter-tts-client';
import {
  EventVoiceGenerationError,
  EventVoiceGenerationService,
} from '../services/event-voice-generation-service';

const createSpeechSchema = z
  .object({
    input: z.string().trim().min(1),
    model: z.string().trim().min(1),
    voice: z.string().trim().min(1),
  })
  .strict();

interface TextToSpeechRouterOptions {
  openRouterTtsClient: OpenRouterTtsClient;
  prisma: PrismaClient;
}

export function createTextToSpeechRouter({
  openRouterTtsClient,
  prisma,
}: TextToSpeechRouterOptions): Router {
  const router = Router();
  const eventVoiceGenerationService = new EventVoiceGenerationService({
    openRouterTtsClient,
    prisma,
  });

  router.post('/speech', async (request, response) => {
    const parsedBody = createSpeechSchema.safeParse(request.body);

    if (!parsedBody.success) {
      response.status(400).json({
        error: 'INVALID_TEXT_TO_SPEECH_REQUEST',
        message: 'Text-to-speech request body is invalid',
        details: z.treeifyError(parsedBody.error),
      });
      return;
    }

    try {
      const result = await openRouterTtsClient.generateSpeechWav(parsedBody.data);

      response.status(200);
      response.setHeader('Content-Type', 'audio/wav');
      response.setHeader('Content-Disposition', 'inline');
      response.setHeader('Cache-Control', 'no-store');

      if (result.generationId) {
        response.setHeader('X-Generation-Id', result.generationId);
      }

      response.send(result.audio);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

  router.post('/events/:eventId/voices', async (request, response) => {
    const eventId = request.params.eventId;
    if (!eventId || eventId.trim().length === 0) {
      response.status(400).json({
        error: 'INVALID_EVENT_ID',
        message: 'Event id is required',
      });
      return;
    }

    const parsedBody = createEventVoicesSchema.safeParse(request.body);

    if (!parsedBody.success) {
      response.status(400).json({
        error: 'INVALID_EVENT_VOICE_GENERATION_REQUEST',
        message: 'Event voice generation request body is invalid',
        details: z.treeifyError(parsedBody.error),
      });
      return;
    }

    try {
      const result = await eventVoiceGenerationService.generateEventVoices({
        eventId,
        model: parsedBody.data.model,
        voice: parsedBody.data.voice,
      });
      response.status(200).json(result);
    } catch (error) {
      sendRouteError(response, error);
    }
  });

  return router;
}

const createEventVoicesSchema = z
  .object({
    model: z.string().trim().min(1),
    voice: z.string().trim().min(1),
  })
  .strict();

function sendRouteError(response: Response, error: unknown): void {
  if (error instanceof OpenRouterTtsError) {
    response.status(error.status).json({
      error: 'OPENROUTER_TTS_REQUEST_FAILED',
      message: error.message,
      details: error.details,
    });
    return;
  }

  if (error instanceof EventVoiceGenerationError) {
    response.status(error.status).json({
      error: 'EVENT_VOICE_GENERATION_FAILED',
      message: error.message,
      details: error.details,
    });
    return;
  }

  throw error;
}
