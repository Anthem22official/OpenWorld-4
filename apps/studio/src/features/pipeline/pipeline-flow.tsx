import type { PipelineStep } from './pipeline-types'

interface PipelineFlowProps {
  steps: PipelineStep[]
}

export default function PipelineFlow({ steps }: PipelineFlowProps) {
  return (
    <ol className="pipeline-flow" aria-label="Studio creation pipeline">
      {steps.map((step) => (
        <li className="pipeline-flow__item" data-state={step.state} key={step.id}>
          <span className="pipeline-flow__circle">{step.number}</span>
          <span className="pipeline-flow__label">{step.label}</span>
        </li>
      ))}
    </ol>
  )
}
