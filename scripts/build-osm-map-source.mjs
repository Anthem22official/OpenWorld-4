import fs from 'node:fs'
import path from 'node:path'

const VIEWBOX_WIDTH = 1000
const VIEWBOX_HEIGHT = 680
const RENDER_TAG_KEYS = new Set(['amenity', 'building', 'name', 'name:en', 'shop', 'tourism'])

const args = readArgs(process.argv.slice(2))
const inputPath = requireArg(args, 'input')
const outputPath = requireArg(args, 'output')
const exportPrefix = requireArg(args, 'export-prefix')
const bounds = readBounds(requireArg(args, 'bounds'))
const metersPerUnit = args.has('meters-per-unit')
  ? readPositiveNumber(requireArg(args, 'meters-per-unit'), 'meters-per-unit')
  : null
const renderSize = getRenderSize(bounds, metersPerUnit)

const source = JSON.parse(fs.readFileSync(inputPath, 'utf8'))
const buildings = buildPolygons(source, bounds, renderSize)

if (buildings.length === 0) {
  throw new Error(`No building ways found in ${inputPath}`)
}

const output = escapeNonAscii([
  "import type { OsmRenderPolygon } from './map-osm-source'",
  '',
  `export const ${exportPrefix}OsmBounds = ${formatJson(bounds)} as const`,
  '',
  `export const ${exportPrefix}OsmCenter = ${formatJson({
    lat: Number(((bounds.south + bounds.north) / 2).toFixed(6)),
    lng: Number(((bounds.west + bounds.east) / 2).toFixed(6)),
  })} as const`,
  '',
  `export const ${exportPrefix}ViewBox = '0 0 ${renderSize.width} ${renderSize.height}'`,
  '',
  `export const ${exportPrefix}Buildings: OsmRenderPolygon[] = ${formatJson(buildings)}`,
  '',
].join('\n'))

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, output, 'utf8')
console.log(`Generated ${buildings.length} building polygons in ${outputPath}`)

function readArgs(rawArgs) {
  const parsed = new Map()

  for (let index = 0; index < rawArgs.length; index += 2) {
    const key = rawArgs[index]
    const value = rawArgs[index + 1]
    if (!key?.startsWith('--') || !value) {
      throw new Error(`Invalid argument list near ${key ?? '<end>'}`)
    }
    parsed.set(key.slice(2), value)
  }

  return parsed
}

function requireArg(parsedArgs, key) {
  const value = parsedArgs.get(key)
  if (!value) throw new Error(`Missing required --${key} argument`)
  return value
}

function readBounds(rawBounds) {
  const [south, west, north, east] = rawBounds.split(',').map((value) => Number(value.trim()))
  if (
    !Number.isFinite(south) ||
    !Number.isFinite(west) ||
    !Number.isFinite(north) ||
    !Number.isFinite(east) ||
    south >= north ||
    west >= east
  ) {
    throw new Error(`Invalid bounds: ${rawBounds}`)
  }

  return { south, west, north, east }
}

function readPositiveNumber(rawValue, label) {
  const value = Number(rawValue)
  if (!Number.isFinite(value) || value <= 0) throw new Error(`Invalid ${label}: ${rawValue}`)
  return value
}

function buildPolygons(sourceJson, bounds, renderSize) {
  if (!Array.isArray(sourceJson.elements)) {
    throw new Error('Overpass source must contain an elements array')
  }

  const nodesById = new Map()
  for (const element of sourceJson.elements) {
    if (element.type !== 'node') continue
    if (!Number.isFinite(element.id) || !Number.isFinite(element.lat) || !Number.isFinite(element.lon)) {
      throw new Error(`Invalid node element: ${JSON.stringify(element)}`)
    }
    nodesById.set(element.id, element)
  }

  return sourceJson.elements
    .filter((element) => element.type === 'way' && element.tags?.building)
    .map((way) => buildPolygon(way, nodesById, bounds, renderSize))
    .sort((left, right) => left.osmId - right.osmId)
}

function buildPolygon(way, nodesById, bounds, renderSize) {
  if (!Number.isFinite(way.id)) throw new Error(`Invalid way id: ${JSON.stringify(way)}`)
  if (!Array.isArray(way.nodes) || way.nodes.length < 4) {
    throw new Error(`Building way ${way.id} must include at least 4 node references`)
  }

  const projectedPoints = way.nodes.map((nodeId) => {
    const node = nodesById.get(nodeId)
    if (!node) throw new Error(`Building way ${way.id} references missing node ${nodeId}`)
    return projectNode(node, bounds, renderSize)
  })

  const labelPoints = removeRepeatedClosingPoint(projectedPoints)
  const labelX = Math.round(average(labelPoints.map((point) => point.x)))
  const labelY = Math.round(average(labelPoints.map((point) => point.y)))
  const tags = normalizeTags(way.tags)
  const name = tags['name:en'] || tags.name

  return {
    osmId: way.id,
    ...(name ? { name } : {}),
    kind: tags.building,
    points: projectedPoints.map((point) => `${point.x},${point.y}`).join(' '),
    labelX,
    labelY,
    tags,
  }
}

function projectNode(node, bounds, renderSize) {
  return {
    x: Math.round(((node.lon - bounds.west) / (bounds.east - bounds.west)) * renderSize.width),
    y: Math.round(((bounds.north - node.lat) / (bounds.north - bounds.south)) * renderSize.height),
  }
}

function getRenderSize(bounds, metersPerUnit) {
  const centerLatRadians = (((bounds.south + bounds.north) / 2) * Math.PI) / 180
  const latMeters = (bounds.north - bounds.south) * 111_320
  const lonMeters = (bounds.east - bounds.west) * 111_320 * Math.cos(centerLatRadians)
  if (latMeters <= 0 || lonMeters <= 0) throw new Error(`Invalid projected bounds: ${JSON.stringify(bounds)}`)

  if (metersPerUnit !== null) {
    return {
      width: Math.round(lonMeters / metersPerUnit),
      height: Math.round(latMeters / metersPerUnit),
    }
  }

  const ratio = lonMeters / latMeters
  if (ratio >= VIEWBOX_WIDTH / VIEWBOX_HEIGHT) {
    return {
      width: VIEWBOX_WIDTH,
      height: Math.round(VIEWBOX_WIDTH / ratio),
    }
  }

  return {
    width: Math.round(VIEWBOX_HEIGHT * ratio),
    height: VIEWBOX_HEIGHT,
  }
}

function removeRepeatedClosingPoint(points) {
  const first = points[0]
  const last = points[points.length - 1]
  if (first && last && first.x === last.x && first.y === last.y) {
    return points.slice(0, -1)
  }
  return points
}

function average(values) {
  if (values.length === 0) throw new Error('Cannot average empty value list')
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function normalizeTags(tags) {
  const normalized = {}
  for (const [key, value] of Object.entries(tags || {})) {
    if (typeof value === 'string' && RENDER_TAG_KEYS.has(key)) normalized[key] = value
  }
  return normalized
}

function formatJson(value) {
  return JSON.stringify(value, null, 2)
}

function escapeNonAscii(text) {
  let escaped = ''

  for (const character of text) {
    const codePoint = character.codePointAt(0)
    if (codePoint === undefined) throw new Error('Invalid character in generated source')

    if (codePoint < 128) {
      escaped += character
      continue
    }

    if (codePoint <= 0xffff) {
      escaped += `\\u${codePoint.toString(16).padStart(4, '0')}`
      continue
    }

    const shifted = codePoint - 0x10000
    const highSurrogate = 0xd800 + (shifted >> 10)
    const lowSurrogate = 0xdc00 + (shifted & 0x3ff)
    escaped += `\\u${highSurrogate.toString(16)}\\u${lowSurrogate.toString(16)}`
  }

  return escaped
}
