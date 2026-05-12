# Deployment Plan

## Decision

Public Local Full is the default supported mode for this repository.

The Vercel + Render + Cloudflare R2 shape below is a private maintainer-hosted target, not the public self-host default.

## Public Local Full

- Frontend: local Vite gameplay app.
- Backend: local Express server.
- Database: local SQLite at `apps/server/prisma/dev.db`.
- Runtime asset storage: local files under `apps/gameplay/public/assets/database`.
- Required local server environment: `GAMEPLAY_MODE=public-local-full`, `PORT=3000`, `DATABASE_URL=file:./dev.db`.
- Cloud credentials are not required for startup in this mode.

Cloud-only endpoints may exist in the local server, but they must fail loudly with configuration errors when their provider credentials are missing.

## Private Maintainer Hosted Target Stack

- Frontend: Vercel
- Backend: Render
- Database: Render Postgres
- Runtime asset storage: Cloudflare R2
- ORM: Prisma
- Repository: Existing monorepo

## Local-First Hosted Sync Workflow

Future development should move in this order:

1. Build changes in Public Local Full first.
2. Check local gameplay against local SQLite.
3. Verify dual schema equivalence with `npm --workspace apps/server run schema:check`.
4. Export the local SQLite gameplay data snapshot with `npm --workspace apps/server run seed:export:local`.
5. Commit code, dual Prisma schema changes, `apps/server/prisma/seed-data/hosted-seed.json`, and runtime assets.
6. Push to GitHub.
7. GitHub Actions uploads changed runtime assets from `apps/gameplay/public/assets/database/**` to R2 under `assets/database/**`.
8. Render redeploys the backend, syncs the hosted Prisma schema, and imports the committed seed snapshot.
9. Vercel redeploys frontend code and reads runtime assets through `VITE_ASSET_BASE_URL`.
10. Check Private Maintainer Hosted before continuing new local-first work.

Render build/start should use the hosted schema commands:

```text
npm --workspace apps/server run prisma:generate:hosted
npm --workspace apps/server run prisma:push:hosted
npm --workspace apps/server run prisma:seed:hosted
npm --workspace apps/server run start:hosted
```

Required Render environment:

```text
GAMEPLAY_MODE=private-maintainer-hosted
DATABASE_URL=<Render Postgres URL>
PORT=<Render port>
```

Required Vercel environment:

```text
VITE_API_BASE_URL=<Render backend URL>
VITE_ASSET_BASE_URL=<R2 public domain>/assets/database
```

Required GitHub Actions secrets:

```text
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_R2_BUCKET
CLOUDFLARE_R2_ACCESS_KEY_ID
CLOUDFLARE_R2_SECRET_ACCESS_KEY
```

The R2 sync is add/update only. It does not delete remote R2 files.

## Reason

The current frontend is a Vite React app, which fits Vercel well.

The current backend is an Express server that starts with `app.listen(...)`, which fits Render better than Vercel serverless functions.

Keeping the backend on Render avoids rewriting the server into serverless API routes.

## Current Conflict

The gameplay app currently calls local API routes:

- `POST /api/images/generations`
- `GET /api/images/generations/:id`

During Public Local Full development, Vite proxies `/api` to `http://localhost:3000`.

That proxy only works locally and does not exist after the frontend is deployed to Vercel.

## Future Implementation Steps

1. Deploy `apps/server` to Render as a web service.
2. Configure backend environment variables on Render.
3. Connect the backend to Render Postgres with the internal `DATABASE_URL`.
4. Run `npm --workspace apps/server run prisma:migrate:deploy` before starting the service.
5. Confirm the Render backend exposes the existing `/api/images/...` routes.
6. Add frontend environment variables for the backend base URL and R2 asset base URL.
7. Update the gameplay app to call the Render backend URL in production.
8. Deploy `apps/gameplay` to Vercel.
9. Configure the same backend URL and R2 asset URL environment variables in Vercel.
10. Test image generation from the deployed Vercel frontend.

## Private Maintainer Hosted Deployment Shape

User opens the Vercel frontend.

The browser sends API requests to the Render backend.

The Render backend handles API logic, database access, Atlas Cloud calls, and R2 writes.

The backend returns API responses to the browser. Browser asset reads should resolve through the R2 public asset base URL.

## Not Chosen For Now

Do not rewrite the backend into Vercel serverless functions yet.

Do not split the frontend and backend into separate repositories.

Do not remove the backend API from the gameplay app.

## Notes

This plan is the lowest-rewrite path for individual development.

The project can move to a full Vercel or Next.js setup later if the backend is redesigned for serverless.
