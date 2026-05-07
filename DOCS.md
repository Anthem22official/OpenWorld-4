# Documentation

## Development Rules

- **CLAUDE.md** — Read first when starting work. Contains 6 core development rules: fail directly, frontend-first development, UI/UX skill usage, file organization, file creation permissions, and development logging requirements.

## Data Schema Files

- **CHARACTER_DATA_SCHEMA.md** — Read when building character data structures (interfaces: Character, CharacterState, ScheduleBlock, Relation, Memory)
- **LOCATION_DATA_SCHEMA.md** — Read when working with location/map systems (interface: Location)
- **EVENT_DATA_SCHEMA.md** — Read when building event data structures (interfaces: Event, Priority, Condition types)

## Database Files

- **apps/server/prisma/schema.prisma** — Read when modifying database models or understanding Prisma schema
- **apps/server/src/db/init.ts** — Read when initializing database connection or adding database setup logic
- **apps/server/prisma/dev.db** — SQLite database file (created on first `prisma db push`)
