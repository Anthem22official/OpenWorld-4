# Map Source Workflow

Use this workflow when adding a new local SVG map from OpenStreetMap / Overpass data.

## 1. Name The Map

Choose stable kebab-case IDs before fetching data.

- Area ID: broad district, such as `ebisu`.
- Area map ID: specific playable map, such as `ebisu-station-garden-place`.
- Generated export prefix: camelCase version of the area map, such as `ebisuStationGardenPlace`.

Add selector metadata in `apps/gameplay/src/scenes/map/data/map-area-data.ts`:

- `mapAreas`: area name, description, and default area map.
- `mapAreaMaps`: map name, description, bounds, generated buildings, and labels.

## 2. Pick The Bounding Box

Use a small bbox around the playable map. Smaller is better: it keeps the TypeScript source light and makes labels easier to place.

The bbox format is:

```text
south,west,north,east
```

Ebisu v1 uses:

```text
35.6408,139.7074,35.6500,139.7168
```

This spans Ebisu Station, LIQUIDROOM, and Yebisu Garden Place.

## 3. Save The Overpass Query

Keep the exact query under `docs/map-sources/`.

For a building-only base map:

```text
[out:json][timeout:25];
(
  way["building"](south,west,north,east);
);
out body;
>;
out skel qt;
```

Do not hand-edit the cached JSON after fetching it.

## 4. Fetch And Cache The Response

Fetch the Overpass response as bytes so UTF-8 names stay intact:

```powershell
$query = Get-Content docs\map-sources\AREA-MAP-overpass-query.txt -Raw
$url = 'https://overpass-api.de/api/interpreter?data=' + [System.Uri]::EscapeDataString($query)
Add-Type -AssemblyName System.Net.Http
$client = [System.Net.Http.HttpClient]::new()
$client.DefaultRequestHeaders.UserAgent.ParseAdd('OpenWorld-MapSourceBuilder/1.0')
$bytes = $client.GetByteArrayAsync($url).GetAwaiter().GetResult()
[System.IO.File]::WriteAllBytes((Resolve-Path docs\map-sources).Path + '\AREA-MAP-overpass.json', $bytes)
```

If the fetch fails, stop and fix the query/network issue. Do not substitute mock geometry for a real OSM map.

## 5. Generate The TypeScript Source

Run the generator from the repo root:

```powershell
node scripts\build-osm-map-source.mjs --input docs\map-sources\AREA-MAP-overpass.json --output apps\gameplay\src\scenes\map\data\AREA-MAP-osm-source.ts --export-prefix areaMapExportPrefix --bounds south,west,north,east --meters-per-unit 0.409264705882
```

Ebisu command:

```powershell
node scripts\build-osm-map-source.mjs --input docs\map-sources\ebisu-station-overpass.json --output apps\gameplay\src\scenes\map\data\ebisu-station-osm-source.ts --export-prefix ebisuStationGardenPlace --bounds 35.6408,139.7074,35.6500,139.7168 --meters-per-unit 0.409264705882
```

The generator fails directly when the cache is invalid, a building references a missing node, or zero building polygons are produced. It also projects longitude using the bbox center latitude and exports a meter-correct `ViewBox`; use that generated viewBox in `map-area-data.ts` instead of forcing every map into `1000 x 680`. Use `--meters-per-unit 0.409264705882` when a new map should match Shibuya's current vertical map scale.

## 6. Attach Gameplay Locations Later

For a display-only map, put generated buildings in `backgroundBuildings` and leave `buildings` empty.

To make buildings clickable later:

1. Add `Location` rows in the database with `area_id`, `area_map_id`, `building_id`, and `map_kind = "building-shape"`.
2. Add an interactive source list that maps OSM way IDs to `locationId`, `buildingId`, and label text.
3. Build `MapBuilding[]` entries from the generated source polygons, matching the Shibuya Crossing pattern.
4. Add events/dialogue separately only when the new locations become playable.
