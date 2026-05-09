export interface MaterialSwatchItem {
  name: string
  value: string
  note: string
  surface: string
}

export interface GalleryMetric {
  label: string
  value: string
  tone: 'paper' | 'glass' | 'foil'
}

export const materialSwatches: MaterialSwatchItem[] = [
  {
    name: 'Paper Black',
    value: '#070708',
    note: 'Foundation material for large surfaces.',
    surface: 'linear-gradient(145deg, #151518 0%, #070708 52%, #101012 100%)',
  },
  {
    name: 'Raised Paper',
    value: '#1C1C20',
    note: 'Panel lift, tabs, and tactile card depth.',
    surface: 'linear-gradient(145deg, #25252B 0%, #101012 100%)',
  },
  {
    name: 'Silver Foil',
    value: '#D8DCE2',
    note: 'Default metallic text, icons, and quiet dividers.',
    surface: 'linear-gradient(135deg, #FFFFFF 0%, #AEB4BE 44%, #747B86 100%)',
  },
  {
    name: 'Laser Foil',
    value: 'Cyan / Pink / Violet',
    note: 'Selected and emotionally important emphasis only.',
    surface: 'linear-gradient(120deg, #5EEAF2 0%, #A78BFA 42%, #F5A3FF 70%, #C8A96A 100%)',
  },
]

export const materialMetrics: GalleryMetric[] = [
  { label: 'Black coated paper', value: '65%', tone: 'paper' },
  { label: 'Liquid Glass', value: '25%', tone: 'glass' },
  { label: 'Laser foil', value: '10%', tone: 'foil' },
]

export const demoControls = [
  'Primary action',
  'Secondary action',
  'Disabled state',
  'Icon control',
]

export const foilChoices = [
  {
    index: '01',
    title: 'Quiet surface',
    description: 'Default choice: black coated paper, silver type, no glow.',
    active: false,
  },
  {
    index: '02',
    title: 'Selected signal',
    description: 'Active choice: liquid glass lift with a contained laser foil edge.',
    active: true,
  },
  {
    index: '03',
    title: 'Rare emphasis',
    description: 'Special state: stronger foil, still readable and bounded.',
    active: false,
  },
]
