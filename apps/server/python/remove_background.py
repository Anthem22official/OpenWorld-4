from __future__ import annotations

import argparse
import io
import sys
import traceback
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description='Remove image backgrounds locally.')
    parser.add_argument('--input', required=True, help='Path to the source image.')
    parser.add_argument('--output', required=True, help='Path to the output PNG.')
    parser.add_argument(
        '--cleanup',
        action='store_true',
        help='Enable conservative alpha cleanup after rembg finishes.',
    )
    return parser.parse_args()


def load_image_bytes(input_path: Path) -> bytes:
    if not input_path.exists():
        raise FileNotFoundError(f'Input image does not exist: {input_path}')

    data = input_path.read_bytes()

    if not data:
        raise ValueError('Input image is empty')

    with io.BytesIO(data) as buffer:
        from PIL import Image

        with Image.open(buffer) as image:
            image.load()

    return data


def remove_background(image_bytes: bytes, cleanup: bool) -> bytes:
    from rembg import remove

    output_bytes = remove(image_bytes)

    if cleanup:
        output_bytes = cleanup_alpha(output_bytes)

    validate_png(output_bytes)
    return output_bytes


def cleanup_alpha(png_bytes: bytes) -> bytes:
    from PIL import Image
    import cv2
    import numpy as np

    with io.BytesIO(png_bytes) as buffer:
        with Image.open(buffer) as image:
            rgba = image.convert('RGBA')

    pixels = np.array(rgba)
    alpha = pixels[:, :, 3]
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    alpha = cv2.morphologyEx(alpha, cv2.MORPH_CLOSE, kernel, iterations=1)
    alpha = cv2.GaussianBlur(alpha, (3, 3), 0)
    pixels[:, :, 3] = alpha

    result = Image.fromarray(pixels, mode='RGBA')
    with io.BytesIO() as buffer:
        result.save(buffer, format='PNG')
        return buffer.getvalue()


def validate_png(png_bytes: bytes) -> None:
    from PIL import Image

    with io.BytesIO(png_bytes) as buffer:
        with Image.open(buffer) as image:
            image.load()
            if image.mode != 'RGBA':
                raise ValueError('Output image must include an alpha channel')


def write_output(output_path: Path, png_bytes: bytes) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(png_bytes)


def main() -> int:
    args = parse_args()
    input_path = Path(args.input)
    output_path = Path(args.output)

    try:
        image_bytes = load_image_bytes(input_path)
        png_bytes = remove_background(image_bytes, args.cleanup)
        write_output(output_path, png_bytes)
        return 0
    except Exception as error:
        print(f'BACKGROUND_REMOVAL_FAILED: {error}', file=sys.stderr)
        traceback.print_exc(file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
