# Development Log

## Version 1.7.18 - Render Postgres Runtime

[2026-05-12 10:20] Version 1.7.18 - Switched Prisma deployment configuration from SQLite to Postgres, added a production server start script and migration deploy script, and updated deployment docs for Render Postgres plus Cloudflare R2.

## Version 1.7.17 - Documentation Index Fix

[2026-05-12 09:39] Version 1.7.17 - Added DOCS index entries for the gameplay time helper and mock-first Studio app so the committed Studio/travel-time work is discoverable from the project documentation map.

## Version 1.7.16 - Studio Workflow Split

[2026-05-11 22:31] Version 1.7.16 - Refactored Studio so character/location creation use AI design pipelines, Event Factory uses a batch planner with mock database selectors, and CG/TTS use direct debug consoles instead of the shared pipeline.

## Version 1.7.15 - Ebisu Location Expansion

[2026-05-11 22:21] Version 1.7.15 - Added six clickable Ebisu area-map locations (building-shape), linked each to matching `Location` rows in `dev.db`, and wired OSM building IDs for map selection.

## Version 1.7.14 - One-Click Studio Startup

[2026-05-11 22:17] Version 1.7.14 - Updated the one-click OpenWorld launcher to clean backend, gameplay, and Studio dev ports, start all three services, and open backend bootstrap, gameplay, and Studio pages.

## Version 1.7.13 - Studio UI Shell

[2026-05-11 22:11] Version 1.7.13 - Built the UI-first OpenWorld Studio shell in apps/studio with fixed-screen PC layout, mock-only creation/debug modules, and a shared Describe -> Generate Draft -> Review -> Validate pipeline. Verified the Studio production build with no backend writes or browser automation.

## Version 1.7.12 - Shibuya Map Geometry Trim

[2026-05-11 21:12] Version 1.7.12 - Removed Shibuya Crossing road and rail SVG geometry so the local map keeps only building shapes and labels for lighter rendering.

## Version 1.7.11 - Two-Level Map Selection

[2026-05-11 20:56] Version 1.7.11 - Added a two-level area and area-map selector, wired a building-only Ebisu OSM map alongside Shibuya, and documented the repeatable map source workflow.
[2026-05-11 21:05] Version 1.7.11 - Regenerated the Ebisu map at Shibuya's map scale and added an initial cropped viewBox so Ebisu no longer fits the entire district into one zoomed-out screen.

## Version 1.7.10 - Map Character Icons

[2026-05-11 20:34] Version 1.7.10 - Added active character position icons to the SVG map using runtime character states and existing database header icon assets.

## Version 1.7.9 - CG Replaces Sprite Layer

[2026-05-11 20:22] Version 1.7.9 - Updated CG mode rendering so dedicated CG art replaces the regular transparent character sprite layer instead of being covered by it.

## Version 1.7.8 - Dialogue Voice Asset Path

[2026-05-11 20:18] Version 1.7.8 - Changed generated dialogue voice storage from character folders to dialogue-scoped `dialogue/{dialogueStartId}/voices` folders and made mismatched voice asset keys fail loudly.

## Version 1.7.7 - Dedicated CG Placeholder Asset

[2026-05-11 20:12] Version 1.7.7 - Added a 2560x1440 Ren CG placeholder under the top-level database CG folder and pointed the Shibuya 109 CG overlay test at it.

## Version 1.7.6 - Character Header Icons

[2026-05-11 20:06] Version 1.7.6 - Added a smart crop script that generates 512x512 transparent character header icons from full-body database PNG assets.

## Version 1.7.5 - Event Voice Generation

[2026-05-11 19:58] Version 1.7.5 - Added an OpenRouter event voice generation route that traverses event dialogue graphs, writes missing WAV assets, and attaches voice asset keys to dialogue nodes.

## Version 1.7.4 - CG Overlay Reference Test

[2026-05-11 19:55] Version 1.7.4 - Enabled one-character CG scene overlays and marked Ren's Shibuya line as the local CG overlay reference test using the existing Shibuya background stand-in.

## Version 1.7.3 - OpenRouter TTS Service

[2026-05-11 19:46] Version 1.7.3 - Added a server OpenRouter text-to-speech route that returns WAV audio and documented how generated dialogue voice files become voice asset keys.

## Version 1.7.2 - Visual Novel Dialogue Scenes

[2026-05-11 19:40] Version 1.7.2 - Added explicit dialogue scene staging for background art, CG mode, and multi-character auto-layout, with bootstrap validation and asset-key documentation.

## Version 1.7.1 - Four Character Location Events

[2026-05-11 19:17] Version 1.7.1 - Replaced legacy Alex/Ken runtime content with four active database characters, runtime-state bootstrap, transparent PNG character sprites, and one Japanese location conversation event per current Shibuya location.

## Version 1.7.0 - Database Event and Asset Flow

[2026-05-11 18:59] Version 1.7.0 - Released the database-backed event and asset flow, including the mocked character creator flow, character gallery empty states, page-aware background music, full-bleed event location backgrounds, the AGENTS Playwright permission rule, and ignore rules for transient Playwright/tmp artifacts.

## Version 1.6.20 - Location Background Assets

[2026-05-11 18:49] Version 1.6.20 - Generated four low-quality 4K Atlas location backgrounds, stored them under the database locations asset hierarchy, and linked locations through background asset keys.

## Version 1.6.19 - Dialogue Layout Event Screen

[2026-05-11 18:45] Version 1.6.19 - Revised the location event screen to reuse the dialogue page layout, replacing the character sprite with a location image mock and using the existing choice panel for optional event and map-return options.

## Version 1.6.18 - Location Event Handler

[2026-05-11 18:30] Version 1.6.18 - Added frontend location event resolution so map travel starts mandatory dialogue directly, shows optional events in an event panel, and displays a Japanese no-event return state when nothing matches.

## Version 1.6.17 - Alex Dialogue Voice WAVs

[2026-05-11 18:02] Version 1.6.17 - Generated canonical OpenRouter TTS WAV files for Alex dialogue lines and linked mock, bootstrap, and SQLite dialogue voice asset keys.

## Version 1.6.16 - Dialogue Voice Asset Keys

[2026-05-11 17:47] Version 1.6.16 - Added optional dialogue voice asset keys, bootstrap mapping, and one-shot WAV playback that stops on dialogue navigation.

## Version 1.6.15 - Database Asset Hierarchy

[2026-05-11 17:36] Version 1.6.15 - Added a database-linked character asset folder hierarchy with git placeholders and documented the local URL to future storage-key mapping.

## Version 1.6.14 - Japanese Alex Event Dialogue

[2026-05-11 17:32] Version 1.6.14 - Replaced the MVP Alex Shibuya event dialogue with natural Japanese VN prose and updated the reproducible bootstrap SQL.

## Version 1.6.13 - One-Click Dev Startup

[2026-05-11 17:31] Version 1.6.13 - Added a root Windows launcher that clears the backend and gameplay dev ports, starts both services in visible terminals, and opens the gameplay URL.

## Version 1.6.12 - Bootstrap Error Detail

[2026-05-11 17:28] Version 1.6.12 - Expanded frontend bootstrap failures to include the backend or Vite proxy response body, making database startup errors actionable instead of only reporting HTTP status.

## Version 1.6.11 - Database Bootstrap Integration

[2026-05-11 16:11] Version 1.6.11 - Linked gameplay startup to the backend SQLite database through a read-only bootstrap API. Added relational dialogue storage, map-rendering location fields, frontend bootstrap loading, and manual SQL documentation for MVP data.

## Version 1.6.10 - Map Location Data Link

[2026-05-11 13:46] Version 1.6.10 - Linked interactive map buildings directly to mock location records via explicit `locationId`, so building selection and labels resolve from `src/mocks/locations.ts` instead of inferred building matching.

## Version 1.6.9 - Click Particle Effect

[2026-05-11 13:41] Version 1.6.9 - Added a global click particle overlay with restrained laser-foil bursts across gameplay screens, preserving existing click behavior and reduced-motion handling.

## Version 1.6.8 - Left Location Panel

[2026-05-11 13:27] Version 1.6.8 - Changed map location clicks to open a left-side pop-out panel with location details, a styled image placeholder, and a Liquid Glass Go button. Empty map clicks now dismiss the panel, while Go performs the existing location navigation.

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

## Version 1.4.2 - Location Background Quality Notes

[2026-05-11 19:13] Version 1.4.2 - Documented Atlas GPT Image 2 medium location-background discovery. Updated the location background prompt notes with drawing-quality failure modes, recommended medium generation defaults, the test prediction/output URL, and prompt addendum for cleaner architectural rendering.

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
