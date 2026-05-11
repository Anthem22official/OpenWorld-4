# Character Asset Style Prompt

Use this shared style prompt for persistent-database full-body character assets.

```text
Full-body adult Japanese male visual novel character illustration, premium Japanese anime style, elegant proportions, sharp clean linework, polished cel shading with subtle gradients, refined face structure, expressive but restrained eyes, dark luxury fashion, layered black clothing, metallic silver accents, high-end modern Shibuya visual-novel character design, full body visible from head to shoes, centered composition, generous white margin, plain pure white background, no text, no watermark.

Strict style requirements: Japanese visual novel anime character art only. Not realistic, not photorealistic, not semi-realistic, not 3D, not western comic, not painterly, not a cropped portrait, not a bust, not a game screenshot, not a fashion photo.
```

Atlas generation defaults:

```json
{
  "model": "openai/gpt-image-2/text-to-image",
  "size": "2160x3840",
  "quality": "medium",
  "output_format": "png"
}
```

First checkpoint prompt:

```text
Create Ren Takahashi using the shared style prompt. Ren is an adult Japanese male with a composed calm expression, short tousled black hair, refined dark eyes, a long tailored black coat, structured black shirt and trousers, slim gloves, subtle silver hardware, and a quiet poised stance.
```
