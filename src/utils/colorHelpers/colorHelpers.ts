import {
  ColorDefinition,
  ColorPalette,
  ColorPaletteWithShades
} from "@/@types/typings";
import { LEVELS } from "@/constants/colors";
import chroma from "chroma-js";

/**
 * Function to generate a range of colors
 * @param hexColor The color to generate the range from
 * @param end The end of the range
 * @returns An array of colors
 */
const getRange = (
  hexColor: string,
  end: string = `#fff`
) => {
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    end
  ];
};

/**
 * Function to generate a scale of colors
 * @param hexColor - The color to generate the shades from
 * @param numberOfColors - The number of shades to generate
 * @returns - An array of shades
 */
const generateScale = (
  hexColor: string,
  numberOfColors: number
) => chroma
  .scale(getRange(hexColor))
  .mode(`lab`)
  .colors(numberOfColors);

/**
 * Function to generate a palette of colors
 * @param starterPalette The palette to generate the shades from
 * @returns A palette with shades
 */
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
        id: name.toLowerCase().replace(/ /g, `-`),
        level: LEVELS[index],
        name: `${name} ${LEVELS[index]}`,
        rgb: chroma(scale[index]).css(),
        rgba: chroma(scale[index]).css().replace(`rgb`, `rgba`).replace(`)`, `,1.0)`),
      });
    }
  });

  return newPalette;
};
