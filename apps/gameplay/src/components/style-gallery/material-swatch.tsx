import { MaterialSwatchItem } from './style-gallery-data'

interface MaterialSwatchProps {
  item: MaterialSwatchItem
}

export default function MaterialSwatch({ item }: MaterialSwatchProps) {
  return (
    <article className="style-swatch black-coated-paper">
      <div className="style-swatch__chip" style={{ background: item.surface }} />
      <div>
        <h3>{item.name}</h3>
        <p className="style-swatch__value">{item.value}</p>
        <p>{item.note}</p>
      </div>
    </article>
  )
}
