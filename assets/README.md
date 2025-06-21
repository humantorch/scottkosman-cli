# Assets Directory

This directory contains images and other assets used by the Scott Kosman CLI.

## Image Requirements

- **Format**: PNG or JPG recommended
- **Size**: Keep images reasonably sized (under 1MB) for fast loading
- **Aspect Ratio**: Consider terminal display constraints

## Current Images

- `scott.jpg` - Main CLI logo/image (30% width display)

## Adding New Images

1. Place your image file in this directory
2. Update the path in `src/utils/welcome.ts` if using a different filename
3. The CLI will automatically display the image if it exists

## Notes

- Images are displayed using `terminal-image` package
- If an image fails to load, the CLI continues without it
- Terminal compatibility may vary by platform 