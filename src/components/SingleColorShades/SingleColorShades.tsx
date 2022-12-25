import { ColorFormat } from '@/constants/colors';
import { ColorPalette } from '@/@types/typings';
import { SingleColorShadesContainer } from './SingleColorShades.styled';
import { getColorShades } from '@/utils/getColorShades/getColorShades';
import ColorBox from '@/components/ColorBox/ColorBox';
import GoBackBox from '@/components/GoBackBox/GoBackBox';
import React from 'react';

type Props = {
  /**
   * Id of the color
   */
  colorId: string;
  /**
   * Color format (hex, rgb, rgba)
   */
  colorFormat: ColorFormat;
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPalette;
  /**
   * Weather to play sound or not
   */
  shouldPlaySound: boolean;
};

/**
 * <h3>Single Color Shades Component</h3>
 * <p>
 * This component is used to render the shades of a single color.
 * It will render a ColorBox component for each shade (9 shades, from 100 to 900),
 * plus a GoBackBox component to go back to the palette in which the color belongs.
 * </p>
 */
const SingleColorShades = ({
  palette,
  colorId,
  colorFormat,
  shouldPlaySound,
}: Props) => {
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
            isColorShade
            paletteId={palette.id}
            shouldPlaySound={shouldPlaySound}
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
