import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const serverRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
dotenv.config({ path: path.join(serverRoot, '.env'), quiet: true });

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'file:./dev.db';
}

const prisma = new PrismaClient();
const outputPath = path.join(serverRoot, 'prisma/seed-data/hosted-seed.json');

async function main() {
  const snapshot = {
    exportedAt: new Date().toISOString(),
    characters: await prisma.character.findMany({ orderBy: { id: 'asc' } }),
    locations: await prisma.location.findMany({ orderBy: { id: 'asc' } }),
    characterStates: await prisma.characterState.findMany({ orderBy: { id: 'asc' } }),
    scheduleBlocks: await prisma.scheduleBlock.findMany({ orderBy: { id: 'asc' } }),
    relations: await prisma.relation.findMany({ orderBy: { id: 'asc' } }),
    memories: await prisma.memory.findMany({ orderBy: { id: 'asc' } }),
    dialogueNodes: await prisma.dialogueNode.findMany({ orderBy: { id: 'asc' } }),
    dialogueChoices: await prisma.dialogueChoice.findMany({
      orderBy: [{ dialogue_node_id: 'asc' }, { sort_order: 'asc' }],
    }),
    events: await prisma.event.findMany({ orderBy: { id: 'asc' } }),
    gameRuntimeStates: await prisma.gameRuntimeState.findMany({ orderBy: { id: 'asc' } }),
  };

  assertSnapshot(snapshot);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  console.log(`Exported hosted seed snapshot to ${outputPath}`);
}

function assertSnapshot(snapshot: {
  characters: unknown[];
  locations: unknown[];
  dialogueNodes: unknown[];
  events: unknown[];
  gameRuntimeStates: Array<{ id: string }>;
}): void {
  if (snapshot.characters.length === 0) throw new Error('Seed export refused: no characters found');
  if (snapshot.locations.length === 0) throw new Error('Seed export refused: no locations found');
  if (snapshot.dialogueNodes.length === 0) throw new Error('Seed export refused: no dialogue nodes found');
  if (snapshot.events.length === 0) throw new Error('Seed export refused: no events found');
  if (!snapshot.gameRuntimeStates.some((state) => state.id === 'default')) {
    throw new Error('Seed export refused: GameRuntimeState default row not found');
  }
}

main()
  .catch((error) => {
    console.error('Local seed export failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
