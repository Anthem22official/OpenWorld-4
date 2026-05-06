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
}
```
