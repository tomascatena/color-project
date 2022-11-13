import { ColorDefinition } from '@/typings/typings';

export const generateRandomHexColor = () => {
  return ('#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')).toLowerCase();
};

export const isRandomColorInNewPalette = (
  randomHexColor: string,
  colors: ColorDefinition[]
) => colors.some(({ color }) => color.toLowerCase() === randomHexColor.toLowerCase());

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
