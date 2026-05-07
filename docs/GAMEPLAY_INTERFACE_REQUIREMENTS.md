# Gameplay Interface Requirements

## Architecture
```
Gameplay
├── Dialogue Display Page
└── Map Page
```

## Dialogue Display Page

**Large UI Elements:**
- Character Area — Character sprite display (left/center area)
- Dialogue Box — Text content (bottom half)
- Choice Panel — Branching options as buttons (below text)
- Control Bar — Save, Continue, Back buttons (bottom)

## Map Page

**Large UI Elements:**
- Map Canvas — Visual map display (center)
- Location Points — Clickable areas for navigation (on map)
- Status Bar — Current location & quick info (top/side)
- Navigation Button — Return to dialogue (corner)

## Page Flow
- Dialogue Display → Map (when story allows)
- Map → Dialogue Display (when location selected)
