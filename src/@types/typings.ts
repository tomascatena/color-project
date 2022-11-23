export type ColorDefinition = {
  color: string;
  name: string;
};

export interface ColorPalette {
  colors: ColorDefinition[];
  emoji: string;
  id: string;
  paletteName: string;
}

export type ColorShades = {
  hex: string;
  id: string;
  level: number;
  name: string;
  rgb: string;
  rgba: string;
};

export interface ColorPaletteWithShades {
  colors: { [key: number]: ColorShades[] };
  emoji: string;
  id: string;
  paletteName: string;
}
