import { GameState, DialogueNode } from '../types/game'
import { mockLocations } from './locations'

const dialogueNodes: Record<string, DialogueNode> = {
  start: {
    id: 'start',
    speaker: undefined,
    text: '渋谷の夜は鋭く澄んでいた。スクランブル交差点の信号が変わり、群衆の上で巨大なスクリーンが瞬く。109の入口のそばに、桐谷アレックスが静かに立っていた。',
    nextDialogueId: 'line-2',
  },
  'line-2': {
    id: 'line-2',
    speaker: 'Alex',
    text: '静かに話す場所としては、東京でいちばん騒がしい場所を選んだね。',
    voiceAssetKey: 'characters/alex-kiriya/voice/line-2.wav',
    choices: [
      {
        id: 'choice-yes',
        text: 'じゃあ、少し静かな場所まで一緒に歩こう。',
        nextDialogueId: 'response-warm-1',
      },
      {
        id: 'choice-no',
        text: 'あなたがこの騒がしさについてこられるか、見たかった。',
        nextDialogueId: 'response-cold-1',
      },
    ],
  },
  'response-warm-1': {
    id: 'response-warm-1',
    speaker: undefined,
    text: 'アレックスは駅前の光を一度見上げ、それからこちらに視線を戻した。街のざわめきが、返事のすべてを誘いのように変えていく。',
    nextDialogueId: 'end-good',
  },
  'response-cold-1': {
    id: 'response-cold-1',
    speaker: 'Alex',
    text: '気をつけて。渋谷は、自信のある顔から先に飲み込んでいく街だ。',
    voiceAssetKey: 'characters/alex-kiriya/voice/response-cold-1.wav',
    nextDialogueId: 'end-missed',
  },
  'end-good': {
    id: 'end-good',
    speaker: undefined,
    text: '僕たちは人波に紛れて交差点を渡った。近すぎる距離も、言葉にしない熱も、街の音が全部隠してくれた。',
  },
  'end-missed': {
    id: 'end-missed',
    speaker: undefined,
    text: 'アレックスはハチ公口のほうへ消えていった。残された距離を、また交差点の光と人波が埋めていく。',
  },
}

export const mockGameState: GameState = {
  currentDialogueId: 'start',
  currentLocation: 'Shibuya 109',
  mapState: {
    locations: mockLocations,
    currentLocationId: 'shibuya-109',
    visitedLocationIds: ['shibuya-109'],
  },
}

export { dialogueNodes }
