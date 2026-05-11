# Location Background Asset Style Prompt

Use this shared style prompt for persistent-database location background assets.

```text
Near-future Shibuya visual novel location background, premium Japanese game background art, cinematic 4K wide establishing shot, elegant urban night atmosphere, polished anime environment rendering, clean architectural detail, subtle luxury fashion-district mood, black coated paper UI compatibility, balanced negative space for dialogue and choice overlays, no characters in the foreground, no readable text, no watermark.

Strict style requirements: Japanese visual novel background art only. Not photorealistic, not 3D, not western comic, not painterly fantasy, not a cropped texture, not a map screenshot, not a UI mockup. Keep the scene readable behind dark Liquid Glass and black coated-paper UI overlays.
```

Atlas generation defaults:

```json
{
  "size": "2560x1440",
  "quality": "medium",
  "output_format": "jpeg"
}
```

Drawing-quality discovery:

- The first location backgrounds were high resolution, but the visible quality issue was drawing/render discipline, not pixel count.
- Main failure modes: over-smoothed airbrush surfaces, smeared signage, melted window grids, weak architectural perspective, noisy crowd/storefront texture, and excessive bloom hiding weak structure.
- Better prompts should prioritize clean architectural draftsmanship before atmosphere: crisp building edges, accurate perspective, precise facade panels, sharp window grids, clean railings, believable street markings, structured reflections, restrained bloom, and strong edge hierarchy.
- Do not fix weak drawing by only asking for "more detail"; that tends to add visual noise without improving structure.
- Atlas GPT Image 2 medium test produced a stronger baseline than the existing backgrounds: sharper architecture, cleaner signage, clearer material separation, and less melted airbrush rendering.

Atlas GPT Image 2 medium test:

```json
{
  "model": "openai/gpt-image-2/text-to-image",
  "size": "2560x1440",
  "quality": "medium",
  "output_format": "jpeg",
  "prediction_id": "231dd1377fd246d58cfab75ae1e515cf",
  "output_url": "https://atlas-img.oss-us-west-1.aliyuncs.com/images/d0d34524-057b-448a-958d-5ee776de9a2b.jpg"
}
```

Drawing-quality prompt addendum:

```text
Prioritize drawing quality: clean architectural draftsmanship, accurate perspective, crisp building edges, precise facade panels, sharp window grids, clean railings, believable street markings, structured wet-pavement reflections, well-rendered glass, metal, concrete, and asphalt, restrained bloom, strong edge hierarchy, clean material separation.

Avoid smeared signs, warped buildings, melted windows, fake unreadable text, over-airbrushed surfaces, noisy crowd texture, excessive glow, low-detail storefronts, blurry architecture.
```

Asset key format:

```text
locations/<location-id>/background/main.jpg
```

Location prompts:

```text
Create a location background for Shibuya 109 using the shared style prompt. Show the vertical fashion landmark overlooking Shibuya Crossing at night, premium storefront light, controlled crowds, wet pavement reflections, and enough clear composition space for visual novel UI overlays.
```

```text
Create a location background for QFRONT / Tsutaya using the shared style prompt. Show the bright media facade facing the scramble crossing at night, layered screens treated as abstract glow without readable text, controlled pedestrian flow, and enough clear composition space for visual novel UI overlays.
```

```text
Create a location background for MAGNET by SHIBUYA109 using the shared style prompt. Show a nightlife-facing shopping tower above the flow of people at night, elevated urban energy, glass and metal details, restrained neon reflections, and enough clear composition space for visual novel UI overlays.
```

```text
Create a location background for Shibuya Station / Hachiko using the shared style prompt. Show a meeting point where trains, ads, and crowds compress into one pulse at night, station entrances and plaza movement, readable city depth without readable signage, and enough clear composition space for visual novel UI overlays.
```
