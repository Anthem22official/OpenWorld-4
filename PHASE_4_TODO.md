# Phase 4: Build Map Page — TODO List

**Status**: Ready to start  
**Version**: 1.3.0 completed, starting 1.4.0  
**Goal**: Build map navigation page with location interaction

---

## Phase 4: Map Page Implementation

### Step 1: Design Map Component Structure
- [ ] Define MapPage component layout
  - Map canvas container (center)
  - Location points layer (clickable)
  - Status bar (top/side) showing current location
  - Navigation button to return to dialogue
- [ ] Review DESIGN_SYSTEM.md for map styling guidelines

### Step 2: Create Map Data Types
- [ ] Update `src/types/game.ts` with:
  - `Location` interface (id, name, x, y coordinates)
  - `MapState` interface (current location, visited locations)
- [ ] Create mock location data in `src/mocks/game-state.ts`
  - At least 3-4 locations for testing
  - Coordinates for map positioning

### Step 3: Build Map Components (Small Focused Files)
- [ ] Create `src/components/map-canvas.tsx`
  - Visual map background/grid
  - Display area for location points
- [ ] Create `src/components/location-points.tsx`
  - Clickable location markers
  - Hover effects, visual feedback
- [ ] Create `src/components/status-bar.tsx`
  - Display current location name
  - Show quick character/story status
- [ ] Create `src/components/map-nav-button.tsx`
  - Return to dialogue button
  - Positioned corner

### Step 4: Build Map Page
- [ ] Create `src/pages/map.tsx`
  - Combine all map components
  - Handle location click → update game state
  - Location click should trigger transition back to dialogue
  - Dark theme matching dialogue page

### Step 5: Router/Navigation
- [ ] Update `src/App.tsx` to switch between pages
  - Detect when to show map vs dialogue
  - Smooth page transitions
  - Maintain game state across pages

### Step 6: Styling & Polish
- [ ] Apply design system colors/spacing
- [ ] Add hover/click animations to locations
- [ ] Ensure responsive layout (mobile/desktop)
- [ ] Test keyboard accessibility (tab/enter)

### Step 7: Testing & Review
- [ ] Manual test: click locations, navigate back
- [ ] Verify no console errors
- [ ] Check dark theme consistency with dialogue page
- [ ] User review checkpoint

### Step 8: Commit & Finalize
- [ ] Update DEV_LOG.md with v1.4.0 entry
- [ ] Commit with message: "Version 1.4.0 — Map Navigation Page"
- [ ] Ready for next phase

---

## Key References

- **DESIGN_SYSTEM.md** — Color palette, typography, spacing
- **GAMEPLAY_INTERFACE_REQUIREMENTS.md** — Map page UI elements
- **DIALOGUE_DATA_SCHEMA.md** — Dialogue structure (for integration)
- **apps/gameplay/src/** — Existing component patterns

---

## Notes

- Keep components small and focused (per CLAUDE.md rule 4)
- No fallback/defaults (fail directly per rule 1)
- Mock data defines contract before backend
- Map interaction is independent from dialogue
- Can integrate location-based dialogue triggers later (conditionals)

---

## Start Command

```bash
cd apps/gameplay
npm run dev
```

Dev server will reload at `http://localhost:5173`
