import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const repoRoot = cwd.endsWith(path.normalize('apps/server')) ? path.resolve(cwd, '../..') : cwd;
const localSchemaPath = path.join(repoRoot, 'apps/server/prisma/schema.prisma');
const hostedSchemaPath = path.join(repoRoot, 'apps/server/prisma/schema.hosted.prisma');
const modelStartMarker = '// Character: Core identity (who they are)';

const localSchema = fs.readFileSync(localSchemaPath, 'utf8');
const hostedSchema = fs.readFileSync(hostedSchemaPath, 'utf8');

const localModels = readModelSection(localSchema, localSchemaPath);
const hostedModels = readModelSection(hostedSchema, hostedSchemaPath);

if (localModels !== hostedModels) {
  throw new Error(
    'Local and hosted Prisma schemas differ outside datasource/generator setup. Update both schemas together.',
  );
}

console.log('Prisma schemas match outside datasource/generator setup.');

function readModelSection(schema, schemaPath) {
  const markerIndex = schema.indexOf(modelStartMarker);
  if (markerIndex === -1) {
    throw new Error(`Schema missing model start marker: ${schemaPath}`);
  }

  return schema.slice(markerIndex).replace(/\r\n/g, '\n').trim();
}
