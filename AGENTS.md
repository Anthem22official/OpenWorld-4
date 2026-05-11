# RULES

---

## Rules

### 1. No Fallback — Fail Directly
Errors must be loud. No silent failures, no defaults. Throw immediately.

### 2. Frontend First
Build UI with mocks before backend. Mocks define the contract.

### 3. UI/UX Skill for Frontend
When doing frontend work: use `/ui-ux-pro-max` skill to generate design system first, then build UI.

### 4. File Organization
Split UI and UX into sub `.ts` files. Never use monolithic `main.ts` — keep files small and focused.

### 5. File Creation Permission
Always ask for permission BEFORE creating new files. Show filename and purpose first.

### 6. Documentation in /docs
Keep all documentation in `/docs` folder. Don't scatter docs across root.

### 7. Development Log
Two files, must commit to git when version is done:

**a) `DEV_LOG.md`** — Timeline with timestamps
- Entry: `[YYYY-MM-DD HH:MM] Version X.X.X — 1-2 sentence summary of what was done`

**b) `DOCS.md`** — Index file listing which docs to read when
- Format: `- **FILE.md** — When to read this and what it contains`
- Do NOT duplicate content from other docs. Point to them instead.
- This is a map, not a full explanation. Readers go to specific files for details.
