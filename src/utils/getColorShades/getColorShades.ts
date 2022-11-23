import { ColorPalette } from '@/@types/typings';
import { generatePalette } from '@/utils/colorHelpers/colorHelpers';

/**
 * Function to get the shades of a color
 * @param palette The palette to search through
 * @param colorId The id of the color to get the shades of
 * @returns Array of shades for the given color
 */
export const getColorShades = (
  palette: ColorPalette,
  colorId: string,
) => {
  const paletteWithShades = generatePalette(palette);

  const colorShades = Object.values(paletteWithShades.colors).map((shades) => {
    return shades.find((shade) => shade.id === colorId)!;
  });

  return colorShades.slice(1); // remove the first shade (50)
};
