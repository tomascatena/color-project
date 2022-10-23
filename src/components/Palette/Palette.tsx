import { COLOR_FORMATS, ColorFormat } from '@/constants/colors';
import { ColorPaletteWithShades } from '@/typings/typings';
import { PaletteColors, StyledPalette } from './Palette.styled';
import ColorBox from '../ColorBox/ColorBox';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type Props = {
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPaletteWithShades;
};

const Palette = ({ palette }: Props) => {
  const [level, setLevel] = React.useState(500);
  const [colorFormat, setColorFormat] = React.useState<ColorFormat>(COLOR_FORMATS.hex.name);

  const colorBoxes = palette.colors[level].map((colorData) => (
    <ColorBox
      key={colorData.name}
      backgroundColor={colorData[colorFormat]}
      colorId={colorData.id}
      colorName={colorData.name}
      paletteId={palette.id}
    />
  ));

  return (
    <StyledPalette>
      <Navbar
        colorFormat={colorFormat}
        level={level}
        setColorFormat={setColorFormat}
        setLevel={setLevel}
      />

      <PaletteColors>{colorBoxes}</PaletteColors>

      <Footer palette={palette} />
    </StyledPalette>
  );
};

export default Palette;
