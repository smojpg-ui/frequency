"""WCAG contrast between two colors. Standard library only.

    python3 tools/contrast.py "#c9a84c" "#060809"
    -> 8.78:1  AA ok (normal text)
"""
import sys


def channel(c):
    c = c / 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(hex_color):
    h = hex_color.lstrip('#')
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)


def ratio(a, b):
    hi, lo = sorted((luminance(a), luminance(b)), reverse=True)
    return (hi + 0.05) / (lo + 0.05)


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    r = ratio(sys.argv[1], sys.argv[2])
    verdict = 'AA ok (normal text)' if r >= 4.5 else 'AA large text only (18px+, or 14px+ bold)' if r >= 3 else 'fails AA'
    print(f'{r:.2f}:1  {verdict}')
