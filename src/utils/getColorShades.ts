import { ColorPalette } from '@/typings/typings';
import { generatePalette } from '@/utils/colorHelpers';

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
