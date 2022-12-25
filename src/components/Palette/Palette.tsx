import { ColorFormat } from '@/constants/colors';
import { ColorPaletteWithShades } from '@/@types/typings';
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
  /**
   * Weather to play sound or not
   */
  shouldPlaySound: boolean;
};

/**
 * <h3>Palette Component</h3>
 * <p>
 * Renders a palette of colors.<br>
 * The palette is generated from the palette data passed in and for the given level.
 * </p>
 */
const Palette = ({
  palette,
  level,
  colorFormat,
  shouldPlaySound,
}: Props) => {
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
            shouldPlaySound={shouldPlaySound}
          />
        ))
      }
    </PaletteColors>
  );
};

export default Palette;
