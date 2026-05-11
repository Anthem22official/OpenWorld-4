# Dialogue Data Schema

## Overview

A dialogue is a directed graph of narrative nodes. Events choose the starting node through `dialogue_id`; the graph then advances through `nextDialogueId` or player `choices`.

## Data Types

```typescript
interface DialogueNode {
  id: string
  speaker?: string
  text: string
  scene: DialogueScene
  voiceAssetKey?: string
  nextDialogueId?: string
  choices?: Choice[]
}

interface DialogueScene {
  mode: "dialogue" | "cg"
  backgroundAssetKey?: string
  cgAssetKey?: string
  characterIds: string[]
}

interface Choice {
  id: string
  text: string
  nextDialogueId: string
}
```

Rules:

- `speaker` is optional. Undefined means narration.
- When present, `speaker` must be a database character ID such as `ren-takahashi`.
- `scene` is required and controls visual-novel staging for the node.
- `scene.mode = "dialogue"` requires `backgroundAssetKey` and renders `characterIds`.
- `scene.mode = "cg"` requires `cgAssetKey` and replaces the regular character sprite layer.
- `characterIds` supports 0-4 database character IDs.
- When `speaker` is present in dialogue mode, it must also appear in `scene.characterIds`.
- When `speaker` is present in CG mode with a reference character, it must also appear in `scene.characterIds`.
- Scene image keys must be storage keys such as `locations/shibuya-109/background/main.jpg`, not public URLs.
- A node may have `nextDialogueId` or `choices`, but not both.
- A node with neither `nextDialogueId` nor `choices` is an end state.
- `choices` must have 2 or more items.
- Every `nextDialogueId` must point to an existing `DialogueNode`.
- `voiceAssetKey`, when present, must be a storage key for a `.wav` file, not a public URL.

## Current Runtime Storage

Dialogue nodes and choices are stored in the database:

```text
DialogueNode
DialogueChoice
```

The gameplay app receives dialogue data from:

```text
GET /api/game/bootstrap
```

Runtime dialogue no longer comes from `apps/gameplay/src/mocks`.

## Voice Generation

The server exposes OpenRouter text-to-speech at:

```text
POST /api/text-to-speech/speech
POST /api/text-to-speech/events/{eventId}/voices
```

Request body:

```json
{
  "input": "Dialogue text",
  "model": "google/gemini-3.1-flash-tts-preview",
  "voice": "Charon"
}
```

`POST /api/text-to-speech/speech` returns `audio/wav`.

`POST /api/text-to-speech/events/{eventId}/voices` takes a `model` and `voice`, traverses all character-spoken dialogue nodes reachable from the event start, writes missing WAV files to `apps/gameplay/public/assets/database/dialogue/{dialogueStartId}/voices/`, and updates `voiceAssetKey` through the database `voice_asset_key` column. Existing voice keys are skipped only when they match the dialogue-scoped storage key and the referenced local WAV file exists.

## Current Event Graphs

```text
ren-shibuya-109-start
  -> ren-shibuya-109-line
    -> ren-shibuya-109-warm -> ren-shibuya-109-warm-end
    -> ren-shibuya-109-cool -> ren-shibuya-109-cool-end

kaito-qfront-start
  -> kaito-qfront-line
    -> kaito-qfront-warm -> kaito-qfront-warm-end
    -> kaito-qfront-cool -> kaito-qfront-cool-end

daiki-magnet-start
  -> daiki-magnet-line
    -> daiki-magnet-warm -> daiki-magnet-warm-end
    -> daiki-magnet-cool -> daiki-magnet-cool-end

haruto-hachiko-start
  -> haruto-hachiko-line
    -> haruto-hachiko-warm -> haruto-hachiko-warm-end
    -> haruto-hachiko-cool -> haruto-hachiko-cool-end
```

## Example

```typescript
const renLine: DialogueNode = {
  id: 'ren-shibuya-109-line',
  speaker: 'ren-takahashi',
  text: 'その顔、まだこの街に慣れていないね。でも逃げる顔でもない。どちらを見せたい？',
  scene: {
    mode: 'cg',
    cgAssetKey: 'cg/ren-overlay-test.png',
    characterIds: ['ren-takahashi'],
  },
  choices: [
    {
      id: 'ren-shibuya-109-choice-warm',
      text: '慣れていない。でも、この街に似合うようになりたい。',
      nextDialogueId: 'ren-shibuya-109-warm',
    },
    {
      id: 'ren-shibuya-109-choice-cool',
      text: '逃げるつもりはない。ただ、簡単に読まれたくない。',
      nextDialogueId: 'ren-shibuya-109-cool',
    },
  ],
}
```
