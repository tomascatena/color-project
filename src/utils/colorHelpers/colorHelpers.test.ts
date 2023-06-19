import { LEVELS } from '@/constants/colors';
import { generatePalette, generateScale, getRange } from './colorHelpers';
import chroma from 'chroma-js';

const MOCK_HEX_COLOR_RED = `#ff0000`;
const MOCK_HEX_COLOR_BLUE = `#0000ff`;
const MOCK_HEX_COLOR_GREEN = `#00ff00`;

const MOCK_PALETTE_COLORS = [
  {
    name: `Red`,
    color: MOCK_HEX_COLOR_RED
  },
  {
    name: `Green`,
    color: MOCK_HEX_COLOR_GREEN
  }
];

const MOCK_PALETTE = {
  colors: MOCK_PALETTE_COLORS,
  emoji: `🎨`,
  id: `test-palette`,
  paletteName: `Test Palette`
};

describe(`colorHelpers`, () => {
  describe(`getRange`, () => {
    it(`should return an array with darkened color, original color and end color`, () => {
      const hexColor = MOCK_HEX_COLOR_RED;
      const endColor = MOCK_HEX_COLOR_BLUE;

      const range = getRange(hexColor, endColor);

      expect(range).toHaveLength(3);
      expect(chroma.valid(range[0])).toBe(true);
      expect(range[1]).toBe(hexColor);
      expect(range[2]).toBe(endColor);
    });
  });

  describe(`generateScale`, () => {
    it(`should generate a scale of colors`, () => {
      const hexColor = MOCK_HEX_COLOR_RED;
      const numberOfColors = 5;
      const scale = generateScale(hexColor, numberOfColors);

      expect(scale).toHaveLength(numberOfColors);

      scale.forEach((color) => {
        expect(chroma.valid(color)).toBe(true);
      });
    });
  });

  describe(`generatePalette`, () => {
    it(`should generate a palette with shades for each color`, () => {
      const newPalette = generatePalette(MOCK_PALETTE);

      expect(newPalette).toBeDefined();
      expect(newPalette.paletteName).toBe(MOCK_PALETTE.paletteName);
      expect(newPalette.emoji).toBe(MOCK_PALETTE.emoji);
      expect(newPalette.id).toBe(MOCK_PALETTE.id);

      for (const level of LEVELS) {
        const colorsAtLevel = newPalette.colors[level];

        expect(colorsAtLevel).toBeDefined();
        expect(colorsAtLevel.length).toBe(MOCK_PALETTE.colors.length);

        colorsAtLevel.forEach((colorDef) => {
          expect(colorDef.hex).toBeDefined();
          expect(chroma.valid(colorDef.hex)).toBe(true); // Verify if it's a valid color
          expect(colorDef.name).toBeDefined();
          expect(colorDef.level).toBeDefined();
          expect(colorDef.rgb).toBeDefined();
          expect(colorDef.rgba).toBeDefined();
        });
      }
    });

    it(`should return an empty palette if the starterPalette has no colors`, () => {
      const MOCK_PALETTE_WITHOUT_COLORS = {
        ...MOCK_PALETTE,
        colors: []
      };

      const newPalette = generatePalette(MOCK_PALETTE_WITHOUT_COLORS);

      expect(newPalette).toBeDefined();
      expect(newPalette.paletteName).toBe(MOCK_PALETTE_WITHOUT_COLORS.paletteName);
      expect(newPalette.emoji).toBe(MOCK_PALETTE_WITHOUT_COLORS.emoji);
      expect(newPalette.id).toBe(MOCK_PALETTE_WITHOUT_COLORS.id);

      for (const level of LEVELS) {
        const colorsAtLevel = newPalette.colors[level];
        expect(colorsAtLevel).toBeDefined();
        expect(colorsAtLevel.length).toBe(0);
      }
    });
  });
});
