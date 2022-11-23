export const LEVELS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export const COLOR_FORMATS = {
  hex: {
    name: `hex`,
    label: `HEX - #ffffff`,
  },
  rgb: {
    name: `rgb`,
    label: `RGB - rgb(255, 255, 255)`,
  },
  rgba: {
    name: `rgba`,
    label: `RGBA - rgba(255, 255, 255, 1.0)`,
  }
} as const;

export type ColorFormat = keyof typeof COLOR_FORMATS;
