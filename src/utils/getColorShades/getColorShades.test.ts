import { getColorShades } from './getColorShades';

const MOCK_COLOR = {
  name: `Red`,
  color: `#ff0000`
};

const MOCK_PALETTE = {
  colors: [MOCK_COLOR],
  emoji: `🎨`,
  id: `test-palette`,
  paletteName: `Test Palette`
};

describe(`getColorShades`, () => {
  it(`should return an array of shades for a given color`, () => {
    const colorId = MOCK_COLOR.name.toLowerCase();

    const shades = getColorShades(MOCK_PALETTE, colorId);

    expect(shades).toBeInstanceOf(Array);
    expect(shades).toHaveLength(9); // The first shade (50) is removed, so there should be 9 shades

    shades.forEach((shade, index) => {
      expect(shade.id).toBe(colorId);
      expect(shade.name).toBe(`Red ${(index + 1) * 100}`);
      expect(shade.hex).toBeDefined();
      expect(shade.rgb).toBeDefined();
      expect(shade.rgba).toBeDefined();
      expect(shade.level).toBeDefined();
    });
  });
});
