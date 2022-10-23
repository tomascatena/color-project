import { ColorFormat } from '@/constants/colors';
import { ColorPalette } from '@/typings/typings';
import { SingleColorShadesContainer } from './SingleColorShades.styled';
import { getColorShades } from '@/utils/getColorShades';
import ColorBox from '@/components/ColorBox/ColorBox';
import React from 'react';

type Props = {
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPalette;
  /**
   * Id of the color
   */
  colorId: string;
  /**
   * Color format (hex, rgb, rgba)
   */
  colorFormat: ColorFormat;
};

const SingleColorShades = ({ palette, colorId, colorFormat }: Props) => {
  const colorShades = getColorShades(palette, colorId);

  return (
    <SingleColorShadesContainer>
      {
        colorShades.map((color) => (
          <ColorBox
            key={color.name}
            backgroundColor={color[colorFormat]}
            colorId={color.id}
            colorName={color.name}
            paletteId={palette.id}
            isColorShade
          />
        ))
      }
    </SingleColorShadesContainer>
  );
};

export default SingleColorShades;
