# RULES

---

## Rules

### 1. No Fallback — Fail Directly
Errors must be loud. No silent failures, no defaults. Throw immediately.

### 2. Frontend First
Build UI with mocks before backend. Mocks define the contract.

### 3. UI/UX Skill for Frontend
When doing frontend work: use `/ui-ux-pro-max` skill to generate design system first, then build UI.
MUST refer to "\docs\DESIGN_SYSTEM.md".

### 4. File Organization
Split UI and UX into sub `.ts` files. Never use monolithic `main.ts` — keep files small and focused.

### 5. Playwright Permission
Always ask for permission BEFORE using Playwright.
Do not take browser screenshots or run browser verification unless the user explicitly asks for it or gives permission first.

### 6. File Creation Permission
Always ask for permission BEFORE creating new files. Show filename and purpose first.

### 7. Documentation in /docs
Keep all documentation in `/docs` folder. Don't scatter docs across root.

### 8. Development Log
Two files, must commit to git when version is done:

**a) `DEV_LOG.md`** — Timeline with timestamps
- Entry: `[YYYY-MM-DD HH:MM] Version X.X.X — 1-2 sentence summary of what was done`

**b) `DOCS.md`** — Index file listing which docs to read when
- Format: `- **FILE.md** — When to read this and what it contains`
- Do NOT duplicate content from other docs. Point to them instead.
- This is a map, not a full explanation. Readers go to specific files for details.

### 9. Gameplay Mode Handling
The project supports three gameplay/deployment methods. Before changing storage, startup, save/load, asset handling, or deployment behavior, identify which mode is affected and state the assumption.

**a) Public Local Full**
- This is the default GitHub/self-host mode.
- User runs the game locally with a local backend/server.
- Store everything locally: saves, worlds, generated data, uploaded assets, and images.
- Do not require cloud credentials, hosted services, Vercel, Render, R2, S3, or internet access for this mode.
- Prefer simple local paths and loud errors when local storage is missing or misconfigured.

**b) Public Local + User Cloud Assets**
- User runs the game locally with a local backend/server.
- Save/world metadata stays local.
- Large assets/images may be stored in the user's own R2/S3-compatible bucket to reduce local disk usage.
- Never use the maintainer's private cloud credentials in this mode.
- Require explicit user-provided cloud config. If config is missing, fail directly with a clear error.

**c) Private Maintainer Hosted**
- This mode is for the maintainer only.
- Frontend runs on Vercel, backend runs on Render, and assets/images use the maintainer's R2 bucket.
- Do not present this as a public GitHub self-host option.
- Do not commit real Vercel, Render, R2, S3, API, or secret values. Only commit example env keys.

Implementation rules for all modes:
- Keep gameplay code independent from storage provider details.
- Route storage through small interfaces/adapters such as save store and asset store.
- Do not scatter mode checks across gameplay systems.
- Environment/config selection should happen at startup or service construction.
- No silent fallback between modes. If a mode is selected and required config is missing, throw immediately.
