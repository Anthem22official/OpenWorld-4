# Database Bootstrap SQL

Use this guide after applying Prisma migrations when you need the local SQLite
database to contain the current read-only MVP content.

Run from `apps/server`:

```powershell
sqlite3 prisma\dev.db
```

Then paste:

```sql
BEGIN;

INSERT INTO "Location" (
  "id",
  "name",
  "appearance_description",
  "x",
  "y",
  "level",
  "accessible_start",
  "accessible_end",
  "background_asset_key",
  "area_id",
  "area_map_id",
  "building_id",
  "map_kind"
) VALUES
  ('shibuya-109', 'Shibuya 109', 'A vertical fashion landmark overlooking the crossing.', 25, 26, 1, 0, 1440, 'locations/shibuya-109/background/main.jpg', 'shibuya', 'shibuya-crossing', 'shibuya-109', 'building-shape'),
  ('qfront', 'QFRONT / Tsutaya', 'A bright media facade facing the scramble crossing.', 67, 28, 1, 0, 1440, 'locations/qfront/background/main.jpg', 'shibuya', 'shibuya-crossing', 'qfront', 'building-shape'),
  ('magnet', 'MAGNET by SHIBUYA109', 'A nightlife-facing shopping tower above the flow of people.', 75, 73, 1, 0, 1440, 'locations/magnet/background/main.jpg', 'shibuya', 'shibuya-crossing', 'magnet', 'building-shape'),
  ('hachiko-station', 'Shibuya Station / Hachiko', 'A meeting point where trains, ads, and crowds compress into one pulse.', 24, 76, 1, 0, 1440, 'locations/hachiko-station/background/main.jpg', 'shibuya', 'shibuya-crossing', 'hachiko-station', 'building-shape');

INSERT INTO "Character" (
  "id",
  "name",
  "activated",
  "appearance_description",
  "personality"
) VALUES (
  'alex-kiriya',
  'Alex Kiriya',
  1,
  'Adult man in his early thirties, 184 cm, lean athletic build, black undercut hair, clear skin, and a calm model-like face. Usually wears a fitted charcoal tech blazer, tapered black trousers, polished boots, and a slim silver ear cuff.',
  '["composed","ambitious","observant","status-aware","dry-humored"]'
);

INSERT INTO "CharacterState" (
  "id",
  "character_id",
  "location_id",
  "activity",
  "game_time_detail"
) VALUES (
  'alex-kiriya-state',
  'alex-kiriya',
  'shibuya-109',
  'waiting beside the entrance after a brand meeting',
  '2040-08-05 19:30'
);

INSERT INTO "ScheduleBlock" (
  "id",
  "character_id",
  "location_id",
  "activity",
  "start_time",
  "duration"
) VALUES
  ('alex-kiriya-schedule-morning', 'alex-kiriya', 'qfront', 'reviewing campaign footage over coffee', 570, 150),
  ('alex-kiriya-schedule-afternoon', 'alex-kiriya', 'shibuya-109', 'meeting a fashion client', 840, 180),
  ('alex-kiriya-schedule-night', 'alex-kiriya', 'magnet', 'hosting a quiet rooftop industry table', 1200, 180);

INSERT INTO "Memory" (
  "id",
  "character_id",
  "summary",
  "game_date"
) VALUES (
  'alex-kiriya-memory-first-crossing',
  'alex-kiriya',
  'Alex remembers seeing the protagonist pause at Shibuya Crossing with the sharp focus of someone trying not to look overwhelmed. The city was loud, the screens were brighter than the evening sky, and Alex felt a flicker of interest because the hesitation looked temporary. He decided to test whether the newcomer wanted comfort, challenge, or access.',
  '2040-08-05'
);

INSERT INTO "DialogueNode" (
  "id",
  "speaker",
  "text",
  "voice_asset_key",
  "next_dialogue_id"
) VALUES
  ('start', NULL, '渋谷の夜は鋭く澄んでいた。スクランブル交差点の信号が変わり、群衆の上で巨大なスクリーンが瞬く。109の入口のそばに、桐谷アレックスが静かに立っていた。', NULL, 'line-2'),
  ('line-2', 'Alex', '静かに話す場所としては、東京でいちばん騒がしい場所を選んだね。', 'characters/alex-kiriya/voice/line-2.wav', NULL),
  ('response-warm-1', NULL, 'アレックスは駅前の光を一度見上げ、それからこちらに視線を戻した。街のざわめきが、返事のすべてを誘いのように変えていく。', NULL, 'end-good'),
  ('response-cold-1', 'Alex', '気をつけて。渋谷は、自信のある顔から先に飲み込んでいく街だ。', 'characters/alex-kiriya/voice/response-cold-1.wav', 'end-missed'),
  ('end-good', NULL, '僕たちは人波に紛れて交差点を渡った。近すぎる距離も、言葉にしない熱も、街の音が全部隠してくれた。', NULL, NULL),
  ('end-missed', NULL, 'アレックスはハチ公口のほうへ消えていった。残された距離を、また交差点の光と人波が埋めていく。', NULL, NULL);

INSERT INTO "DialogueChoice" (
  "id",
  "dialogue_node_id",
  "text",
  "next_dialogue_id",
  "sort_order"
) VALUES
  ('choice-yes', 'line-2', 'じゃあ、少し静かな場所まで一緒に歩こう。', 'response-warm-1', 1),
  ('choice-no', 'line-2', 'あなたがこの騒がしさについてこられるか、見たかった。', 'response-cold-1', 2);

INSERT INTO "Event" (
  "id",
  "description",
  "type",
  "priority",
  "conditions",
  "dialogue_id"
) VALUES (
  'meet-alex-at-shibuya-109',
  'アレックスが渋谷109で主人公に声をかける。',
  'character_conversation',
  '{"value":"mandatory","index":10}',
  '[{"type":"location","location_id":"shibuya-109"},{"type":"characterLocation","character_id":"alex-kiriya","location_id":"shibuya-109"}]',
  'start'
);

COMMIT;
```

Verification:

```sql
SELECT 'Character', count(*) FROM "Character"
UNION ALL SELECT 'Location', count(*) FROM "Location"
UNION ALL SELECT 'DialogueNode', count(*) FROM "DialogueNode"
UNION ALL SELECT 'DialogueChoice', count(*) FROM "DialogueChoice"
UNION ALL SELECT 'Event', count(*) FROM "Event";
```

Expected counts:

```text
Character|1
Location|4
DialogueNode|6
DialogueChoice|2
Event|1
```
