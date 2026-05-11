# Location Data Schema

## Data Types

```typescript
interface Location {
  id: string;                      // Unique ID for this location
  name: string;                    // Location name (e.g., "Downtown Coffee Shop")
  appearance_description: string;  // How it looks visually
  x: number;                       // X coordinate on the world map
  y: number;                       // Y coordinate on the world map
  level: number;                   // Which floor it is (1st floor, 2nd floor, etc)
  accessible_start: number;        // When it opens (0-1440 minutes in a day)
  accessible_end: number;          // When it closes (0-1440 minutes in a day)
  backgroundAssetKey?: string;     // Optional location background image storage key
}
```

## Location Background Assets

Use `backgroundAssetKey` when a location should render a canonical background image in map cards, event panels, or scene backgrounds.

```typescript
{
  id: "shibuya-109",
  name: "Shibuya 109",
  backgroundAssetKey: "locations/shibuya-109/background/main.jpg",
}
```

Rules:
- Store storage keys such as `locations/shibuya-109/background/main.jpg`.
- Do not store public URLs such as `/assets/database/...`.
- Do not use empty keys, parent directory segments, or non-image files.
- Supported image extensions are `.jpg`, `.jpeg`, and `.png`.
