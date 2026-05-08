# Image Generation Debug Panel — Design System

## Overview
Dedicated debug page for testing Atlas Cloud image generation API. Horizontal layout with input controls on left, image preview on right. Integrated into gameplay as third page alongside dialogue and map.

---

## Layout & Grid

**Container**: Fullscreen page, horizontal split at ~40% left / ~60% right
- Left panel: Input controls (fixed width, scrollable if needed)
- Right panel: Image preview (flex to fill)
- Divider: Subtle border or spacing gap
- Responsive: Stack vertical on mobile (<768px), horizontal on desktop

```
┌─────────────────────────────────────────────────────────┐
│  [← Back] Image Generator Debug                          │
├──────────────────┬──────────────────────────────────────┤
│  INPUT           │  PREVIEW                             │
│  ┌──────────────┐│  ┌─────────────────────────────────┐ │
│  │ Prompt...    ││  │                                 │ │
│  │              ││  │        [Generated Image]        │ │
│  │              ││  │                                 │ │
│  │ [Submit]     ││  │                                 │ │
│  │ [Clear]      ││  │ Generation time: 2.3s           │ │
│  │              ││  │                                 │ │
│  │ Status:      ││  └─────────────────────────────────┘ │
│  │ Ready        ││  [Error message if failed]           │
│  └──────────────┘│                                       │
└──────────────────┴──────────────────────────────────────┘
```

---

## Color Palette

Match existing dark theme from dialogue/map pages:

| Element | Color | Usage |
|---------|-------|-------|
| **Background** | `#0F172A` (slate-900) | Page background |
| **Panel BG** | `#1E293B` (slate-800) | Input/preview containers |
| **Border** | `#334155` (slate-700) | Dividers, input borders |
| **Text Primary** | `#F1F5F9` (slate-100) | Labels, headings |
| **Text Secondary** | `#CBD5E1` (slate-300) | Helper text |
| **Accent** | `#3B82F6` (blue-500) | Submit button, focus states |
| **Accent Hover** | `#2563EB` (blue-600) | Button hover |
| **Success** | `#10B981` (emerald-500) | Generation success status |
| **Error** | `#EF4444` (red-500) | Error messages |
| **Loading** | `#8B5CF6` (violet-500) | Loading spinner/status |

---

## Typography

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| **Page Title** | System | 24px | 600 | 1.2 |
| **Labels** | System | 14px | 500 | 1.5 |
| **Input Text** | Monospace | 14px | 400 | 1.6 |
| **Status Text** | System | 13px | 400 | 1.5 |
| **Error Text** | System | 13px | 400 | 1.5 |
| **Generation Time** | System | 12px | 400 | 1.4 |

---

## Components

### 1. Input Section (Left Panel)

#### Text Prompt Field
- **Dimensions**: 320px width, 120px height (multiline textarea)
- **Border**: 1px solid `#334155`
- **Background**: `#1E293B`
- **Text color**: `#F1F5F9`
- **Padding**: 12px
- **Border radius**: 4px
- **Focus**: 2px solid `#3B82F6`, no outline
- **Placeholder**: `#64748B` (slate-500), italic

#### Submit Button
- **Dimensions**: 100%, 40px height
- **Background**: `#3B82F6`
- **Text color**: `#FFFFFF`
- **Border**: none
- **Border radius**: 4px
- **Padding**: 10px 16px
- **Font weight**: 600
- **Cursor**: `pointer`
- **Hover**: Background `#2563EB`, shadow `0 4px 6px rgba(0,0,0,0.3)`
- **Active/Loading**: Opacity 0.8, cursor `not-allowed`
- **Disabled**: Background `#64748B`, cursor `not-allowed`
- **Transition**: All 150ms ease

#### Clear Button
- **Dimensions**: 100%, 40px height
- **Background**: `#334155`
- **Text color**: `#CBD5E1`
- **Styling**: Match Submit button style
- **Hover**: Background `#475569`
- **Only enabled**: When prompt is not empty

#### Status Indicator
- **Label**: "Status:"
- **Values**:
  - `Ready` — `#CBD5E1`
  - `Loading...` — `#8B5CF6` (animated spinner icon)
  - `Success` — `#10B981`
  - `Error: [message]` — `#EF4444`
- **Font size**: 13px
- **Padding**: 8px top, 4px bottom

### 2. Preview Section (Right Panel)

#### Image Preview Area
- **Dimensions**: Fill available space (flex grow)
- **Background**: `#1E293B`
- **Border**: 1px solid `#334155`
- **Border radius**: 4px
- **Padding**: 16px
- **Display**: Flex center + middle (when loading or no image)
- **Image**: Max-width 100%, max-height 100%, object-fit contain

#### Generation Time Display
- **Position**: Bottom-left of preview, floating badge
- **Background**: `#0F172A` with opacity 0.8
- **Text color**: `#CBD5E1`
- **Padding**: 8px 12px
- **Border radius**: 4px
- **Font size**: 12px
- **Only visible**: When image exists

#### Error Message Box
- **Position**: Bottom of preview area
- **Background**: `#7F1D1D` (red-900)
- **Border**: 1px solid `#EF4444`
- **Border radius**: 4px
- **Padding**: 12px
- **Text color**: `#FCA5A5` (red-300)
- **Font size**: 13px
- **Only visible**: When `status === 'error'`

### 3. Header/Navigation

#### Back Button (Top-left)
- **Icon**: Left arrow
- **Text**: "← Back" or icon only on mobile
- **Size**: 40px (min touch target)
- **Background**: Transparent
- **Color**: `#CBD5E1`
- **Hover**: Color `#F1F5F9`, background `#334155`
- **Cursor**: `pointer`
- **Padding**: 8px

#### Page Title
- **Text**: "Image Generator Debug"
- **Position**: Center of header area
- **Font size**: 18px
- **Font weight**: 600
- **Color**: `#F1F5F9`

---

## Spacing Scale

Use consistent spacing based on 4px grid:

| Token | Size | Usage |
|-------|------|-------|
| `xs` | 4px | Micro spacing |
| `sm` | 8px | Button padding, tight spacing |
| `md` | 12px | Default padding, input padding |
| `lg` | 16px | Container padding, section spacing |
| `xl` | 24px | Large gaps, panel separation |
| `2xl` | 32px | Vertical spacing, sections |

---

## Interaction States

### Buttons

| State | Style |
|-------|-------|
| **Default** | Solid color, no shadow |
| **Hover** | Darker shade, subtle shadow `0 4px 6px rgba(0,0,0,0.3)` |
| **Active** | Opacity 0.9 |
| **Disabled** | Gray background, cursor `not-allowed` |
| **Focus** | 2px solid focus ring (for keyboard nav) |

### Input Fields

| State | Style |
|-------|-------|
| **Idle** | Border `#334155`, no shadow |
| **Focus** | Border `#3B82F6`, 2px solid, no box-shadow |
| **Filled** | Border `#334155`, text `#F1F5F9` |
| **Disabled** | Background `#0F172A`, opacity 0.5 |
| **Error** | Border `#EF4444` |

---

## Accessibility

### Keyboard Navigation
- **Tab**: Cycle through prompt input → submit → clear → back button
- **Enter**: Submit prompt (if focused on input or button)
- **Escape**: Return to previous page (dialogue/map)
- **Space**: Activate focused button

### Focus Management
- **Focus outline**: 2px solid `#3B82F6`, offset 2px
- **Focus visible**: Only on keyboard nav, not mouse
- **Tab index**: Input (0) → Submit (0) → Clear (0) → Back (-1 or last)

### Touch Targets
- **Min size**: 44px × 44px (all buttons)
- **Spacing**: 8px minimum between targets
- **Mobile**: Buttons stack to 100% width on <768px

### Semantic HTML
- `<textarea>` for prompt input (multiline, flexible)
- `<button>` for all interactive elements
- `<label>` for "Status:" text
- `aria-label="Generate image"` on submit button
- `aria-label="Clear prompt"` on clear button
- `aria-label="Return to dialogue"` on back button
- `aria-busy="true"` on submit button during loading
- `role="img"` on preview image (or use `<img>` with alt)
- `aria-live="polite"` on status indicator (announce changes)

---

## Responsive Behavior

### Desktop (≥ 768px)
- Horizontal layout: 40% left / 60% right
- Input section: 320px fixed width
- Buttons: full width within input section
- Text field: 120px height
- Font sizes: as specified above

### Tablet (480px - 767px)
- Vertical stack (input top, preview bottom)
- Both sections: 100% width
- Input section: min-height 240px
- Text field: 100px height
- Buttons: 100% width
- Font sizes: -2px

### Mobile (< 480px)
- Vertical stack
- Input section: min-height 200px
- Text field: 80px height
- Buttons: 100% width, 44px height
- Font sizes: -2px
- Remove "Back" text, show only icon

---

## Loading State

### During Image Generation
1. **Submit button**:
   - Opacity: 0.8
   - Cursor: `not-allowed`
   - Content: "Generating..." (text) or spinner icon
   - Disabled: true

2. **Status indicator**:
   - Text: "Loading..."
   - Color: `#8B5CF6`
   - Icon: Animated spinner (rotate 360° over 1s, infinite)

3. **Preview area**:
   - Display: Flex center
   - Content: Spinner icon + "Generating image..."
   - Background: `#1E293B`

---

## Error State

1. **Error message box** (appears below preview):
   - Background: `#7F1D1D`
   - Text: Error message from API or default "Failed to generate image. Try again."
   - Visible: For 5 seconds, then fade out (or persist until new submit)

2. **Status indicator**:
   - Text: `Error: [error message]`
   - Color: `#EF4444`
   - Icon: X or exclamation mark

3. **Submit button**: Re-enabled, ready for retry

---

## Animation & Transitions

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| **Button hover** | Color + shadow | 150ms | ease |
| **Focus ring** | Fade in | 100ms | ease |
| **Image appear** | Fade in | 300ms | ease |
| **Error message** | Slide up + fade in | 200ms | ease |
| **Loading spinner** | Rotate 360° | 1000ms | linear (infinite) |
| **Status text change** | Fade in | 150ms | ease |

---

## Theme Variants

### Dark Mode (Default)
As specified in color palette above.

### Light Mode (Future)
- Background: `#F8FAFC` (slate-50)
- Panel BG: `#FFFFFF`
- Text primary: `#0F172A` (slate-900)
- Border: `#E2E8F0` (slate-200)
- Accent: `#3B82F6` (blue-500, same)
- All colors adjusted for 4.5:1 contrast ratio minimum

---

## Component Patterns

### Reusable Layout
```
<div class="debug-page">
  <header class="debug-header">
    <button class="back-button">← Back</button>
    <h1>Image Generator Debug</h1>
  </header>
  
  <div class="debug-container">
    <section class="input-panel">
      {prompt input + buttons + status}
    </section>
    
    <section class="preview-panel">
      {image preview + error message}
    </section>
  </div>
</div>
```

### Button Pattern
```
<button 
  type="button"
  className="btn btn--primary"
  onClick={handleSubmit}
  disabled={isLoading || prompt.trim() === ''}
  aria-label="Generate image"
>
  {isLoading ? 'Generating...' : 'Submit'}
</button>
```

### Status Pattern
```
<div className="status-indicator" aria-live="polite" role="status">
  <span className="status-label">Status:</span>
  <span className={`status-value status--${status}`}>
    {statusText}
  </span>
</div>
```

---

## Anti-Patterns (Avoid)

❌ **Don't**:
- Use emojis as icons (use SVG)
- Use `scale()` on hover (causes layout shift)
- Make buttons less than 44px × 44px
- Use `position: absolute` for critical content (breaks responsive)
- Forget focus outlines (keyboard users need them)
- Mix different transition durations (feels janky)
- Use hardcoded colors directly in components (use theme tokens)
- Forget to disable submit during loading (can cause double-submits)
- Use `alert()` for errors (use status indicator box)

✅ **Do**:
- Use consistent spacing (4px grid)
- Provide clear visual feedback (hover, focus, active)
- Test on 44px touch targets
- Use semantic HTML (`<button>`, `<label>`, `<textarea>`)
- Announce status changes (`aria-live="polite"`)
- Disable buttons during loading
- Use smooth transitions (150-300ms)
- Handle empty states gracefully
- Show loading and error states clearly
