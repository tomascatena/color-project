import { COLOR_FORMATS, ColorFormat } from '@/constants/colors';
import { ColorPalette } from '@/typings/typings';
import { ColorShades, SingleColorPageContainer } from './SingleColorPage.styled';
import { getColorShades } from '@/utils/getColorShades';
import ColorBox from '@/components/ColorBox/ColorBox';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type Props = {
  /**
   * Id of the color
   */
  colorId: string;
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPalette;
};

const ColorShadesPage = ({
  colorId,
  palette
}: Props) => {
  const colorShades = getColorShades(palette, colorId);
  const [colorFormat, setColorFormat] = React.useState<ColorFormat>(COLOR_FORMATS.hex.name);

  const colorBoxes = colorShades.map((color) => (
    <ColorBox
      key={color.name}
      backgroundColor={color[colorFormat]}
      colorId={color.id}
      colorName={color.name}
      paletteId={palette.id}
      isColorShade
    />
  ));

  return (
    <SingleColorPageContainer>
      <Navbar
        colorFormat={colorFormat}
        setColorFormat={setColorFormat}
        hasSlider={false}
      />

      <ColorShades>
        {colorBoxes}
      </ColorShades>

      <Footer palette={palette} />
    </SingleColorPageContainer>
  );
};

export default ColorShadesPage;
