import seedPalettes from '@/data/seedPalettes';

export const findPalette = (id: string) => {
  return seedPalettes.find((palette) => palette.id === id);
};
