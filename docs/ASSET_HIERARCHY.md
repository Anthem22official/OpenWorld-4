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
Local file: apps/gameplay/public/assets/database/characters/alex-kiriya/voice/intro.wav
Public URL: /assets/database/characters/alex-kiriya/voice/intro.wav
Storage key: characters/alex-kiriya/voice/intro.wav
```

## Character Assets

Use the database character ID exactly for each character folder. Character IDs must stay lowercase and kebab-case, such as `alex-kiriya`.

```text
apps/gameplay/public/assets/database/
  characters/
    alex-kiriya/
      full-body/
      voice/
  locations/
    shibuya-109/
      background/
```

Use `full-body` for full-body character images, transparent cutouts, and equivalent canonical character art.

Use `voice` for WAV dialogue lines and equivalent canonical character audio.

Dialogue nodes store voice references as storage keys, not public URLs:

```text
voiceAssetKey: characters/alex-kiriya/voice/alex-shibuya-greeting.wav
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

Use `background` for canonical location background images used by map cards, event panels, and future scene backgrounds.

Location records store background references as storage keys, not public URLs:

```text
backgroundAssetKey: locations/shibuya-109/background/main.jpg
```

Do not store `/assets/database/...` in database fields or mocks. Use the storage key only.
