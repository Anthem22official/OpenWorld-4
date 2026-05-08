export const osmSourceNotes = {
  provider: 'OpenStreetMap via Overpass API',
  endpoint: 'https://overpass-api.de/api/interpreter',
  cachedResponse: 'docs/map-sources/shibuya-crossing-overpass.json',
  cachedQuery: 'docs/map-sources/shibuya-crossing-overpass-query.txt',
  license: 'ODbL',
  attribution: 'OpenStreetMap contributors',
  projection: 'linear bbox projection into 1000x680 SVG viewBox',
  formula: 'x=((lon-west)/(east-west))*1000; y=((north-lat)/(north-south))*680',
} as const
