import {
  ColorDefinition,
  ColorPalette,
  ColorPaletteWithShades
} from '@/typings/typings';
import { LEVELS } from '@/constants/colors';
import chroma from 'chroma-js';

const getRange = (
  hexColor: string,
  end: string = '#fff'
) => {
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    end
  ];
};

const generateScale = (
  hexColor: string,
  numberOfColors: number
) => chroma
  .scale(getRange(hexColor))
  .mode('lab')
  .colors(numberOfColors);

export const generatePalette = (starterPalette: ColorPalette) => {
  const newPalette: ColorPaletteWithShades = {
    colors: {},
    emoji: starterPalette.emoji,
    id: starterPalette.id,
    paletteName: starterPalette.paletteName,
  };

  for (const level of LEVELS) {
    newPalette.colors[level] = [];
  }

  starterPalette.colors.forEach(({ name, color }: ColorDefinition) => {
    const scale = generateScale(color, 10).reverse();

    for (const index in scale) {
      newPalette.colors[LEVELS[index]].push({
        hex: scale[index],
        id: name.toLowerCase().replace(/ /g, '-'),
        level: LEVELS[index],
        name: `${name} ${LEVELS[index]}`,
        rgb: chroma(scale[index]).css(),
        rgba: chroma(scale[index]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
      });
    }
  });

  return newPalette;
};
