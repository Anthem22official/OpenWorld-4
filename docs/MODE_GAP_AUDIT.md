# Gameplay Mode Gap Audit

## Source Of Truth

This audit compares the current repository against `AGENTS.md` Rule 9, which defines three gameplay/deployment modes:

- Public Local Full
- Public Local + User Cloud Assets
- Private Maintainer Hosted

## P0 Findings

### P0-1: Public Local Full startup required cloud credentials

Before the P0 fix, server startup required `ATLASCLOUD_API_KEY`, `FAL_API_KEY`, and `OPENROUTER_API_KEY` in `apps/server/src/config/env.ts`.

Impact:

- Public Local Full could not start without cloud credentials.
- This violated the rule that the default self-host mode must not require cloud services, hosted services, or internet access.

Fix status:

- Fixed for P0.
- `GAMEPLAY_MODE` now defaults to `public-local-full`.
- Cloud provider keys are optional in `public-local-full`.
- Cloud-only routes return explicit configuration errors when used without credentials.

### P0-2: Local database contract conflicted with Prisma provider

Before the P0 fix, docs described `apps/server/prisma/dev.db` as the local SQLite database, while `apps/server/prisma/schema.prisma` targeted PostgreSQL.

Impact:

- Public Local Full had no coherent local database setup.
- A public self-host user could follow the docs and still fail against the Prisma provider.

Fix status:

- Fixed for P0.
- Prisma now targets SQLite by default.
- Public Local Full uses `DATABASE_URL=file:./dev.db`.
- `apps/server/prisma/dev.db` remains the canonical local database.

### P0-3: Runtime asset writes were local-only while hosted/cloud modes expected R2

The event voice generation service writes WAV assets to `apps/gameplay/public/assets/database`.

Impact:

- Public Local Full behavior is correct.
- Public Local + User Cloud Assets and Private Maintainer Hosted cannot yet write generated assets to R2/S3-compatible storage.

Fix status:

- Documented, not fully fixed in P0.
- Local filesystem assets remain the explicit Public Local Full behavior.
- R2/S3 asset adapters are deferred.

### P0-4: No explicit mode selection boundary

Before the P0 fix, startup and asset behavior relied on implicit environment fallbacks.

Impact:

- Missing mode-specific config could silently select local URLs.
- This violated the no silent fallback rule between modes.

Fix status:

- Partially fixed for P0 on the server.
- `GAMEPLAY_MODE` is parsed and validated at startup.
- Only `public-local-full` is operational in this pass.
- Frontend asset URL helper duplication remains a P2 cleanup.

## P1 Findings

### P1-1: Maintainer-hosted deployment was documented as the general target

`docs/DEPLOYMENT_PLAN.md` described Vercel, Render, Render Postgres, and Cloudflare R2 as the target stack without marking it as private maintainer-hosted.

Impact:

- Public users could mistake maintainer infrastructure for the self-host path.

Fix status:

- Partially fixed.
- Deployment docs now state Public Local Full is the default and Vercel + Render + R2 is private maintainer-hosted.

### P1-2: Public Local + User Cloud Assets has no adapter

The repo uses storage keys compatible with future object storage, but there is no user-provided R2/S3 config or asset-store implementation.

Impact:

- The mode is defined in `AGENTS.md` but not implemented.

Fix status:

- Not fixed in P0.
- Future work should add an asset store interface and a user-owned R2/S3-compatible adapter with loud missing-config errors.

### P1-3: Save/load persistence is not mode-ready

The server has `GameRuntimeState` and a bootstrap route, but gameplay updates are still mostly client-side state transitions.

Impact:

- Public Local Full does not yet have a clear save/load interface for durable player progress.

Fix status:

- Not fixed in P0.
- Future work should add a save store boundary and explicit save/load routes.

## P2 Findings

### P2-1: Frontend asset URL logic is duplicated

Multiple gameplay components independently resolve `VITE_ASSET_BASE_URL` or default to `/assets/database`.

Impact:

- Future storage mode changes will require repeated edits.
- This increases risk of inconsistent fallback behavior.

Fix status:

- Not fixed in P0.
- Future work should centralize asset URL resolution behind one frontend helper.

### P2-2: Example environment contract is incomplete

Secret `.env` files are ignored, but the repo does not yet provide a complete example env contract per gameplay mode.

Impact:

- Users may not know the minimal Public Local Full environment.

Fix status:

- Partially documented in `docs/DATABASE_BOOTSTRAP_SQL.md` and `docs/DEPLOYMENT_PLAN.md`.
- A future `.env.example` can make this more discoverable.

## Current Mode Status

| Mode | Status |
| --- | --- |
| Public Local Full | P0 startup and SQLite contract fixed. Local assets remain filesystem-backed. |
| Public Local + User Cloud Assets | Recognized conceptually, not implemented. |
| Private Maintainer Hosted | Operational target for committed content through Render Postgres seed snapshots and R2 asset reads. Hosted runtime asset writes remain deferred. |

## Next Recommended Work

1. Add a save store interface and local SQLite-backed save/load routes.
2. Add an asset store interface with local filesystem and R2/S3 implementations.
3. Centralize frontend API and asset URL resolution.
4. Add a mode-specific `.env.example`.
