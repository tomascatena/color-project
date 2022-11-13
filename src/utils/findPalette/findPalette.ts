import { ColorPalette } from '@/typings/typings';

export const findPalette = (
  palettes: ColorPalette[],
  paletteId: string
) => {
  return palettes.find((palette) => palette.id === paletteId);
};
