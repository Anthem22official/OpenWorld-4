# Development Log

## Version 1.6.9 - Click Particle Effect

[2026-05-11 13:41] Version 1.6.9 - Added a global click particle overlay with restrained laser-foil bursts across gameplay screens, preserving existing click behavior and reduced-motion handling.

## Version 1.6.7 - Map Scan UI Polish

[2026-05-11 13:10] Version 1.6.7 - Restyled the Shibuya local map around docs/DESIGN_SYSTEM.md materials with black coated paper framing, restrained foil building states, labels, and a draggable focused map view.

## Version 1.6.6 - Character Profile Page

[2026-05-11 12:59] Version 1.6.6 - Added a read-only gameplay Character page beside Debug, showing Alex mock identity, current state, schedule, and memory data with a selector ready for more characters. Rebuilt the page styling to follow docs/DESIGN_SYSTEM.md materials: black coated paper base, liquid-glass interactive controls, and restrained foil accents.

## Version 1.6.5 - Mock Character Data

[2026-05-11 12:55] Version 1.6.5 - Added schema-matching gameplay character types and one full Alex Kiriya mock character bundle with current state, schedule blocks, and memory data.

## Version 1.6.4 - Debug Image Pipeline

[2026-05-11 12:33] Version 1.6.4 - Added a strict Atlas image preview proxy that returns generated images inline and updated the debug panel to keep original pipeline URLs separate from proxied preview URLs.

[2026-05-11 12:19] Version 1.6.4 - Replaced raw debug-panel `response.json()` calls with strict response-body parsing so empty or non-JSON API responses report the operation name and HTTP status.

[2026-05-11 12:10] Version 1.6.4 - Added a two-step debug image pipeline: text-to-image generation first, then manual Fal background removal using the generated image URL. Corrected the background-removal server env key to `FAL_API_KEY` and verified server/gameplay builds.

## Version 1.6.3.a - Gameplay State & Debug UI Cleanup

[2026-05-11 12:02] Version 1.6.3.a - Lifted dialogue progression state into the gameplay app shell and kept map location selection fail-fast. Cleaned debug image generator labels for ASCII-safe UI text and verified server/gameplay builds.

## Version 1.6.2.a - Dialogue, Gallery, Assets, and Background Removal Integration

[2026-05-09 14:11] Version 1.6.2.a - Rebuilt the dialogue scene around a typewriter dialogue box, delayed option selection, and a transparent half-body Alex sprite frame. Also expanded the gallery demos to cover hover-hold, choosing, disappearance, reset, and replay behavior so the interaction lifecycle is visible before it is reused elsewhere.

[2026-05-09 14:11] Version 1.6.2.a - Generated Alex placeholder sprite variants, consolidated all Alex assets under `apps/gameplay/public/assets/alex/`, and added a fal background-removal client and Express route in `apps/server` with fail-fast `FAL_API_KEY` loading.

[2026-05-09 14:11] Version 1.6.2.a - Python `rembg` background-removal path is present in the server but has not been tested yet.

## Version 1.6.1 - Local Python Background Removal

[2026-05-09 14:07] Version 1.6.1 - Added a new local background-removal route in `apps/server` that accepts multipart image uploads, runs a Python `rembg` pipeline, and returns a transparent PNG. The server background-removal route remains intact as a separate option.

## Version 1.6.0.a - UI/UX Redesign Gallery Prototype

[2026-05-08 19:13] Version 1.6.0.a — Rebuilt the gameplay design system around black coated paper, Liquid Glass, and laser holographic foil, then added a React 19 style gallery prototype using `liquid-glass-react`. The UI/UX redesign is still in process; this version demonstrates the material direction and interaction language but is not the final gameplay UI.

## Version 1.5.1 - Debug Panel API Bug Fixes

[2026-05-08 17:50] Version 1.5.1 - Fixed three critical bugs preventing end-to-end image generation: (1) Backend's readStringArray/readBooleanArray didn't handle null values from Atlas—now treats null as undefined; (2) Frontend polling loop checked for wrong status—Atlas returns "completed" not "succeeded"; (3) Frontend lacked Vite proxy for /api routes to backend. Verified end-to-end: POST returns prediction ID, polling returns completed status with image URL from outputs[0].

## Version 1.5.2 - Cached OSM Local Map Source

[2026-05-08 18:05] Version 1.5.2 - Replaced curated placeholder map geometry with cached OpenStreetMap/Overpass source data for the Shibuya Crossing bbox. Added local source cache, exact query, and generated render data containing all fetched building, highway, and railway ways.

## Version 1.5.0 - Hierarchical Local SVG Map

[2026-05-08 17:35] Version 1.5.0 - Added generic hierarchical map architecture with area and area-map data. Moved old percentage-marker map to legacy-map, replaced primary map with a local inline SVG Shibuya Crossing prototype, and made selected building footprints keyboard-accessible navigation targets with visible OpenStreetMap/OpenMapTiles attribution.

## Version 1.4.2 - Debug Panel API Integration

[2026-05-08 16:45] Version 1.4.2 - Connected debug image generation panel to real Atlas Cloud API. Replaced mock implementation with production fetch + polling logic. Frontend now POSTs to /api/images/generations with prompt + settings (quality, size, format), then polls /api/images/generations/:id every 1s until generation completes. Extracts image URL from outputs[0]. Full error handling for network failures and invalid responses.

## Version 1.4.1 - Server Environment Loading

[2026-05-08 16:15] Version 1.4.1 - Added explicit apps/server/.env loading with dotenv. Server startup now validates ATLASCLOUD_API_KEY, PORT, and DATABASE_URL before database initialization and refuses to start on missing or invalid required environment values.

## Version 1.4.0 - Atlas Image API

[2026-05-07 23:02] Version 1.4.0 - Added Express server startup and Atlas Cloud text-to-image API. Implemented fail-fast environment validation, normalized image generation submit/poll endpoints, strict request validation, and structured error responses.

## Version 1.4.0 — Map Navigation Page

[2026-05-07 21:15] Version 1.4.0 — Built map navigation page with interactive location markers. Added Location and MapState interfaces to game schema. Created 4 focused components: map-canvas (background container), location-points (clickable markers with hover effects), status-bar (current location display), map-nav-button (return to dialogue). Integrated map page with routing logic; dialogue ↔ map navigation with location selection updating game state (visited tracking).

[2026-05-07 21:30] Step 6 Complete — Added smooth animations (hover scale 1→1.15, glow effects), keyboard accessibility (Tab/Enter/Space/Escape, aria-labels), responsive design (clamp() for fluid sizing). Min 44px touch targets, focus outlines, tooltip animations. Dark theme matches dialogue page. All components polished and accessible.

## Version 1.0.0 — Initial Data Schemas & Database

[2026-05-06 00:00] Version 1.0.0 — Completed character and location data schemas. Defined 5 character interfaces (Character, CharacterState, ScheduleBlock, Relation, Memory) and 1 location interface with grid coordinates and time-based access.

[2026-05-06 19:03] Version 1.0.0 — Database setup complete. Created Prisma ORM schema matching exact TypeScript interfaces. Monorepo structure established with apps/server, apps/studio, apps/gameplay. SQLite database initialized with all 6 models (Character, CharacterState, ScheduleBlock, Relation, Memory, Location).

## Version 1.1.0 — Development Rules & UI/UX Framework

[2026-05-06 20:15] Version 1.1.0 — Established governance rules in CLAUDE.md with 6 core development practices: no fallback (fail directly), frontend first (mock-driven), UI/UX skill integration, file organization (modular .ts files), file creation permissions, and development logging. Migrated ui-ux-pro-max skill with design system generation capabilities to .claude/skills directory.

## Version 1.1.2 — Event Data Schema

[2026-05-07 14:32] Version 1.1.2 — Created EVENT_DATA_SCHEMA.md with core event interfaces (Event, Priority, Condition types). Events support AND-logic conditions with LocationCondition and TimeBlockCondition for flexible event scheduling. Priority system handles mandatory/optional with index-based conflict resolution.

## Version 1.2.0 — Event Database Implementation

[2026-05-07 14:45] Version 1.2.0 — Implemented Event database model in Prisma with type classification (character_conversation, player_activity). Added CharacterLocationCondition for location-based event triggers. Created apps/server/src/types/event.ts with TypeScript interfaces and Zod schemas for runtime validation of Priority and Condition structures. Installed zod dependency.

## Version 1.3.1 — Dialogue Panel Height Fix

[2026-05-07 21:00] Version 1.3.1 — Fixed bottom UI panel height instability. Continue indicator now uses CSS visibility instead of conditional rendering, preventing layout shift. Dialogue box locked at 140px height. Fixed CharacterArea speaker prop name.

## Version 1.3.0 — Dialogue Display & Gameplay UI

[2026-05-07 20:30] Version 1.3.0 — Implemented dialogue display page with galgame-style UI. Created design system (DESIGN_SYSTEM.md) with color palette, typography, spacing, and component patterns. Built Vite + React setup in apps/gameplay. Designed dialogue interaction model: paragraphs auto-advance via click/space, choices pop up as centered modal. Simplified speaker to string type (removed heavy Character class). Created DIALOGUE_DATA_SCHEMA.md defining implicit graph structure for chapters, DialogueNode with paragraph/decision/end node types. Updated DOCS.md index with dialogue schema reference.
