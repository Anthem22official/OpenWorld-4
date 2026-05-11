import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { buildGameBootstrap } from '../game-bootstrap-mapper';

interface GameBootstrapRouterOptions {
  prisma: PrismaClient;
}

export function createGameBootstrapRouter({
  prisma,
}: GameBootstrapRouterOptions): Router {
  const router = Router();

  router.get('/bootstrap', async (_request, response, next) => {
    try {
      response.status(200).json(await buildGameBootstrap(prisma));
    } catch (error) {
      next(error);
    }
  });

  return router;
}
