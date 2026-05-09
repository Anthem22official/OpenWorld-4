interface CharacterAreaProps {
  speaker?: string
}

export default function CharacterArea({ speaker }: CharacterAreaProps) {
  return (
    <div className="dialogue-character-area" aria-label={speaker ? `${speaker} character area` : 'Scene area'}>
      <div className="dialogue-scene-light" aria-hidden="true" />
      <div className="dialogue-character-sprite" aria-hidden="true">
        <img
          className="dialogue-character-sprite__image"
          src="/assets/alex/alex-placeholder-darkgrey-cutout.png"
          alt=""
        />
      </div>
    </div>
  )
}
