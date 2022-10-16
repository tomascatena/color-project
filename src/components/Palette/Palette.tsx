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

  const colorBoxes = palette.colors[level].map((colorData) => (
    <ColorBox
      key={colorData.name}
      backgroundColor={colorData.hex}
      colorName={colorData.name}
    />
  ));

  return (
    <StyledPalette>
      <Navbar
        level={level}
        setLevel={setLevel}
      />

      <PaletteColors>{colorBoxes}</PaletteColors>

      <Footer />
    </StyledPalette>
  );
};

export default Palette;
