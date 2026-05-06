# Character Data Schema

## Data Types

```typescript
interface Character {
  id: string;                              // Unique ID for this character
  name: string;                            // Character's name
  activated: boolean;                      // In game or not (1=yes, 0=no)
  appearance_description: string;          // How they look (height, hair, clothes, etc)
  personality: string[];                   // List of traits (angry, kind, lazy, etc)
}

interface CharacterState {
  character_id: string;                    // Which character this is
  location_id: string;                     // Where they are right now
  activity: string;                        // What they're doing right now (eating, walking, sleeping, etc)
  game_time_detail: string;                // What time it is in the game (e.g., "2040-08-05 14:30")
}

interface ScheduleBlock {
  id: string;                              // Unique ID for this schedule piece
  character_id: string;                    // Which character this schedule is for
  location_id: string;                     // Where they go during this time
  activity: string;                        // What they do there (work, study, eat, etc)
  start_time: number;                      // When it starts (0-1440 minutes in a day)
  duration: number;                        // How long it lasts (in minutes)
}

interface Relation {
  id: string;                              // Unique ID for this feeling
  character_id: string;                    // Who has the feeling
  target_character_id: string;             // Who they have the feeling toward
  affinity_score: number;                  // How much they like them (-100 to 100). Not mutual
}

interface Memory {
  id: string;                              // Unique ID for this memory
  character_id: string;                    // Who remembers this
  summary: string;                         // What happened (50-150 words: what, who, feeling)
  game_date: string;                       // When they remembered it (e.g., "2040-08-05")
}
```
