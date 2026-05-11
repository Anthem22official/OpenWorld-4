# Asset Hierarchy

## Runtime Root

Database-linked runtime assets live under:

```text
apps/gameplay/public/assets/database
```

Vite serves this root at:

```text
/assets/database/...
```

## Storage Key Mapping

Keep local paths compatible with future Supabase Storage or Cloudflare R2 object keys by stripping the public runtime prefix.

```text
Local file: apps/gameplay/public/assets/database/dialogue/ren-shibuya-109-start/voices/ren-shibuya-109-line.wav
Public URL: /assets/database/dialogue/ren-shibuya-109-start/voices/ren-shibuya-109-line.wav
Storage key: dialogue/ren-shibuya-109-start/voices/ren-shibuya-109-line.wav
```

## Character Assets

Use the database character ID exactly for each character folder. Character IDs must stay lowercase and kebab-case, such as `ren-takahashi`.

```text
apps/gameplay/public/assets/database/
  characters/
    ren-takahashi/
      full-body/
      icons/
  cg/
  dialogue/
    ren-shibuya-109-start/
      voices/
  locations/
    shibuya-109/
      background/
```

Use `full-body` for full-body character images, transparent cutouts, and equivalent canonical character art. Runtime character display uses `full-body-transparent.png`, not white-background PNGs.

Use `icons` for derived character display icons. Header icons generated from the transparent full-body PNG use:

```text
characters/ren-takahashi/icons/header.png
```

Use `dialogue/{dialogueStartId}/voices` for generated WAV dialogue lines. The folder name must be the event's starting dialogue node ID.

Dialogue nodes store voice references as storage keys, not public URLs:

```text
voiceAssetKey: dialogue/ren-shibuya-109-start/voices/ren-shibuya-109-line.wav
```

Do not put temporary or generated test outputs here unless they are promoted to canonical game assets.

## Location Assets

Use the database location ID exactly for each location folder. Location IDs must stay lowercase and kebab-case, such as `shibuya-109`.

```text
apps/gameplay/public/assets/database/
  locations/
    shibuya-109/
      background/
        main.jpg
```

Use `background` for canonical location background images used by map cards, event panels, and dialogue scene backgrounds.

Use top-level `cg` for full-scene visual novel CG images that replace or augment the character stage during dialogue CG mode. Do not nest CG assets under `locations`.

Location records store background references as storage keys, not public URLs:

```text
backgroundAssetKey: locations/shibuya-109/background/main.jpg
```

Dialogue scene nodes store CG references as storage keys, not public URLs:

```text
cgAssetKey: cg/ren-overlay-test.png
```

Do not store `/assets/database/...` in database fields or mocks. Use the storage key only.
