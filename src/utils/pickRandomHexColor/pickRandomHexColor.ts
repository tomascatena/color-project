import { ColorDefinition } from '@/typings/typings';

/**
 * Function to generate a random hex color
 * @returns A random hex color
 */
export const generateRandomHexColor = () => {
  return ('#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')).toLowerCase();
};

/**
 * Function to check if a random hex color is in a palette
 * @param randomHexColor The random hex color to check
 * @param colors The colors to check against
 * @returns Whether the random hex color is in the colors array
 */
export const isRandomColorInNewPalette = (
  randomHexColor: string,
  colors: ColorDefinition[]
) => colors.some(({ color }) => color.toLowerCase() === randomHexColor.toLowerCase());

/**
 * Function to pick a random hex color
 * @param colors The colors to check against
 * @param setNewColorName The function to set the new color name
 * @param setCurrentColor The function to set the current color
 */
export const pickRandomHexColor = (
  colors: ColorDefinition[],
  setNewColorName: (newColorName: string) => void,
  setCurrentColor: (currentColor: string) => void,
) => {
  let randomHexColor = generateRandomHexColor();

  while (isRandomColorInNewPalette(randomHexColor, colors)) {
    randomHexColor = generateRandomHexColor();
  }

  setCurrentColor(randomHexColor);

  const url = `https://www.thecolorapi.com/id?hex=${randomHexColor.replace('#', '')}`;

  fetch(url).then((response) => {
    response.json().then(({ name }) => {
      setNewColorName(name.value);
    });
  }).catch((error) => {
    console.error(error);
  });
};
