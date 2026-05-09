# Documentation

## Development Rules

- **CLAUDE.md** - Read first when starting work. Contains 6 core development rules: fail directly, frontend-first development, UI/UX skill usage, file organization, file creation permissions, and development logging requirements.
- **docs/CLEANUP_AND_REORG_PLAN.md** - Read when cleaning repository structure, separating backend providers, or reorganizing gameplay components.

## World Design

- **docs/WORLD_TONE.md** - Read to understand game world tone and hard rules. Defines protagonist, romance mechanics, character creation criteria, locations, events, and visual style for near-future metropolitan setting.

## Gameplay Interface

- **docs/DESIGN_SYSTEM.md** - Read when styling gameplay UI or the style gallery. Defines the black coated paper, Liquid Glass, and laser holographic foil redesign, including layout coordinates, color tokens, component patterns, and accessibility rules.
- **apps/gameplay/src/pages/dialogue.tsx** - Read when changing dialogue flow, typewriter gating, or option selection timing.
- **apps/gameplay/src/components/dialogue-box.tsx** - Read when changing typed dialogue rendering or speaker display.
- **apps/gameplay/src/components/choice-panel.tsx** - Read when changing option hover, choosing, disappearance, or reset behavior.
- **apps/gameplay/src/components/character-area.tsx** - Read when changing dialogue sprite framing or the Alex cutout presentation.
- **apps/gameplay/public/assets/alex/** - Runtime Alex sprite assets used by the dialogue scene. Read when replacing or adding Alex placeholder images.

## Data Schema Files

- **docs/CHARACTER_DATA_SCHEMA.md** - Read when building character data structures (interfaces: Character, CharacterState, ScheduleBlock, Relation, Memory)
- **docs/LOCATION_DATA_SCHEMA.md** - Read when working with location/map systems (interface: Location)
- **docs/map-sources/shibuya-crossing-overpass-query.txt** - Read when validating the Shibuya Crossing map source query.
- **docs/map-sources/shibuya-crossing-overpass.json** - Cached raw OSM/Overpass source data for the Shibuya Crossing local SVG map.
- **docs/EVENT_DATA_SCHEMA.md** - Read when building event data structures. Note: location_id in LocationCondition is required (not optional)
- **docs/DIALOGUE_DATA_SCHEMA.md** - Read when building dialogue scripts. Defines DialogueNode structure, chapters as implicit graphs, paragraph vs choice nodes

## Database Files

- **apps/server/prisma/schema.prisma** - Read when modifying database models or understanding Prisma schema
- **apps/server/src/db/init.ts** - Read when initializing database connection or adding database setup logic
- **apps/server/prisma/dev.db** - SQLite database file (created on first `prisma db push`)

## Server Services

- **apps/server/src/features/background-removal/routes/local-background-removal-route.ts** - Read when changing the local image upload endpoint that returns a transparent PNG.
- **apps/server/src/features/background-removal/providers/local-python-background-removal-service.ts** - Read when changing how the server launches and validates the local Python background-removal script.
- **apps/server/src/features/background-removal/utils/multipart.ts** - Read when changing upload parsing, file validation, or request size limits for local background removal.
- **apps/server/python/remove_background.py** - Read when changing the Python `rembg` pipeline, edge cleanup, or PNG output behavior.
- **apps/server/python/requirements.txt** - Read when changing the Python runtime dependencies for local background removal.
- **apps/server/src/features/background-removal/routes/fal-background-removal-route.ts** - Read when changing the fal background-removal endpoint.
- **apps/server/src/features/background-removal/providers/fal-background-client.ts** - Read when changing the fal request payload, polling, error handling, or response normalization.
- **apps/server/src/config/env.ts** - Read when changing required server environment variables, including `FAI_API_KEY`.
