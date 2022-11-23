import { ColorFormat } from '@/constants/colors';
import { ColorPalette } from '@/@types/typings';
import { SingleColorShadesContainer } from './SingleColorShades.styled';
import { getColorShades } from '@/utils/getColorShades/getColorShades';
import ColorBox from '@/components/ColorBox/ColorBox';
import GoBackBox from '@/components/GoBackBox/GoBackBox';
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

      <GoBackBox
        backgroundColor='#000'
        paletteId={palette.id}
      />
    </SingleColorShadesContainer>
  );
};

export default SingleColorShades;
