import { initializeDatabase } from './db/init';

async function main() {
  try {
    await initializeDatabase();
    console.log('Server initialized successfully');
  } catch (error) {
    console.error('Failed to initialize server:', error);
    process.exit(1);
  }
}

main();
