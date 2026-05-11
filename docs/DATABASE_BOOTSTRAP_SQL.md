# Database Bootstrap Content

Use this guide after applying Prisma migrations when the local SQLite database needs the current MVP content.

The canonical local database is:

```text
apps/server/prisma/dev.db
```

## Required Tables

The bootstrap data must include:

- 4 active characters: `ren-takahashi`, `daiki-mori`, `haruto-nakamura`, `kaito-sugiyama`
- 4 current character states, one for each character
- 4 schedule blocks and 4 memories
- 24 dialogue nodes and 8 dialogue choices
- 4 mandatory `character_conversation` events, one per Shibuya map location
- 1 `GameRuntimeState` row with id `default`

## Runtime State

The app no longer infers world time or starting location from a single active character. All four characters are active, and bootstrap starts from:

```text
GameRuntimeState.default
current_location_id = shibuya-109
current_dialogue_id = ren-shibuya-109-start
game_time_detail = 2040-08-05 19:30
```

## Current Location Events

```text
shibuya-109      -> meet-ren-at-shibuya-109          -> ren-shibuya-109-start
qfront           -> meet-kaito-at-qfront             -> kaito-qfront-start
magnet           -> meet-daiki-at-magnet             -> daiki-magnet-start
hachiko-station  -> meet-haruto-at-hachiko-station   -> haruto-hachiko-start
```

Dialogue `speaker` values are character IDs, not display names. The frontend resolves those IDs against the bootstrap character list. Dialogue `scene` values are JSON staging contracts that define background/CG art and the visible character lineup for each node.

`ren-shibuya-109-line` is the current CG reference test. It uses `scene.mode = "cg"`, `cgAssetKey = "cg/ren-overlay-test.png"`, and `characterIds = ["ren-takahashi"]` as the reference character metadata. CG mode replaces the regular character sprite layer.

## Verification

Run from the repo root:

```powershell
sqlite3 apps\server\prisma\dev.db "SELECT 'Character', count(*) FROM Character UNION ALL SELECT 'CharacterState', count(*) FROM CharacterState UNION ALL SELECT 'DialogueNode', count(*) FROM DialogueNode UNION ALL SELECT 'DialogueChoice', count(*) FROM DialogueChoice UNION ALL SELECT 'Event', count(*) FROM Event UNION ALL SELECT 'GameRuntimeState', count(*) FROM GameRuntimeState;"
```

Expected counts:

```text
Character|4
CharacterState|4
DialogueNode|24
DialogueChoice|8
Event|4
GameRuntimeState|1
```

Also verify there are no legacy characters:

```powershell
sqlite3 apps\server\prisma\dev.db "SELECT count(*) FROM Character WHERE id IN ('alex-kiriya','ken');"
```

Expected:

```text
0
```
