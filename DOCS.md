# Documentation

## Development Rules

- **CLAUDE.md** - Read first when starting work. Contains 6 core development rules: fail directly, frontend-first development, UI/UX skill usage, file organization, file creation permissions, and development logging requirements.
- **docs/CLEANUP_AND_REORG_PLAN.md** - Read when cleaning repository structure, separating backend providers, or reorganizing gameplay components.

## World Design

- **docs/WORLD_TONE.md** - Read to understand game world tone and hard rules. Defines protagonist, romance mechanics, character creation criteria, locations, events, and visual style for near-future metropolitan setting.

## Gameplay Interface

- **docs/DESIGN_SYSTEM.md** - Read when styling gameplay UI or the style gallery. Defines the black coated paper, Liquid Glass, and laser holographic foil redesign, including layout coordinates, color tokens, component patterns, and accessibility rules.
- **apps/gameplay/src/time/game-time.ts** - Read when changing gameplay clock advancement or location travel time calculations.
- **apps/gameplay/src/events/location-event-handler.ts** - Read when changing location-entry event resolution, condition matching, event priority selection, or dialogue starts from events.
- **apps/gameplay/src/scenes/event/event-panel.tsx** - Read when changing optional event selection or no-event map return behavior.
- **apps/gameplay/src/scenes/map/components/map-character-layer.tsx** - Read when changing active character icon placement on the SVG map.
- **apps/gameplay/src/scenes/dialogue/dialogue-page.tsx** - Read when changing dialogue flow, typewriter gating, or option selection timing.
- **apps/gameplay/src/scenes/dialogue/components/dialogue-box.tsx** - Read when changing typed dialogue rendering or speaker display.
- **apps/gameplay/src/scenes/dialogue/components/choice-panel.tsx** - Read when changing option hover, choosing, disappearance, or reset behavior.
- **apps/gameplay/src/scenes/dialogue/components/character-area.tsx** - Read when changing dialogue sprite framing or database character sprite resolution.
- **apps/gameplay/public/assets/database/characters/** - Runtime transparent PNG character assets used by dialogue and character gallery views.

## Data Schema Files

- **docs/CHARACTER_DATA_SCHEMA.md** - Read when building character data structures (interfaces: Character, CharacterState, ScheduleBlock, Relation, Memory)
- **docs/LOCATION_DATA_SCHEMA.md** - Read when working with location/map systems (interface: Location)
- **docs/MAP_SOURCE_WORKFLOW.md** - Read when adding a new OSM-derived area map, generating cached map source data, or wiring selector metadata.
- **docs/map-sources/shibuya-crossing-overpass-query.txt** - Read when validating the Shibuya Crossing map source query.
- **docs/map-sources/shibuya-crossing-overpass.json** - Cached raw OSM/Overpass source data for the Shibuya Crossing local SVG map.
- **docs/map-sources/ebisu-station-overpass-query.txt** - Exact Overpass query for the Ebisu Station / Garden Place building-only map.
- **docs/map-sources/ebisu-station-overpass.json** - Cached raw OSM/Overpass response for the Ebisu Station / Garden Place building-only map.
- **docs/EVENT_DATA_SCHEMA.md** - Read when building event data structures. Note: location_id in LocationCondition is required (not optional)
- **docs/DIALOGUE_DATA_SCHEMA.md** - Read when building dialogue scripts. Defines DialogueNode graph flow, VN scene staging, CG overlay rules, background/CG asset keys, and paragraph vs choice nodes.

## Database Files

- **apps/server/prisma/schema.prisma** - Read when modifying database models or understanding Prisma schema
- **docs/DATABASE_BOOTSTRAP_SQL.md** - Read when validating or manually restoring MVP Shibuya, 4-character event, dialogue content, and the Ren CG overlay reference node in local or production database environments.
- **apps/server/prisma/seed-production.ts** - Read when seeding an empty Render Postgres database with the current MVP bootstrap rows.
- **docs/ASSET_HIERARCHY.md** - Read when adding database-linked runtime assets such as character full-body images, voice WAV files, location backgrounds, dialogue CGs, or future storage object keys.
- **docs/LOCATION_BACKGROUND_ASSET_STYLE_PROMPT.md** - Read when generating or promoting canonical location background images. Contains shared visual style, Atlas GPT Image 2 defaults, drawing-quality findings, test output, and prompts for the current Shibuya map locations.
- **scripts/crop-character-head-icons.py** - Read when regenerating 512x512 character header icons from transparent full-body character PNGs.
- **apps/server/src/db/init.ts** - Read when initializing database connection or adding database setup logic
- **apps/server/prisma/dev.db** - Legacy/local SQLite database backup; production schema now targets Render Postgres.

## Server Services

- **apps/studio/** - Read when changing the mock-first OpenWorld Studio UI for creator pipelines, event planning, CG debugging, or TTS debugging.
- **apps/server/src/features/background-removal/routes/local-background-removal-route.ts** - Read when changing the local image upload endpoint that returns a transparent PNG.
- **apps/server/src/features/background-removal/providers/local-python-background-removal-service.ts** - Read when changing how the server launches and validates the local Python background-removal script.
- **apps/server/src/features/background-removal/utils/multipart.ts** - Read when changing upload parsing, file validation, or request size limits for local background removal.
- **apps/server/python/remove_background.py** - Read when changing the Python `rembg` pipeline, edge cleanup, or PNG output behavior.
- **apps/server/python/requirements.txt** - Read when changing the Python runtime dependencies for local background removal.
- **apps/server/src/features/background-removal/routes/fal-background-removal-route.ts** - Read when changing the fal background-removal endpoint.
- **apps/server/src/features/background-removal/providers/fal-background-client.ts** - Read when changing the fal request payload, polling, error handling, or response normalization.
- **apps/server/src/features/image-generation/routes/image-generation-route.ts** - Read when changing the Atlas image-generation endpoint or preview proxy.
- **apps/server/src/features/image-generation/providers/atlas-image-client.ts** - Read when changing the Atlas request payload, polling, error handling, or response normalization.
- **apps/server/src/features/text-to-speech/routes/text-to-speech-route.ts** - Read when changing the OpenRouter text-to-speech endpoint that returns WAV audio.
- **apps/server/src/features/text-to-speech/services/event-voice-generation-service.ts** - Read when changing event-to-dialogue voice generation, asset file writes, or dialogue `voice_asset_key` updates.
- **apps/server/src/features/text-to-speech/providers/openrouter-tts-client.ts** - Read when changing the OpenRouter speech request payload or PCM-to-WAV wrapping.
- **apps/server/src/config/env.ts** - Read when changing required server environment variables, including `FAL_API_KEY` and `OPENROUTER_API_KEY`.
