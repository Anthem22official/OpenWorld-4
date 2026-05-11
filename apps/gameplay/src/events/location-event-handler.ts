import type { BootstrapEvent } from '../api/game-bootstrap-client'
import type { CharacterState, DialogueNode } from '../types/game'

export interface LocationEventMatch {
  id: string
  description: string
  dialogueId: string
  priority: BootstrapEvent['priority']
}

export interface LocationEventResult {
  mandatoryEvent?: LocationEventMatch
  optionalEvents: LocationEventMatch[]
}

interface ResolveLocationEventsOptions {
  events: BootstrapEvent[]
  dialogueNodes: Record<string, DialogueNode>
  characterStates: CharacterState[]
  locationId: string
  gameTimeDetail: string
}

type EventCondition = BootstrapEvent['conditions'][number]

export function resolveLocationEvents({
  events,
  dialogueNodes,
  characterStates,
  locationId,
  gameTimeDetail,
}: ResolveLocationEventsOptions): LocationEventResult {
  const matchingEvents = events
    .filter((event) => event.type === 'character_conversation')
    .map((event) => mapConversationEvent(event, dialogueNodes))
    .filter((event) =>
      event.conditions.every((condition) =>
        conditionPasses(condition, locationId, characterStates, gameTimeDetail),
      ),
    )
    .sort(compareEventPriority)

  return {
    mandatoryEvent: matchingEvents.find((event) => event.priority.value === 'mandatory'),
    optionalEvents: matchingEvents.filter((event) => event.priority.value === 'optional'),
  }
}

function mapConversationEvent(
  event: BootstrapEvent,
  dialogueNodes: Record<string, DialogueNode>,
): LocationEventMatch & { conditions: BootstrapEvent['conditions'] } {
  if (!event.dialogue_id) {
    throw new Error(`Event ${event.id} is missing required dialogue_id`)
  }

  if (!dialogueNodes[event.dialogue_id]) {
    throw new Error(`Event ${event.id} references missing dialogue node: ${event.dialogue_id}`)
  }

  return {
    id: event.id,
    description: event.description,
    dialogueId: event.dialogue_id,
    priority: event.priority,
    conditions: event.conditions,
  }
}

function conditionPasses(
  condition: EventCondition,
  currentLocationId: string,
  characterStates: CharacterState[],
  gameTimeDetail: string,
): boolean {
  if (condition.type === 'location') {
    return condition.location_id === currentLocationId
  }

  if (condition.type === 'characterLocation') {
    return characterStates.some(
      (state) =>
        state.character_id === condition.character_id &&
        state.location_id === condition.location_id,
    )
  }

  const currentMinutes = parseGameTimeMinutes(gameTimeDetail)
  const endTime = condition.start_time + condition.duration
  if (endTime > 1440) {
    throw new Error(`timeBlock condition exceeds one day: ${condition.start_time}+${condition.duration}`)
  }

  return currentMinutes >= condition.start_time && currentMinutes < endTime
}

function compareEventPriority(left: LocationEventMatch, right: LocationEventMatch): number {
  const leftRank = priorityRank(left.priority)
  const rightRank = priorityRank(right.priority)

  if (leftRank !== rightRank) return leftRank - rightRank
  return left.priority.index - right.priority.index
}

function priorityRank(priority: BootstrapEvent['priority']): number {
  return priority.value === 'mandatory' ? 0 : 1
}

function parseGameTimeMinutes(gameTimeDetail: string): number {
  const match = gameTimeDetail.match(/\b(\d{2}):(\d{2})\b/)
  if (!match) throw new Error(`Invalid game_time_detail: ${gameTimeDetail}`)

  const hours = Number(match[1])
  const minutes = Number(match[2])
  if (
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    throw new Error(`Invalid game_time_detail: ${gameTimeDetail}`)
  }

  return hours * 60 + minutes
}
