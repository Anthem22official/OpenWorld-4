# Design System: OpenWorld Gameplay UI

OpenWorld uses a premium visual novel interface built from three materials: black coated paper, Liquid Glass, and laser holographic foil.

Reference layout image with coordinate grid: [openworld_layout_grid.jpg](../openworld_layout_grid.jpg)

---

## Design Direction

### Material Ratio

| Material | Target Share | Purpose |
|---|---:|---|
| Black coated paper | 65% | Main physical UI foundation |
| Liquid Glass | 25% | Interactive transparent surface layer |
| Laser holographic foil | 10% | Selected, rare, emotional, and identity moments |

### Core Rule

Black coated paper is the base material. Liquid Glass is the interactive layer. Laser holographic foil is the premium highlight.

---

## Material Principles

### Black Coated Paper

Use black coated paper as the default UI material.

- Near-black, never pure black.
- Matte to satin finish.
- Subtle paper grain on large surfaces.
- Soft absorbed light, not mirror reflection.
- Clean cut edges with faint silver or glass rim light.
- Feels like luxury stationery, premium ticket stock, collector booklet, or black art-book paper.

Avoid flat dark-mode gray, plastic shine, carbon fiber, leather, grunge, heavy bevels, and noisy texture.

### Liquid Glass

Use `liquid-glass-react` for primary interactive glass surfaces where React implementation allows it.

- Refractive edge bending.
- Frosted blur over scene art.
- Subtle chromatic aberration.
- Elastic hover and click response.
- Transparent enough to feel layered, opaque enough for text readability.

Liquid Glass is not generic glassmorphism. If the actual displacement effect is unavailable, the implementation must expose that limitation visibly during development.

### Laser Holographic Foil

Use laser holographic foil sparingly.

- Selected choices.
- Active chapter number.
- Current progress indicators.
- Rare states.
- Emotional decision points.
- Identity marks, stars, signatures, and special borders.

Foil should feel like a print finish on black coated paper: silver base with cyan, violet, and pink prism reflections.

---

## Color Tokens

### Black Coated Paper

| Token | Value | Use |
|---|---|---|
| `paper-black` | `#070708` | Main black paper base |
| `paper-ink` | `#0D0D0F` | Large panel fill |
| `paper-charcoal` | `#151518` | Raised surface |
| `paper-raised` | `#1C1C20` | Active paper layer |
| `paper-edge` | `#2A2A30` | Cut edge and divider |

### Silver Foil

| Token | Value | Use |
|---|---|---|
| `silver-foil` | `#D8DCE2` | Primary metallic text and icons |
| `silver-soft` | `#AEB4BE` | Secondary labels |
| `silver-muted` | `#747B86` | Metadata and disabled text |
| `silver-edge` | `rgba(216, 220, 226, 0.55)` | Thin borders |

### Laser Foil

| Token | Value | Use |
|---|---|---|
| `prism-cyan` | `#5EEAF2` | Active edge light |
| `prism-pink` | `#F5A3FF` | Selected accent |
| `prism-violet` | `#A78BFA` | Chapter and progress accent |
| `foil-warm` | `#C8A96A` | Rare warm glint |

### Liquid Glass

| Token | Value | Use |
|---|---|---|
| `glass-smoke` | `rgba(10, 10, 12, 0.58)` | Dark glass panel |
| `glass-white` | `rgba(255, 255, 255, 0.16)` | Edge highlight |
| `glass-border` | `rgba(255, 255, 255, 0.28)` | Glass rim |
| `glass-shadow` | `rgba(0, 0, 0, 0.48)` | Depth shadow |

### Semantic Colors

| Token | Value | Use |
|---|---|---|
| `text-primary` | `#F4F1F6` | Dialogue and primary UI text |
| `text-secondary` | `#C7C3CC` | Labels and secondary controls |
| `text-muted` | `#85808C` | Metadata |
| `success` | `#7DD3A8` | Confirmed state |
| `warning` | `#E6C56E` | Caution state |
| `danger` | `#F08A9A` | Error or destructive state |

---

## Typography

| Element | Font | Size | Weight | Line Height | Notes |
|---|---|---:|---:|---:|---|
| Dialogue text | Noto Serif JP, Yu Mincho, serif | 24-30px | 400 | 1.65 | Use for story text |
| Speaker name | Noto Serif JP, Yu Mincho, serif | 32-40px | 500 | 1.2 | Large, elegant, foil-compatible |
| UI label | Inter, Segoe UI, sans-serif | 12-14px | 500 | 1.4 | Letter spacing allowed for labels |
| Choice text | Noto Sans JP, Inter, sans-serif | 22-28px | 500 | 1.4 | High readability |
| Control text | Inter, Segoe UI, sans-serif | 14-16px | 500 | 1.3 | Paired with icons |
| Metadata | Inter, Segoe UI, sans-serif | 11-13px | 400 | 1.4 | Muted silver |

Use serif for narrative presence and sans-serif for system controls. Do not use monospace for dialogue.

---

## Surface System

### Black Coated Paper CSS

```css
.black-coated-paper {
  position: relative;
  background:
    radial-gradient(circle at 18% 8%, rgba(255, 255, 255, 0.07), transparent 24%),
    linear-gradient(145deg, #151518 0%, #070708 48%, #101012 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.055),
    inset 0 -1px 0 rgba(0, 0, 0, 0.65),
    0 18px 44px rgba(0, 0, 0, 0.38);
}

.black-coated-paper::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.16;
  mix-blend-mode: overlay;
  background-image:
    radial-gradient(rgba(255, 255, 255, 0.08) 0.5px, transparent 0.5px);
  background-size: 3px 3px;
}
```

### Laser Foil Edge CSS

```css
.laser-foil-edge {
  border: 1px solid rgba(216, 220, 226, 0.58);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    0 0 0 1px rgba(94, 234, 242, 0.22),
    0 0 18px rgba(167, 139, 250, 0.28);
}

.laser-foil-active {
  border-color: rgba(245, 163, 255, 0.8);
  box-shadow:
    0 0 0 1px rgba(94, 234, 242, 0.75),
    0 0 24px rgba(94, 234, 242, 0.42),
    0 0 34px rgba(245, 163, 255, 0.30);
}
```

---

## Reconstructed Gameplay Layout

Reference image size: `2560 x 1440`.

| Region | Coordinates | Role |
|---|---|---|
| Top status bar | `x: 0-2560`, `y: 0-86` | Chapter, time, date, location, system status |
| Menu corner | `x: 2392-2560`, `y: 0-139` | Main menu affordance |
| Left chapter card | `x: 42-479`, `y: 163-979` | Chapter summary, image, progress, chapter detail action |
| Choice 1 | `x: 1666-2432`, `y: 274-405` | Normal choice |
| Choice 2 selected | `x: 1651-2443`, `y: 440-574` | Active selected choice with foil emphasis |
| Choice 3 | `x: 1667-2434`, `y: 607-730` | Normal choice |
| Dialogue panel | `x: 139-2470`, `y: 960-1290` | Speaker identity and dialogue text |
| Bottom controls | `x: 33-2560`, `y: 1354-1440` | Menu, save, load, auto, skip, backlog, config |

### Layout Principles

- Keep the character art dominant and mostly unobstructed.
- Place choices on the right side where they do not cover the face.
- Anchor dialogue at the bottom with a wide black coated-paper body and glass rim.
- Use left-side chapter card as contextual navigation, not a modal.
- Keep global controls in a single bottom rail.
- Reserve the strongest laser foil for the selected choice and key story identity marks.

---

## Component Patterns

### Top Status Bar

- Height: `72-88px` desktop.
- Material: black coated paper with a thin silver bottom border.
- Content: chapter label left, time center, location/system status right.
- Foil use: chapter number only.
- Avoid large glow or heavy blur in the top bar.

### Left Chapter Card

- Material: black coated paper.
- Radius: `28-36px`.
- Border: `1px` silver edge with low opacity.
- Image frame: thin silver or glass border with small corner accents.
- Progress: short cyan-to-violet foil line.
- Action button: rounded black paper or restrained glass button.

### Choice Buttons

Normal choice:
- Material: black coated paper with mild glass overlay.
- Border: muted silver.
- Number badge: circular, silver outline.
- Right arrow: silver icon.
- No rainbow glow by default.

Selected choice:
- Material: Liquid Glass over black coated paper.
- Border: laser holographic foil.
- Right-side star/glint is allowed.
- Glow must remain contained to the button bounds.

### Dialogue Panel

- Material: black coated paper body with Liquid Glass top rim.
- Position: bottom anchored.
- Width: broad, almost full viewport.
- Speaker block: left aligned, large serif name.
- Dialogue text: large, readable, high contrast.
- Foil use: speaker divider, star mark, or active emotional beat only.
- The panel must not hide the character face.

### Bottom Control Rail

- Material: black coated paper.
- Shape: full-width rail with angled or softened side cuts.
- Icons: silver line icons.
- Labels: uppercase sans-serif.
- Dividers: dotted or thin silver lines.
- Active control: subtle prism edge, not full glow.

### Menu Corner

- Material: raised black coated paper tab.
- Border: thin silver edge.
- Icon: silver hamburger.
- Foil use: only active or notification state.

---

## Spacing System

| Token | Value | Use |
|---|---:|---|
| `xs` | `4px` | Icon alignment, micro gaps |
| `sm` | `8px` | Tight internal spacing |
| `md` | `12px` | Labels and metadata groups |
| `lg` | `16px` | Button padding |
| `xl` | `24px` | Panel internal padding |
| `2xl` | `32px` | Major component gaps |
| `3xl` | `48px` | Large panel margins |

Minimum touch target: `44 x 44px`.

---

## Motion And Interaction

- Hover: `180-240ms ease-out`.
- Choice selection: `260-360ms`, with contained foil bloom.
- Liquid Glass elasticity: subtle; avoid bouncing UI.
- Foil shimmer: only on selected or story-important states.
- Page transition: `240-320ms` fade and slight vertical drift.
- Respect `prefers-reduced-motion`; disable shimmer, elasticity, and large displacement when reduced motion is enabled.

---

## Accessibility

- Dialogue contrast must be at least `4.5:1`.
- Text over Liquid Glass needs a dark backing layer.
- Foil color must never be the only state indicator.
- Selected choices need text, border, icon, and focus state changes.
- Keyboard focus uses a silver outline plus prism accent.
- Do not hide focus rings.
- Avoid excessive blur behind long text.

---

## Implementation Notes For React

### Preferred Glass Layer

Use `liquid-glass-react` for selected choices, dialogue rim treatments, floating overlays, and high-value interactive controls.

```tsx
import LiquidGlass from "liquid-glass-react";

<LiquidGlass
  displacementScale={48}
  blurAmount={0.08}
  saturation={128}
  aberrationIntensity={1.4}
  elasticity={0.18}
  cornerRadius={32}
>
  <div className="choice-content">Choice text</div>
</LiquidGlass>
```

### Component Structure

- `TopStatusBar`
- `ChapterCard`
- `ChoicePanel`
- `ChoiceButton`
- `DialoguePanel`
- `BottomControlRail`
- `MenuCorner`

Keep UI and UX logic split into focused `.ts` files. Do not build a monolithic `main.ts`.

### Mock-First Contract

Mocks define the UI contract before backend integration.

- Chapter metadata.
- Character profile.
- Dialogue line.
- Choice list.
- Selected choice state.
- Save/load metadata.
- System control availability.

---

## Responsive Rules

| Breakpoint | Layout |
|---|---|
| `<640px` | Stack chapter context above dialogue; choices become bottom sheet above dialogue |
| `640-1024px` | Hide left card by default; expose as drawer |
| `1024-1440px` | Keep right choices and bottom dialogue; reduce left card width |
| `1440px+` | Full reference layout with left card, right choices, bottom rail |

---

## Anti-Patterns

- Do not make every border holographic.
- Do not use pure black `#000` as the main surface.
- Do not make normal buttons glow.
- Do not place glass text directly over bright art without a backing layer.
- Do not use heavy neon cyberpunk styling.
- Do not use cheap carbon fiber, leather, grunge, or plastic texture.
- Do not let foil effects compete with character faces.
- Do not animate shimmer continuously on idle UI.
- Do not use color alone to indicate selected, disabled, success, or danger states.
