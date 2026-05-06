# Documentation

## Data System Overview

### Character Data
Characters are split into separate concerns:

- **Character**: Identity (who they are) — name, appearance, personality
- **CharacterState**: Current state (where they are now) — location, activity, time
- **ScheduleBlock**: Plans (what they'll do) — daily schedule blocks with time/location/activity
- **Relation**: Relationships (feelings toward others) — directional affinity scores (-100 to 100)
- **Memory**: Knowledge (what they remember) — events with timestamps and summaries

Why split? Cleaner data model. Character is static identity, CharacterState is dynamic. ScheduleBlock lets characters have plans. Relations are directional (A→B ≠ B→A). Memory is knowledge they accumulate.

### Location Data
Locations are positioned on a 2D map with floor levels and time-based access.

- **id**: Unique identifier
- **x, y**: Map coordinates (2D grid position)
- **level**: Floor number (1st floor, 2nd floor, etc)
- **accessible_start, accessible_end**: Opening/closing times (0-1440 minutes per day)
- **appearance_description**: Visual description

### Time Representation
- **Schedule blocks**: 0-1440 minutes per day (0 = midnight, 1440 = next midnight)
- **Game dates**: ISO format like "2040-08-05"
- **Game time details**: Full timestamp like "2040-08-05 14:30"
