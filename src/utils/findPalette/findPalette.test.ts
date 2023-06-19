import { ColorPalette } from '@/@types/typings';
import { findPalette } from './findPalette';

const MOCK_PALETTES = [
  { id: `1`, paletteName: `Palette 1` },
  { id: `2`, paletteName: `Palette 2` },
  { id: `3`, paletteName: `Palette 3` },
] as ColorPalette[];

describe(`findPalette`, () => {
  it(`should find the palette with the matching id`, () => {
    const paletteId = `2`;
    const expectedPalette = { id: `2`, paletteName: `Palette 2` };

    const foundPalette = findPalette(MOCK_PALETTES, paletteId);

    expect(foundPalette).toEqual(expectedPalette);
  });

  it(`should return undefined if no palette with the matching id is found`, () => {
    const paletteId = `4`;

    const foundPalette = findPalette(MOCK_PALETTES, paletteId);

    expect(foundPalette).toBeUndefined();
  });
});
