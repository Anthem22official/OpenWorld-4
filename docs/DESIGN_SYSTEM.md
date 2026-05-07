# Design System: OpenWorld Gameplay UI

Visual novel gameplay interface with emphasis on narrative immersion, readability, and elegant interaction.

---

## Color Palette

### Primary Colors (Narrative Mood)
- **Deep Blue** `#0F172A` — Primary text, character names, focal elements
- **Soft Lavender** `#9F7AEA` — Secondary actions, character dialogue highlights
- **Warm Bronze** `#B8860B` — Important UI elements, choice highlights

### Semantic Colors
- **Text Neutral** `#1E293B` — Body dialogue text (light mode)
- **Text Muted** `#64748B` — Secondary labels, timestamps
- **Background Base** `#F8FAFC` — Dialogue box background (light mode)
- **Border Light** `#E2E8F0` — Subtle dividers, UI boundaries
- **Success** `#10B981` — Confirmation states
- **Alert** `#EF4444` — Warnings, errors

### Dark Mode Variants
- **Dark Background** `#0F172A` — Main background
- **Dark Surface** `#1E293B` — Card/box backgrounds
- **Dark Text** `#F1F5F9` — Primary text
- **Dark Muted** `#94A3B8` — Secondary text

---

## Typography

### Font Pairings
- **Heading/UI**: System sans-serif (Segoe UI, -apple-system, sans-serif)
- **Dialogue/Body**: Georgia, serif (literary feel for story text)

### Type Scale
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| **Dialogue Text** | Georgia | 16px | 400 | 1.6 |
| **Character Name** | Sans-serif | 14px | 600 | 1.4 |
| **Choice Button** | Sans-serif | 15px | 500 | 1.5 |
| **UI Label** | Sans-serif | 12px | 500 | 1.4 |
| **Control Bar Text** | Sans-serif | 13px | 400 | 1.4 |

---

## Spacing System

### Base Unit: 4px
| Scale | Value | Use Case |
|-------|-------|----------|
| xs | 4px | Icon spacing, tight clusters |
| sm | 8px | Component padding, small gaps |
| md | 12px | Inner element spacing |
| lg | 16px | Section padding, moderate gaps |
| xl | 24px | Page margins, large gaps |
| 2xl | 32px | Major section spacing |

### Key Measurements
- **Dialogue box padding**: 16px (lg)
- **Character area height**: 280-320px (left/center)
- **Dialogue box height**: 160-180px (bottom)
- **Choice button spacing**: 8px vertical, 12px horizontal padding
- **Control bar button spacing**: 8px between buttons
- **Page side margins**: 16px (mobile), 24px (desktop)

---

## Component Patterns

### Dialogue Box
```
Layout:
┌─────────────────────────────────┐
│ [Character Name - 14px, bold]   │
├─────────────────────────────────┤
│ "Dialogue text flows here...     │
│  on multiple lines with          │
│  generous line height for        │
│  readability."                   │
│                    — 16px serif  │
└─────────────────────────────────┘

Background: rgba(248, 250, 252, 0.95) light / rgba(30, 41, 59, 0.95) dark
Border: 1px solid #E2E8F0 light / #334155 dark
Padding: 16px
Border radius: 8px
Backdrop filter: blur(8px) for depth
```

### Choice Button
```
Style: Outlined with hover effect
Padding: 12px 16px
Border: 2px solid #9F7AEA
Text color: #0F172A (light mode)
Background: transparent by default
Hover: background #9F7AEA, text white, smooth transition
Active: background #7C3AED, border #7C3AED
Transition: 150ms ease
Border radius: 6px
Min width: 200px (adjusts to content)
```

### Character Area Frame
```
Layout: Left-aligned sprite container
Width: 200-240px (desktop), 100% (mobile)
Height: 300px
Background: subtle gradient or solid
Border: 1px solid #E2E8F0
Border radius: 8px
Padding: 8px
Display: centered image/sprite with 1:1 aspect ratio
Fallback: placeholder text if no image
```

### Control Bar
```
Layout: Horizontal flex, space-between
Height: 48px
Padding: 8px 16px
Background: transparent or rgba with slight background
Button style: Minimal text buttons, no background
Button spacing: 8px
Button text: 13px sans-serif, 400 weight
Hover: text color shift to lavender, underline effect
```

### Status Bar (for Map page)
```
Layout: Horizontal bar, top/side positioned
Height: 40px
Padding: 8px 16px
Display: Current location name, character status flags
Font: 13px sans-serif, muted color
Background: semi-transparent light surface
```

---

## Interactions

### Transitions & Animations
- **Hover transitions**: 150ms ease-in-out (buttons, cards)
- **Page transitions**: 200ms fade-in/fade-out
- **Choice selection**: 300ms scale + color shift
- **Dialogue appear**: stagger text at 50-80ms per line (optional)
- **Dialogue fade**: 400ms fade-in for smooth entry

### Cursor States
- **On dialogue text**: default cursor
- **On choice button**: pointer cursor
- **On clickable UI**: pointer cursor
- **On disabled**: not-allowed cursor

### Focus States (Accessibility)
- **Keyboard focus**: 2px solid #7C3AED outline with 2px offset
- **Tab visible**: always show focus ring on buttons
- **High contrast**: increase border width in high-contrast mode

---

## Layout Grid

### Desktop (1024px+)
```
┌─────────────────────────────────────────┐
│            GAMEPLAY AREA                │
├──────────────┬──────────────────────────┤
│              │  [Dialogue Display]      │
│ Character    │  ┌────────────────────┐  │
│ Sprite       │  │ Character Name     │  │
│ (240px)      │  │ ┌────────────────┐ │  │
│              │  │ │ Dialogue text  │ │  │
│              │  │ │ flows here...  │ │  │
│              │  │ └────────────────┘ │  │
│              │  └────────────────────┘  │
│              │  ┌ Choice 1 ────────────┐│
│              │  ┌ Choice 2 ────────────┐│
│              │  [Save] [Continue] [Back]│
└──────────────┴──────────────────────────┘
```

### Mobile (375px-768px)
```
┌──────────────────────┐
│   CHARACTER SPRITE   │
│   (Full width, 200px)│
├──────────────────────┤
│ [Dialogue Box]       │
│ Character Name       │
│ "Dialogue text..."   │
├──────────────────────┤
│ [Choice 1 ────────]  │
│ [Choice 2 ────────]  │
├──────────────────────┤
│[Save][Continue][Back]│
└──────────────────────┘
```

---

## Anti-Patterns (What NOT to do)

❌ **Color only indicators** — Don't rely on color alone for status (add icons/text)  
❌ **No focus states** — Always provide keyboard navigation feedback  
❌ **Instant transitions** — Avoid 0ms transitions; use 150-300ms minimum  
❌ **Text shadow heavy** — Avoid deep shadows on text; use subtle text-1px strokes  
❌ **Small touch targets** — Keep buttons minimum 44x44px  
❌ **Clashing colors** — Avoid high-saturation combinations; use muted palette  
❌ **Monospace dialogue** — Don't use monospace fonts; use proportional serif (Georgia)  
❌ **Auto-playing audio** — Never auto-play dialogue; user should control playback  

---

## Implementation Notes for React

### CSS Framework
Use Tailwind CSS with custom design tokens in `tailwind.config.js`:

```javascript
theme: {
  colors: {
    primary: '#0F172A',
    lavender: '#9F7AEA',
    bronze: '#B8860B',
    // ... rest of palette
  },
  fontFamily: {
    serif: ['Georgia', 'serif'],
    sans: ['-apple-system', 'Segoe UI', 'sans-serif'],
  },
  spacing: {
    xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px', '2xl': '32px',
  },
}
```

### Component Structure
- **`<DialogueBox>`** — Displays speaker name + dialogue text
- **`<CharacterArea>`** — Sprite container with frame
- **`<ChoicePanel>`** — Flex row of choice buttons
- **`<ControlBar>`** — Minimal button row
- **`<DialoguePage>`** — Combines all above components

### State Management
- Use React state for current dialogue/choices
- Mock data in `src/mocks/game-state.ts` defines structure
- No backend calls in Phase 3 (mocks only)

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| **Mobile** | <640px | Single column, full-width sprite |
| **Tablet** | 640px-1024px | Character left, flexible sizing |
| **Desktop** | 1024px+ | Character left fixed, dialogue right flexible |

---

## Accessibility Checklist

- [ ] All buttons labeled with readable text (no icon-only)
- [ ] Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- [ ] Focus visible on all interactive elements
- [ ] `aria-labels` for dynamic content
- [ ] Dialogue text keyboard selectable/readable by screen readers
- [ ] No auto-playing media
- [ ] Reduced motion respected: `prefers-reduced-motion`
