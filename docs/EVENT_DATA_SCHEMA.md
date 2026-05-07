# Event Data Schema

## Data Types

```typescript
interface Event {
  id: string;                          // Unique ID for this event
  description: string;                 // Short description of what happens
  type: "character_conversation" | "player_activity";  // Event classification (what kind of event)
  priority: Priority;                  // When it happens relative to other events
  conditions: Condition[];             // AND logic: all conditions must pass for event to occur
}

interface Priority {
  value: "mandatory" | "optional";     // mandatory takes precedence over optional
  index: number;                       // 0-9999, used as tiebreaker when priority values match
}

// Condition: Union type of all possible condition types
type Condition = LocationCondition | TimeBlockCondition | CharacterLocationCondition;

interface LocationCondition {
  type: "location";                    // Indicates this is a location condition
  location_id: string;                 // Where the event happens (required)
}

interface TimeBlockCondition {
  type: "timeBlock";                   // Indicates this is a time block condition
  start_time: number;                  // When event can start (0-1440 minutes in a day)
  duration: number;                    // How long the time block lasts (in minutes)
}

interface CharacterLocationCondition {
  type: "characterLocation";           // Indicates this is a character location condition
  character_id: string;                // Which character triggers this condition
  location_id: string;                 // Event triggers when this character is at this location
}
```
