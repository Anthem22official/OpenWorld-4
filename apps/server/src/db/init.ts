import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function initializeDatabase() {
  try {
    // Test connection
    await prisma.$queryRaw`SELECT 1`;
    console.log('✓ Database connected');
  } catch (error) {
    console.error('✗ Database connection failed:', error);
    throw error;
  }
}

export { prisma };
