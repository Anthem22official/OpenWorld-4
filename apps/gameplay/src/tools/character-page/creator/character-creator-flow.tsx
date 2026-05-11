import type { CharacterCreatorStep } from './character-creator-types'

interface CharacterCreatorFlowProps {
  steps: CharacterCreatorStep[]
}

export default function CharacterCreatorFlow({ steps }: CharacterCreatorFlowProps) {
  return (
    <ol className="character-creator-flow" aria-label="Character creator process">
      {steps.map((step) => (
        <li className="character-creator-flow__item" data-state={step.state} key={step.id}>
          <span className="character-creator-flow__circle">{step.number}</span>
          <span className="character-creator-flow__label">{step.label}</span>
        </li>
      ))}
    </ol>
  )
}
