import { ColorPalette } from '@/typings/typings';

/**
 * Function to find a palette by id
 * @param palettes The palettes to search through
 * @param paletteId The id of the palette to find
 * @returns The palette with the matching id
 */
export const findPalette = (
  palettes: ColorPalette[],
  paletteId: string
) => {
  return palettes.find((palette) => palette.id === paletteId);
};
