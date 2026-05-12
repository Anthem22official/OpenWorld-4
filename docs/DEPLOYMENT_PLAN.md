# Deployment Plan

## Decision

Keep the project in one repository and deploy the frontend and backend as separate services.

## Target Stack

- Frontend: Vercel
- Backend: Render
- Database: Render Postgres
- Runtime asset storage: Cloudflare R2
- ORM: Prisma
- Repository: Existing monorepo

## Reason

The current frontend is a Vite React app, which fits Vercel well.

The current backend is an Express server that starts with `app.listen(...)`, which fits Render better than Vercel serverless functions.

Keeping the backend on Render avoids rewriting the server into serverless API routes.

## Current Conflict

The gameplay app currently calls local API routes:

- `POST /api/images/generations`
- `GET /api/images/generations/:id`

During local development, Vite proxies `/api` to `http://localhost:3000`.

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

## Deployment Shape

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
