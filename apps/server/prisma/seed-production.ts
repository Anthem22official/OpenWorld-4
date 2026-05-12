import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const characters = [
  {
    id: 'daiki-mori',
    name: 'Daiki Mori',
    activated: true,
    appearance_description:
      'Adult Japanese man with an athletic frame, sharp undercut, ear piercings, layered black street-luxury jacket, chains, and a guarded nightlife aura.',
    personality: '["direct", "physical", "loyal", "competitive", "magnetic"]',
  },
  {
    id: 'haruto-nakamura',
    name: 'Haruto Nakamura',
    activated: true,
    appearance_description:
      'Adult Japanese man with long black hair tied back, refined traditional-modern black clothing, silver floral ornament, and calm senior confidence.',
    personality: '["elegant", "patient", "strategic", "traditional", "commanding"]',
  },
  {
    id: 'kaito-sugiyama',
    name: 'Kaito Sugiyama',
    activated: true,
    appearance_description:
      'Adult Japanese man with glasses, clean brown hair, black formalwear with silver trim, gloves, and the polished restraint of a high-end consultant.',
    personality: '["analytical", "polished", "dry-humored", "ambitious", "controlled"]',
  },
  {
    id: 'ren-takahashi',
    name: 'Ren Takahashi',
    activated: true,
    appearance_description:
      'Adult Japanese man with a composed face, black tousled hair, a long tailored black coat, silver hardware, gloves, and quiet luxury presence.',
    personality: '["composed", "precise", "status-aware", "protective", "reserved"]',
  },
];

const locations = [
  ['ebisu-first-square', 'Ebisu First Square', 'A first-floor plaza that links hotel fronts, cafes, and station-adjacent entries.', 76.6, 27.36, null, 'ebisu', 'ebisu-station-garden-place', 'ebisu-first-square'],
  ['ebisu-garden-place', 'Ebisu Garden Place', 'A bright terrace and retail-civic zone where station travelers gather at dusk.', 66.05, 86.67, null, 'ebisu', 'ebisu-station-garden-place', 'ebisu-garden-place'],
  ['ebisu-neonate', 'Ebisu Neonate', 'Mixed-use block with intimate storefronts and low-light nightlife lanes.', 38.69, 47.94, null, 'ebisu', 'ebisu-station-garden-place', 'ebisu-neonate'],
  ['ebisu-square', 'Ebisu Square', 'A central retail edge with multiple lanes, bright lighting, and direct access points.', 80.27, 39.45, null, 'ebisu', 'ebisu-station-garden-place', 'ebisu-square'],
  ['fpg-links-shibuya', 'FPG Links Shibuya', 'Corporate glass-and-metal node embedded in the Shibuya commercial spine, with discreet transitions between pedestrian circulation and lounge-level movement.', 90.9, 32.7, null, 'shibuya', 'shibuya-crossing', 'fpg-links-shibuya'],
  ['hachiko-station', 'Shibuya Station / Hachiko', 'A meeting point where trains, ads, and crowds compress into one pulse.', 24, 76, 'locations/hachiko-station/background/main.jpg', 'shibuya', 'shibuya-crossing', 'hachiko-station'],
  ['magnet', 'MAGNET by SHIBUYA109', 'A nightlife-facing shopping tower above the flow of people.', 75, 73, 'locations/magnet/background/main.jpg', 'shibuya', 'shibuya-crossing', 'magnet'],
  ['q-plaza-ebisu', 'Q Plaza Ebisu', 'Quiet plaza above the station edge, good for late-night entrances and short conversations.', 29.4, 26.84, null, 'ebisu', 'ebisu-station-garden-place', 'q-plaza-ebisu'],
  ['qfront', 'QFRONT / Tsutaya', 'A bright media facade facing the scramble crossing.', 67, 28, 'locations/qfront/background/main.jpg', 'shibuya', 'shibuya-crossing', 'qfront'],
  ['shibuya-109', 'Shibuya 109', 'A vertical fashion landmark overlooking the crossing.', 25, 26, 'locations/shibuya-109/background/main.jpg', 'shibuya', 'shibuya-crossing', 'shibuya-109'],
  ['shibuya-mark-city-east', 'Shibuya Mark City East', 'Polished shopping tower edge and transit-linked elevated retail spine above the crossing flow, with clean glass geometry and layered corridor lighting.', 35.4, 89.6, null, 'shibuya', 'shibuya-crossing', 'shibuya-mark-city-east'],
  ['shibuya-parkside-kyodo', 'Shibuya Parkside Kyodo', 'Small Shibuya side node with sleek office-retail skin, rooftop adjacency and sharp urban geometry under cross traffic glare.', 86.5, 31.3, null, 'shibuya', 'shibuya-crossing', 'shibuya-parkside-kyodo'],
  ['shibuya-prime', 'Shibuya PRIME', 'Compact Shibuya retail mast with stacked facade elements and premium street-level access, tuned for night crowds and controlled interior glow.', 3, 38.8, null, 'shibuya', 'shibuya-crossing', 'shibuya-prime'],
  ['shibuya-scramble-square', 'Shibuya Scramble Square', 'Neon-tiered Shibuya landmark with mirrored facades over layered pedestrian movement; a night-time observation-ready plaza edge with controlled urban depth.', 95.7, 96.9, null, 'shibuya', 'shibuya-crossing', 'shibuya-scramble-square'],
  ['tokyu-real-estate-ebisu', 'Tokyu Real Estate Ebisu Building', 'Business frontage and mixed-use corridors for quiet, late-hour meetings.', 69.78, 27.13, null, 'ebisu', 'ebisu-station-garden-place', 'tokyu-real-estate-ebisu'],
] as const;

const characterStates = [
  ['daiki-mori-state', 'daiki-mori', 'magnet', 'watching the rooftop guest list before a members-only table opens'],
  ['haruto-nakamura-state', 'haruto-nakamura', 'hachiko-station', 'standing by the station flow with a reserved car arriving nearby'],
  ['kaito-sugiyama-state', 'kaito-sugiyama', 'qfront', 'reading the crossing screens while waiting for a brand metrics call'],
  ['ren-takahashi-state', 'ren-takahashi', 'shibuya-109', 'waiting near the fashion tower entrance after a private fitting'],
] as const;

const scheduleBlocks = [
  ['daiki-mori-schedule-evening', 'daiki-mori', 'magnet', 'rooftop nightlife hosting', 1140, 180],
  ['haruto-nakamura-schedule-evening', 'haruto-nakamura', 'hachiko-station', 'station pickup between appointments', 1110, 120],
  ['kaito-sugiyama-schedule-evening', 'kaito-sugiyama', 'qfront', 'media facade performance review', 1080, 150],
  ['ren-takahashi-schedule-evening', 'ren-takahashi', 'shibuya-109', 'private fashion fitting and quiet scouting', 1110, 150],
] as const;

const memories = [
  ['daiki-mori-memory-rooftop', 'daiki-mori', 'Daiki remembers the protagonist looking up at MAGNET as if entry itself were a test. He likes people who understand that doors open for posture before names.'],
  ['haruto-nakamura-memory-station', 'haruto-nakamura', 'Haruto saw the protagonist pause at Hachiko Station, caught between leaving and stepping deeper into the city. The hesitation looked temporary, not weak.'],
  ['kaito-sugiyama-memory-screens', 'kaito-sugiyama', 'Kaito watched the protagonist read the QFRONT screens too carefully. Most people only see brightness; he noticed someone looking for the rules behind it.'],
  ['ren-takahashi-memory-crossing', 'ren-takahashi', 'Ren noticed the protagonist trying to look calm in front of Shibuya 109. The effort interested him more than confidence would have, because it showed hunger without polish.'],
] as const;

const dialogueNodes = [
  ['daiki-magnet-cool', 'daiki-mori', '慎重なのは悪くない。ただ、東京の夜は待ってくれない。欲しいなら、迷ってる顔ごと連れていく覚悟がいる。', '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":["daiki-mori"]}', 'dialogue/daiki-magnet-start/voices/daiki-magnet-cool.wav', 'daiki-magnet-cool-end'],
  ['daiki-magnet-cool-end', null, '彼は短く手を上げて去った。夜風の中に、まだ誘いの形だけが残っている。', '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":[]}', null, null],
  ['daiki-magnet-line', 'daiki-mori', '上に来たい顔をしてる。問題は、招待されたいのか、自分で入る気なのかだ。', '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":["daiki-mori"]}', 'dialogue/daiki-magnet-start/voices/daiki-magnet-line.wav', null],
  ['daiki-magnet-start', null, 'MAGNETの上階から、低い音楽と夜風が降りてくる。黒いジャケットの男が、入れる人間を選ぶみたいに階段の先を見ていた。', '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":[]}', null, 'daiki-magnet-line'],
  ['daiki-magnet-warm', 'daiki-mori', 'いいね。その目なら入口で止まらない。上は静かじゃないけど、街を見下ろすにはちょうどいい。来る？', '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":["daiki-mori"]}', 'dialogue/daiki-magnet-start/voices/daiki-magnet-warm.wav', 'daiki-magnet-warm-end'],
  ['daiki-magnet-warm-end', null, 'ダイキが振り返るだけで、屋上へ続く空気が少し熱を持った。', '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":[]}', null, null],
  ['haruto-hachiko-cool', 'haruto-nakamura', '帰り道を残すのは大切だ。だが、残しすぎると何も始まらない。今夜の君は、どちらに見られたい？', '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":["haruto-nakamura"]}', null, 'haruto-hachiko-cool-end'],
  ['haruto-hachiko-cool-end', null, '彼の問いだけが、改札の光より長く胸に残った。', '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":[]}', null, null],
  ['haruto-hachiko-line', 'haruto-nakamura', 'ここで待つ人は多い。けれど、選ばれるまで待つ人と、自分で向かう人は違う。君はどちらかな。', '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":["haruto-nakamura"]}', null, null],
  ['haruto-hachiko-start', null, 'ハチ公前の人波は、待ち合わせと別れを同じ速度で運んでいた。長い髪を結んだ男が、その流れの中心で静かに立っている。', '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":[]}', null, 'haruto-hachiko-line'],
  ['haruto-hachiko-warm', 'haruto-nakamura', '落ち着いていて賢い。急ぐ街ほど、足を止める人間の値打ちが見える。少しだけ、こちらへ。', '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":["haruto-nakamura"]}', null, 'haruto-hachiko-warm-end'],
  ['haruto-hachiko-warm-end', null, 'ハルトの声は低く、駅の騒音の中でも不思議と聞き逃せなかった。', '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":[]}', null, null],
  ['kaito-qfront-cool', 'kaito-sugiyama', '正直でいい。眩しさに酔う前に構造を見る癖をつけなさい。そうすれば、選ばれる側から選ぶ側へ移れる。', '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":["kaito-sugiyama"]}', null, 'kaito-qfront-cool-end'],
  ['kaito-qfront-cool-end', null, '画面が切り替わるたび、カイトの言葉だけが妙にはっきり残った。', '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":[]}', null, null],
  ['kaito-qfront-line', 'kaito-sugiyama', 'この画面を見て、綺麗だと思った？ それとも、誰が金を払っているか気になった？', '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":["kaito-sugiyama"]}', null, null],
  ['kaito-qfront-start', null, 'QFRONTの巨大な画面が、交差点の顔色を何度も塗り替える。眼鏡の男がその数字の裏側まで読んでいるように立っていた。', '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":[]}', null, 'kaito-qfront-line'],
  ['kaito-qfront-warm', 'kaito-sugiyama', '悪くない観察力だ。派手なものほど、誰に見られたいかを隠せない。君も今夜、その側に立ってみる？', '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":["kaito-sugiyama"]}', null, 'kaito-qfront-warm-end'],
  ['kaito-qfront-warm-end', null, 'カイトの視線を追うと、広告の光がただの背景ではなく、街の序列表に見えた。', '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":[]}', null, null],
  ['ren-shibuya-109-cool', 'ren-takahashi', '強がりなら嫌いじゃない。でも渋谷は、飾りだけの自信をすぐ見抜く。次に会う時まで、少し本物にしておいで。', '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":["ren-takahashi"]}', null, 'ren-shibuya-109-cool-end'],
  ['ren-shibuya-109-cool-end', null, 'レンは薄く笑って人波に戻った。残ったのは、試されたという熱だけだった。', '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":[]}', null, null],
  ['ren-shibuya-109-line', 'ren-takahashi', 'その顔、まだこの街に慣れていないね。でも逃げる顔でもない。どちらを見せたい？', '{"mode":"cg","cgAssetKey":"cg/ren-overlay-test.png","characterIds":["ren-takahashi"]}', null, null],
  ['ren-shibuya-109-start', null, '109の入口は、夜の光を磨いたみたいに白く浮いていた。黒いコートの男が、人の流れから一歩だけ外れてこちらを見ている。', '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":[]}', null, 'ren-shibuya-109-line'],
  ['ren-shibuya-109-warm', 'ren-takahashi', 'いい返事だ。ここで背伸びできる人間は、案外少ない。少し歩こう。君の緊張が、街に負ける前に。', '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":["ren-takahashi"]}', null, 'ren-shibuya-109-warm-end'],
  ['ren-shibuya-109-warm-end', null, 'レンの歩幅に合わせると、ショーウィンドウの光まで味方についたように見えた。', '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":[]}', null, null],
] as const;

const dialogueChoices = [
  ['daiki-magnet-choice-warm', 'daiki-magnet-line', '招待されるより、隣に立って入りたい。', 'daiki-magnet-warm', 1],
  ['daiki-magnet-choice-cool', 'daiki-magnet-line', 'まだ上に行く理由を選んでいるところだ。', 'daiki-magnet-cool', 2],
  ['haruto-hachiko-choice-warm', 'haruto-hachiko-line', '待つより、自分で向かうほうを選びたい。', 'haruto-hachiko-warm', 1],
  ['haruto-hachiko-choice-cool', 'haruto-hachiko-line', '今はまだ、帰り道を残しておきたい。', 'haruto-hachiko-cool', 2],
  ['kaito-qfront-choice-warm', 'kaito-qfront-line', '誰に見せるための光なのか、気になる。', 'kaito-qfront-warm', 1],
  ['kaito-qfront-choice-cool', 'kaito-qfront-line', '今はまだ綺麗だと思うだけで精一杯だ。', 'kaito-qfront-cool', 2],
  ['ren-shibuya-109-choice-warm', 'ren-shibuya-109-line', '慣れていない。でも、この街に似合うようになりたい。', 'ren-shibuya-109-warm', 1],
  ['ren-shibuya-109-choice-cool', 'ren-shibuya-109-line', '逃げるつもりはない。ただ、簡単に読まれたくない。', 'ren-shibuya-109-cool', 2],
] as const;

const events = [
  ['meet-daiki-at-magnet', 'ダイキがMAGNETの上階へ向かう夜の入口で誘う。', 'character_conversation', '{"value": "mandatory", "index": 30}', '[{"type": "location", "location_id": "magnet"}, {"type": "characterLocation", "character_id": "daiki-mori", "location_id": "magnet"}]', 'daiki-magnet-start'],
  ['meet-haruto-at-hachiko-station', 'ハルトがハチ公前で主人公の行き先を問う。', 'character_conversation', '{"value": "mandatory", "index": 40}', '[{"type": "location", "location_id": "hachiko-station"}, {"type": "characterLocation", "character_id": "haruto-nakamura", "location_id": "hachiko-station"}]', 'haruto-hachiko-start'],
  ['meet-kaito-at-qfront', 'カイトがQFRONTの画面の前で街の見方を試す。', 'character_conversation', '{"value": "mandatory", "index": 20}', '[{"type": "location", "location_id": "qfront"}, {"type": "characterLocation", "character_id": "kaito-sugiyama", "location_id": "qfront"}]', 'kaito-qfront-start'],
  ['meet-ren-at-shibuya-109', 'レンが渋谷109の入口で主人公の背伸びを見抜く。', 'character_conversation', '{"value": "mandatory", "index": 10}', '[{"type": "location", "location_id": "shibuya-109"}, {"type": "characterLocation", "character_id": "ren-takahashi", "location_id": "shibuya-109"}]', 'ren-shibuya-109-start'],
] as const;

async function main() {
  const existingCounts = await getExistingCounts();
  const existingRows = getTotalRows(existingCounts);
  if (existingRows > 0) {
    assertAlreadySeeded(existingCounts);
    console.log('Production seed skipped: database already contains the expected MVP rows.');
    return;
  }

  await prisma.$transaction(async (tx) => {
    await tx.character.createMany({ data: characters });
    await tx.location.createMany({
      data: locations.map(([id, name, appearance_description, x, y, background_asset_key, area_id, area_map_id, building_id]) => ({
        id,
        name,
        appearance_description,
        x,
        y,
        level: 1,
        accessible_start: 0,
        accessible_end: 1440,
        background_asset_key,
        area_id,
        area_map_id,
        building_id,
        map_kind: 'building-shape',
      })),
    });
    await tx.characterState.createMany({
      data: characterStates.map(([id, character_id, location_id, activity]) => ({
        id,
        character_id,
        location_id,
        activity,
        game_time_detail: '2040-08-05 19:30',
      })),
    });
    await tx.scheduleBlock.createMany({
      data: scheduleBlocks.map(([id, character_id, location_id, activity, start_time, duration]) => ({
        id,
        character_id,
        location_id,
        activity,
        start_time,
        duration,
      })),
    });
    await tx.memory.createMany({
      data: memories.map(([id, character_id, summary]) => ({
        id,
        character_id,
        summary,
        game_date: '2040-08-05',
      })),
    });

    await tx.dialogueNode.createMany({
      data: dialogueNodes.map(([id, speaker, text, scene, voice_asset_key]) => ({
        id,
        speaker,
        text,
        scene,
        voice_asset_key,
        next_dialogue_id: null,
      })),
    });

    for (const [id, _speaker, _text, _scene, _voice_asset_key, next_dialogue_id] of dialogueNodes) {
      if (!next_dialogue_id) continue;
      await tx.dialogueNode.update({
        where: { id },
        data: { next_dialogue_id },
      });
    }

    await tx.dialogueChoice.createMany({
      data: dialogueChoices.map(([id, dialogue_node_id, text, next_dialogue_id, sort_order]) => ({
        id,
        dialogue_node_id,
        text,
        next_dialogue_id,
        sort_order,
      })),
    });
    await tx.event.createMany({
      data: events.map(([id, description, type, priority, conditions, dialogue_id]) => ({
        id,
        description,
        type,
        priority,
        conditions,
        dialogue_id,
      })),
    });
    await tx.gameRuntimeState.create({
      data: {
        id: 'default',
        current_location_id: 'shibuya-109',
        current_dialogue_id: 'ren-shibuya-109-start',
        game_time_detail: '2040-08-05 19:30',
      },
    });
  });

  console.log('Production seed complete.');
}

interface ExistingCounts {
  characters: number;
  locations: number;
  characterStates: number;
  scheduleBlocks: number;
  memories: number;
  dialogueNodes: number;
  dialogueChoices: number;
  events: number;
  runtimeStates: number;
}

async function getExistingCounts(): Promise<ExistingCounts> {
  const [
    charactersCount,
    locationsCount,
    characterStatesCount,
    scheduleBlocksCount,
    memoriesCount,
    dialogueNodesCount,
    dialogueChoicesCount,
    eventsCount,
    runtimeStatesCount,
  ] = await Promise.all([
    prisma.character.count(),
    prisma.location.count(),
    prisma.characterState.count(),
    prisma.scheduleBlock.count(),
    prisma.memory.count(),
    prisma.dialogueNode.count(),
    prisma.dialogueChoice.count(),
    prisma.event.count(),
    prisma.gameRuntimeState.count(),
  ]);

  return {
    characters: charactersCount,
    locations: locationsCount,
    characterStates: characterStatesCount,
    scheduleBlocks: scheduleBlocksCount,
    memories: memoriesCount,
    dialogueNodes: dialogueNodesCount,
    dialogueChoices: dialogueChoicesCount,
    events: eventsCount,
    runtimeStates: runtimeStatesCount,
  };
}

function getTotalRows(counts: ExistingCounts): number {
  return Object.values(counts).reduce((total, count) => total + count, 0);
}

function assertAlreadySeeded(counts: ExistingCounts): void {
  const expectedCounts: ExistingCounts = {
    characters: 4,
    locations: 15,
    characterStates: 4,
    scheduleBlocks: 4,
    memories: 4,
    dialogueNodes: 24,
    dialogueChoices: 8,
    events: 4,
    runtimeStates: 1,
  };

  const mismatches = Object.entries(expectedCounts).filter(([key, expected]) => {
    const actual = counts[key as keyof ExistingCounts];
    return actual !== expected;
  });

  if (mismatches.length === 0) return;

  throw new Error(
    `Production seed refused: database has partial or unexpected seed rows ${JSON.stringify(counts)}`,
  );
}

main()
  .catch((error) => {
    console.error('Production seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
