# Dialogue Data Schema

## Overview

A **dialogue** is a directed graph of connected narrative nodes. A **chapter** is simply a starting dialogue node ID. The story flows through the graph via `nextDialogueId` (fixed narrative) or `choices` (player decisions).

---

## Data Types

### DialogueNode

```typescript
interface DialogueNode {
  id: string                // Unique identifier for this node
  speaker?: string          // Speaker name or character ID (undefined = narration)
  text: string              // Single paragraph of dialogue/narration
  voiceAssetKey?: string    // Optional WAV storage key for one-shot voice playback
  nextDialogueId?: string   // Auto-advance to next paragraph (fixed script)
  choices?: Choice[]        // OR show player decision (2+ options only)
}
```

**Rules:**
- Must have either `nextDialogueId` OR `choices` (not both, not neither for story progression)
- `text` should be 1-3 sentences (one paragraph max)
- `speaker` is optional (undefined means narration/narrator voice)
- `voiceAssetKey` is optional and must be a `.wav` storage key, not a public URL
- If neither `nextDialogueId` nor `choices` exist, node is an **end state** (story concludes)

### Voice Assets

Use `voiceAssetKey` when a dialogue node should play a one-shot WAV voice line.

```typescript
{
  id: 'alex-shibuya-greeting',
  speaker: 'Alex',
  text: '静かに話す場所としては、東京でいちばん騒がしい場所を選んだね。',
  voiceAssetKey: 'characters/alex-kiriya/voice/alex-shibuya-greeting.wav',
  nextDialogueId: 'alex-shibuya-choice',
}
```

Rules:
- Store storage keys such as `characters/alex-kiriya/voice/line.wav`.
- Do not store public URLs such as `/assets/database/...`.
- Do not use empty keys, parent directory segments, or non-WAV files.
- Voice playback stops when the player advances, chooses an option, or leaves the dialogue page.

### Choice

```typescript
interface Choice {
  id: string                // Unique identifier for this choice
  text: string              // What the player sees (1-2 sentences)
  nextDialogueId: string    // Which dialogue node to go to when selected
}
```

**Rules:**
- `choices` array on a DialogueNode must have 2+ items (never 1)
- All `nextDialogueId` values must point to existing nodes
- Choice text should be concise and reflect player intent

---

## Node Types

### Paragraph Node (Fixed Script)

Auto-advances dialogue. Player clicks/presses space to move forward.

```typescript
{
  id: 'intro-1',
  speaker: undefined,           // Narration
  text: 'The door slowly opens. Inside, soft light spills across worn wooden floors.',
  nextDialogueId: 'intro-2'     // Automatically flow to next
}
```

### Decision Node (Choice Point)

Waits for player input. Shows choice modal.

```typescript
{
  id: 'coffee-greeting',
  speaker: 'Alex',              // Character dialogue
  text: 'Haven\'t seen you here before. Mind if I sit down?',
  choices: [
    { id: 'c1', text: 'Sure, I\'d like the company.', nextDialogueId: 'warm-path' },
    { id: 'c2', text: 'I\'m waiting for someone.', nextDialogueId: 'cold-path' },
    { id: 'c3', text: 'Why do you ask?', nextDialogueId: 'curious-path' }
  ]
}
```

### End Node (Story Conclusion)

No next action. Story pauses.

```typescript
{
  id: 'ending-good',
  speaker: undefined,
  text: 'We talked for hours. As the sun set, I realized this moment would stay with me forever.'
  // No nextDialogueId, no choices → End
}
```

---

## Chapter Structure

A **chapter** is represented by its **root dialogue node ID**. 

```typescript
// Chapter 1: "First Meeting"
const chapter1Start = 'intro-1'

// Chapter 2: "The Coffee Shop"
const chapter2Start = 'coffee-greeting'
```

### Traversal Rules

1. Start at root node (chapter start)
2. Display node text and speaker
3. If `nextDialogueId` exists → User clicks/presses space → Auto-advance
4. If `choices` exist → Show choice modal → User selects → Jump to choice's `nextDialogueId`
5. If neither → End of chapter/story

---

## Valid Dialogue Graph Example

```
intro-1 (narrator)
  ↓ nextDialogueId
intro-2 (narrator)
  ↓ nextDialogueId
coffee-greeting (Alex, with 3 choices)
  ├→ choice-1 → warm-path-1 (narrator) → warm-path-2 (Alex) → ending-good
  ├→ choice-2 → cold-path-1 (Alex) → cold-path-2 (narrator, 2 choices) → [ending-cold OR ending-regret]
  └→ choice-3 → curious-path-1 (Alex) → curious-path-2 (narrator) → ending-good
```

---

## Validation Rules

### Must Have
- ✅ All nodes referenced by `nextDialogueId` must exist
- ✅ All nodes referenced in `choice.nextDialogueId` must exist
- ✅ No circular loops (unless intentional)
- ✅ `choices` array has 2+ options

### Must NOT Have
- ❌ A node with both `nextDialogueId` AND `choices`
- ❌ A single-option `choices` array (use `nextDialogueId` instead)
- ❌ Broken references (pointing to non-existent nodes)
- ❌ Empty text or undefined speaker for story progression

---

## Data Organization

**File Structure:**
```
apps/gameplay/src/mocks/
  └── game-state.ts          // All dialogue nodes in one file (for now)
                             // dialogueNodes: Record<string, DialogueNode>
```

**Example:**
```typescript
const dialogueNodes: Record<string, DialogueNode> = {
  'intro-1': { ... },
  'intro-2': { ... },
  'coffee-greeting': { ... },
  'warm-path-1': { ... },
  // ... all nodes
}

export const mockGameState: GameState = {
  currentDialogueId: 'intro-1',  // Chapter start
  currentLocation: 'Coffee Shop',
}
```

---

## Extension Points (Future)

### Conditionals on Choices
```typescript
interface Choice {
  id: string
  text: string
  nextDialogueId: string
  condition?: {                  // Optional: show choice only if condition met
    requireRelationScore?: number
    requireMemory?: string
    requireLocation?: string
  }
}
```

### Node Metadata
```typescript
interface DialogueNode {
  // ... existing fields
  tags?: string[]            // For searching/organizing (e.g., 'romance', 'action')
  affectRelations?: { [characterId: string]: number }  // Change affinity on this node
  setMemory?: string         // Create a memory when this node plays
}
```

---

## Summary

- **Paragraph** = fixed script, auto-advance via `nextDialogueId`
- **Choice** = player decision, show modal with 2+ options
- **Chapter** = root dialogue node ID
- **Graph** = nodes connected through dialogue flow
- No fake "Continue" choices — clean separation of narrative vs decisions
