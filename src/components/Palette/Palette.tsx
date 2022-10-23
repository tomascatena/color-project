import { ColorFormat } from '@/constants/colors';
import { ColorPaletteWithShades } from '@/typings/typings';
import { PaletteColors } from './Palette.styled';
import ColorBox from '../ColorBox/ColorBox';
import React from 'react';

type Props = {
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPaletteWithShades;
  /**
   * Level of the color (100, 200, 300, ..., 900)
   */
  level: number;
  /**
   * Color format (hex, rgb, rgba)
   */
  colorFormat: ColorFormat;
};

const Palette = ({ palette, level, colorFormat }: Props) => {
  return (
    <PaletteColors>
      {
        palette.colors[level].map((color) => (
          <ColorBox
            key={color.name}
            backgroundColor={color[colorFormat]}
            colorId={color.id}
            colorName={color.name}
            paletteId={palette.id}
          />
        ))
      }
    </PaletteColors>
  );
};

export default Palette;
