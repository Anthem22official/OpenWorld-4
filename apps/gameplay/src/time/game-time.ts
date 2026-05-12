const TRAVEL_MINUTES_BETWEEN_LOCATIONS = 15
const GAME_TIME_PATTERN = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/
const MINUTES_PER_DAY = 24 * 60

export function calculateLocationTravelMinutes(
  fromLocationId: string,
  toLocationId: string,
): number {
  if (fromLocationId.trim().length === 0) throw new Error('fromLocationId is required')
  if (toLocationId.trim().length === 0) throw new Error('toLocationId is required')

  return fromLocationId === toLocationId ? 0 : TRAVEL_MINUTES_BETWEEN_LOCATIONS
}

export function advanceGameTimeDetail(gameTimeDetail: string, minutes: number): string {
  if (!Number.isInteger(minutes) || minutes < 0) {
    throw new Error(`Travel minutes must be a non-negative integer: ${minutes}`)
  }

  const parsedTime = parseGameTimeDetail(gameTimeDetail)
  const totalMinutes = parsedTime.hours * 60 + parsedTime.minutes + minutes
  const dayOffset = Math.floor(totalMinutes / MINUTES_PER_DAY)
  const normalizedMinutes = totalMinutes % MINUTES_PER_DAY
  const nextDate = addDays(parsedTime, dayOffset)

  return `${formatDatePart(nextDate.year, nextDate.month, nextDate.day)} ${formatTimePart(normalizedMinutes)}`
}

function parseGameTimeDetail(gameTimeDetail: string): {
  year: number
  month: number
  day: number
  hours: number
  minutes: number
} {
  const match = GAME_TIME_PATTERN.exec(gameTimeDetail)
  if (!match) throw new Error(`Invalid gameTimeDetail: ${gameTimeDetail}`)

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const hours = Number(match[4])
  const minutes = Number(match[5])

  if (!isValidDatePart(year, month, day) || hours > 23 || minutes > 59) {
    throw new Error(`Invalid gameTimeDetail: ${gameTimeDetail}`)
  }

  return { year, month, day, hours, minutes }
}

function addDays(
  datePart: { year: number; month: number; day: number },
  days: number,
): { year: number; month: number; day: number } {
  if (days === 0) return datePart

  const date = new Date(Date.UTC(datePart.year, datePart.month - 1, datePart.day + days))
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  }
}

function isValidDatePart(year: number, month: number, day: number): boolean {
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return false

  const date = new Date(Date.UTC(year, month - 1, day))
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  )
}

function formatDatePart(year: number, month: number, day: number): string {
  return `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
}

function formatTimePart(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}
