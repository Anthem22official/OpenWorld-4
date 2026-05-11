from __future__ import annotations

from pathlib import Path

from PIL import Image


OUTPUT_SIZE = 512
ALPHA_THRESHOLD = 16
CHARACTERS_ROOT = Path('apps/gameplay/public/assets/database/characters')
SOURCE_RELATIVE_PATH = Path('full-body/full-body-transparent.png')
OUTPUT_RELATIVE_PATH = Path('icons/header.png')


def find_visible_bounds(image: Image.Image, image_path: Path) -> tuple[int, int, int, int]:
    if 'A' not in image.getbands():
        raise ValueError(f'Image must include an alpha channel: {image_path}')

    alpha = image.getchannel('A')
    visible_alpha = alpha.point(lambda value: 255 if value >= ALPHA_THRESHOLD else 0)
    bounds = visible_alpha.getbbox()

    if bounds is None:
        raise ValueError(f'No visible character pixels found: {image_path}')

    return bounds


def calculate_head_crop(
    image_size: tuple[int, int],
    visible_bounds: tuple[int, int, int, int],
) -> tuple[int, int, int, int]:
    image_width, image_height = image_size
    left, top, right, bottom = visible_bounds
    visible_width = right - left
    visible_height = bottom - top

    if visible_width <= 0 or visible_height <= 0:
        raise ValueError(f'Invalid visible bounds: {visible_bounds}')

    center_x = (left + right) / 2
    side = round(max(visible_width * 0.82, visible_height * 0.34))
    side = max(1, min(side, max(image_width, image_height)))

    crop_left = round(center_x - side / 2)
    crop_top = max(0, round(top - side * 0.04))

    return (crop_left, crop_top, crop_left + side, crop_top + side)


def crop_with_transparent_padding(
    image: Image.Image,
    crop_box: tuple[int, int, int, int],
) -> Image.Image:
    crop_left, crop_top, crop_right, crop_bottom = crop_box
    crop_width = crop_right - crop_left
    crop_height = crop_bottom - crop_top

    if crop_width != crop_height:
        raise ValueError(f'Head icon crop must be square, got {crop_width}x{crop_height}')

    canvas = Image.new('RGBA', (crop_width, crop_height), (0, 0, 0, 0))
    source_box = (
        max(0, crop_left),
        max(0, crop_top),
        min(image.width, crop_right),
        min(image.height, crop_bottom),
    )

    if source_box[0] >= source_box[2] or source_box[1] >= source_box[3]:
        raise ValueError(f'Crop is outside image bounds: {crop_box}')

    source_crop = image.crop(source_box)
    paste_position = (source_box[0] - crop_left, source_box[1] - crop_top)
    canvas.paste(source_crop, paste_position)
    return canvas


def generate_header_icon(character_dir: Path) -> Path:
    source_path = character_dir / SOURCE_RELATIVE_PATH
    output_path = character_dir / OUTPUT_RELATIVE_PATH

    if not source_path.exists():
        raise FileNotFoundError(f'Missing character full-body transparent PNG: {source_path}')

    with Image.open(source_path) as source_image:
        source_image.load()
        if 'A' not in source_image.getbands():
            raise ValueError(f'Image must include an alpha channel: {source_path}')

        rgba_image = source_image.convert('RGBA')

    bounds = find_visible_bounds(rgba_image, source_path)
    crop_box = calculate_head_crop(rgba_image.size, bounds)
    cropped_image = crop_with_transparent_padding(rgba_image, crop_box)
    header_icon = cropped_image.resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.Resampling.LANCZOS)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    header_icon.save(output_path, format='PNG')
    return output_path


def list_character_dirs(characters_root: Path) -> list[Path]:
    if not characters_root.exists():
        raise FileNotFoundError(f'Character asset root does not exist: {characters_root}')

    character_dirs = sorted(path for path in characters_root.iterdir() if path.is_dir())
    if not character_dirs:
        raise ValueError(f'No character folders found under: {characters_root}')

    return character_dirs


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    characters_root = repo_root / CHARACTERS_ROOT

    for character_dir in list_character_dirs(characters_root):
        output_path = generate_header_icon(character_dir)
        storage_key = output_path.relative_to(characters_root.parent).as_posix()
        print(f'WROTE {storage_key}')

    return 0


if __name__ == '__main__':
    raise SystemExit(main())
