# Event Data Schema

## Data Types

```typescript
interface Event {
  id: string;                          // Unique ID for this event
  description: string;                 // Short description of what happens
  type: "character_conversation" | "player_activity";  // Event classification (what kind of event)
  priority: Priority;                  // When it happens relative to other events
  conditions: Condition[];             // AND logic: all conditions must pass for event to occur
  dialogue_id?: string;                // Required when type is "character_conversation"
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

## Event to Dialogue Flow

Events decide **when** something happens in the world. Dialogue defines **what conversation** starts from that event.

For MVP, a `character_conversation` event must point to a dialogue start node with `dialogue_id`.

**Rules:**
- If `type` is `"character_conversation"`, `dialogue_id` is required.
- If `type` is `"player_activity"`, `dialogue_id` is not required.
- `dialogue_id` must point to an existing dialogue node ID from the dialogue graph.

**Runtime Flow:**
```text
Player enters location
-> game checks event conditions
-> highest-priority valid event is selected
-> if character_conversation, start event.dialogue_id
-> dialogue graph runs through nextDialogueId / choices
```

## Example

```typescript
const meetRenAtShibuya109: Event = {
  id: "meet-ren-at-shibuya-109",
  description: "レンが渋谷109の入口で主人公の背伸びを見抜く。",
  type: "character_conversation",
  priority: {
    value: "mandatory",
    index: 10,
  },
  conditions: [
    {
      type: "location",
      location_id: "shibuya-109",
    },
    {
      type: "characterLocation",
      character_id: "ren-takahashi",
      location_id: "shibuya-109",
    },
  ],
  dialogue_id: "ren-shibuya-109-start",
}
```
