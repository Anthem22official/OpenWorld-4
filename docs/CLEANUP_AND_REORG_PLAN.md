# Cleanup And Reorg Plan

## Purpose

This document records what is currently messy in the repository and the plan to clean it up without changing the product direction.

## Problem Analysis

### 1. Documentation drift

Several docs and reference artifacts describe older implementation states or transient work instead of current structure.

- `openworld_layout_grid.jpg` is a reference artifact, not a canonical design input.

### 2. Backend concerns are mixed together

The server currently contains several kinds of work in one area:

- provider clients for fal and Atlas
- local Python background-removal code
- route handlers
- one-off execution scripts and cached outputs

That makes it hard to answer basic questions like:

- what is reusable application code
- what is a provider adapter
- what is a local utility script
- what is generated output

### 3. Gameplay code is not organized by ownership

The gameplay app has grown by feature additions, but the file structure still mixes:

- scene-specific UI
- shared UI primitives
- debug tools
- map-specific rendering pieces
- style gallery demos

That makes changes harder because a single page often needs edits across unrelated component folders.

### 4. Generated artifacts are easy to confuse with real source

The repo has historically accumulated generated files such as sprites, screenshots, Playwright logs, and bytecode caches.

These should be treated as outputs unless explicitly promoted to canonical assets.

## What The Two Map Source Files Are

### `docs/map-sources/shibuya-crossing-overpass-query.txt`

This is the exact Overpass query used to fetch the Shibuya map source data. It is the reproducible input for the map cache.

### `docs/map-sources/shibuya-crossing-overpass.json`

This is the raw Overpass response captured from that query. It is cached source data, not a design doc and not a hand-edited asset.

## Cleanup Plan

### 1. Classify files by role

Split repo content into four buckets:

- source code
- docs and plans
- reusable assets
- generated outputs

Anything that does not fit one bucket should be renamed or moved.

### 2. Separate backend by concern

Refactor the server into clear areas:

- provider adapters
  - fal
  - atlas
  - local python
- feature routes
  - image generation
  - background removal
- low-level utilities
  - multipart parsing
  - env loading
  - response normalization

If a file is only a script used once, it should live outside the main reusable server path.

### 3. Separate toolkit code from execution scripts

Tooling should not be mixed into the same folders as runtime code.

Recommended split:

- reusable adapters and helpers stay in `apps/server/src`
- one-off scripts stay in a `scripts` or `tools` area
- generated outputs stay in an `artifacts` or `generated` area, or are not committed at all

### 4. Reorganize gameplay by scene ownership

Group gameplay code by whether it belongs to a scene or is shared.

Suggested shape:

- `components/shared`
- `components/dialogue`
- `components/map`
- `components/debug`
- `pages`

Rules:

- scene-specific components stay near the page that owns them
- shared primitives should not depend on one scene
- debug/demo code should stay separate from production scene flow

### 5. Tighten asset policy

Only keep assets that are intended to be referenced by the app or the docs.

Treat these as generated unless explicitly approved as canonical:

- temporary crops
- preview exports
- test outputs
- cache files
- bytecode caches

### 6. Reduce doc noise

Keep only docs that answer one of these questions:

- how to build or run the project
- what the data model is
- what the UX rules are
- what the deployment shape is
- what the cleanup decision is

Anything else should be merged, archived, or deleted.

## Suggested Sequence

1. Lock the doc set: decide which docs are authoritative and which are legacy references.
2. Split backend runtime code from one-off scripts.
3. Normalize backend naming so provider names do not leak into unrelated files.
4. Reorganize gameplay by scene and shared ownership.
5. Remove generated artifacts from the repo unless they are promoted to real assets.
6. Run a repo-wide search for stale names, dead files, and duplicated concepts.
7. Commit only after the tree is clean and the folder ownership is obvious.

## Success Criteria

- A new contributor can tell what is source, what is generated, and what is legacy.
- Backend provider logic is separated by adapter, not mixed into random scripts.
- Gameplay scene code is grouped by ownership instead of by accident.
- Generated files no longer look like real project assets.
- The repo has a smaller, clearer doc surface.

## Open Decisions

- Whether the current reference images should stay as historical docs or be archived.
- Whether the server should keep local Python support in-tree or move it to an external tool.
- Whether gameplay shared components should be split immediately or only after the scene folders are introduced.
