import { Prisma, PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const serverRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
dotenv.config({ path: path.join(serverRoot, '.env'), quiet: true });

const prisma = new PrismaClient();
const seedPath = path.join(serverRoot, 'prisma/seed-data/hosted-seed.json');

async function main() {
  const snapshot = JSON.parse(await readFile(seedPath, 'utf8')) as SeedSnapshot;
  assertSeedSnapshot(snapshot);

  await prisma.$transaction(async (tx) => {
    await tx.gameRuntimeState.deleteMany();
    await tx.event.deleteMany();
    await tx.dialogueChoice.deleteMany();
    await tx.dialogueNode.deleteMany();
    await tx.memory.deleteMany();
    await tx.relation.deleteMany();
    await tx.scheduleBlock.deleteMany();
    await tx.characterState.deleteMany();
    await tx.location.deleteMany();
    await tx.character.deleteMany();

    await tx.character.createMany({ data: snapshot.characters });
    await tx.location.createMany({ data: snapshot.locations });
    await tx.characterState.createMany({ data: snapshot.characterStates });
    await tx.scheduleBlock.createMany({ data: snapshot.scheduleBlocks });
    await tx.relation.createMany({ data: snapshot.relations });
    await tx.memory.createMany({ data: snapshot.memories });
    await tx.dialogueNode.createMany({
      data: snapshot.dialogueNodes.map((node) => ({
        ...node,
        next_dialogue_id: null,
      })),
    });

    for (const node of snapshot.dialogueNodes) {
      if (!node.next_dialogue_id) continue;
      await tx.dialogueNode.update({
        where: { id: node.id },
        data: { next_dialogue_id: node.next_dialogue_id },
      });
    }

    await tx.dialogueChoice.createMany({ data: snapshot.dialogueChoices });
    await tx.event.createMany({ data: snapshot.events });
    await tx.gameRuntimeState.createMany({ data: snapshot.gameRuntimeStates });
  });

  console.log(`Imported hosted seed snapshot from ${seedPath}`);
}

interface SeedSnapshot {
  exportedAt: string;
  characters: Prisma.CharacterCreateManyInput[];
  locations: Prisma.LocationCreateManyInput[];
  characterStates: Prisma.CharacterStateCreateManyInput[];
  scheduleBlocks: Prisma.ScheduleBlockCreateManyInput[];
  relations: Prisma.RelationCreateManyInput[];
  memories: Prisma.MemoryCreateManyInput[];
  dialogueNodes: Prisma.DialogueNodeCreateManyInput[];
  dialogueChoices: Prisma.DialogueChoiceCreateManyInput[];
  events: Prisma.EventCreateManyInput[];
  gameRuntimeStates: Prisma.GameRuntimeStateCreateManyInput[];
}

function assertSeedSnapshot(snapshot: SeedSnapshot): void {
  assertArray(snapshot.characters, 'characters');
  assertArray(snapshot.locations, 'locations');
  assertArray(snapshot.characterStates, 'characterStates');
  assertArray(snapshot.scheduleBlocks, 'scheduleBlocks');
  assertArray(snapshot.relations, 'relations');
  assertArray(snapshot.memories, 'memories');
  assertArray(snapshot.dialogueNodes, 'dialogueNodes');
  assertArray(snapshot.dialogueChoices, 'dialogueChoices');
  assertArray(snapshot.events, 'events');
  assertArray(snapshot.gameRuntimeStates, 'gameRuntimeStates');

  if (snapshot.characters.length === 0) throw new Error('Hosted seed refused: no characters found');
  if (snapshot.locations.length === 0) throw new Error('Hosted seed refused: no locations found');
  if (snapshot.dialogueNodes.length === 0) throw new Error('Hosted seed refused: no dialogue nodes found');
  if (snapshot.events.length === 0) throw new Error('Hosted seed refused: no events found');
  if (!snapshot.gameRuntimeStates.some((state) => state.id === 'default')) {
    throw new Error('Hosted seed refused: GameRuntimeState default row not found');
  }
}

function assertArray(value: unknown, label: string): asserts value is unknown[] {
  if (!Array.isArray(value)) {
    throw new Error(`Hosted seed snapshot field must be an array: ${label}`);
  }
}

main()
  .catch((error) => {
    console.error('Hosted seed import failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
