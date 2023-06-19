import { ColorDefinition } from '@/@types/typings';

/**
 * Function to generate a random hex color
 * @returns A random hex color
 */
export const generateRandomHexColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, `0`).toLowerCase()}`;
};

/**
 * Function to check if a random hex color is within a colors array
 * @param randomHexColor The random hex color to check
 * @param colors Array of colors to check against
 * @returns Whether the random hex color is in the colors array
 */
export const isRandomColorInNewPalette = (randomHexColor: string, colors: ColorDefinition[]): boolean => {
  const lowerCaseRandomHexColor = randomHexColor.toLowerCase();

  return colors.some(({ color }) => color.toLowerCase() === lowerCaseRandomHexColor);
};

/**
 * Function to pick a random hex color that is not in a palette
 * @param colors The colors to check against
 * @returns A promise that resolves to an object containing random hex color and its name
 */
export const pickRandomHexColor = async (colors: ColorDefinition[]): Promise<{ colorName: string, hexColor: string }> => {
  let randomHexColor = generateRandomHexColor();

  while (isRandomColorInNewPalette(randomHexColor, colors)) {
    randomHexColor = generateRandomHexColor();
  }

  const url = `https://www.thecolorapi.com/id?hex=${randomHexColor.replace(`#`, ``)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.name?.value) {
      return {
        colorName: data.name.value,
        hexColor: randomHexColor,
      };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    colorName: ``,
    hexColor: ``,
  };
};
