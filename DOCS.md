# Documentation

## Development Rules

- **CLAUDE.md** — Read first when starting work. Contains 6 core development rules: fail directly, frontend-first development, UI/UX skill usage, file organization, file creation permissions, and development logging requirements.

## World Design

- **docs/WORLD_TONE.md** — Read to understand game world tone and hard rules. Defines protagonist, romance mechanics, character creation criteria, locations, events, and visual style for near-future metropolitan setting.

## Gameplay Interface

- **docs/GAMEPLAY_INTERFACE_REQUIREMENTS.md** — Read when building gameplay UI. Contains architecture, large UI elements, and page flow for Dialogue Display and Map pages.

## Data Schema Files

- **docs/CHARACTER_DATA_SCHEMA.md** — Read when building character data structures (interfaces: Character, CharacterState, ScheduleBlock, Relation, Memory)
- **docs/LOCATION_DATA_SCHEMA.md** — Read when working with location/map systems (interface: Location)
- **docs/EVENT_DATA_SCHEMA.md** — Read when building event data structures. Note: location_id in LocationCondition is required (not optional)
- **docs/DIALOGUE_DATA_SCHEMA.md** — Read when building dialogue scripts. Defines DialogueNode structure, chapters as implicit graphs, paragraph vs choice nodes

## Database Files

- **apps/server/prisma/schema.prisma** — Read when modifying database models or understanding Prisma schema
- **apps/server/src/db/init.ts** — Read when initializing database connection or adding database setup logic
- **apps/server/prisma/dev.db** — SQLite database file (created on first `prisma db push`)
