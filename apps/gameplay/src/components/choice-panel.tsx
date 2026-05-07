import { Choice } from '../types/game'

interface ChoicePanelProps {
  choices: Choice[]
  onChoose: (choiceId: string) => void
}

export default function ChoicePanel({ choices, onChoose }: ChoicePanelProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => onChoose(choice.id)}
          style={{
            padding: '14px 18px',
            border: '2px solid var(--color-lavender)',
            borderRadius: '4px',
            backgroundColor: 'rgba(159, 122, 234, 0.1)',
            color: 'var(--color-lavender)',
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 200ms ease-in-out',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget
            target.style.backgroundColor = 'var(--color-lavender)'
            target.style.color = 'white'
            target.style.boxShadow = '0 0 16px rgba(159, 122, 234, 0.6)'
            target.style.transform = 'translateX(4px)'
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget
            target.style.backgroundColor = 'rgba(159, 122, 234, 0.1)'
            target.style.color = 'var(--color-lavender)'
            target.style.boxShadow = 'none'
            target.style.transform = 'translateX(0)'
          }}
        >
          ▹ {choice.text}
        </button>
      ))}
    </div>
  )
}
