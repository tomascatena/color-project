import { ColorPalette } from '@/typings/typings';
import { PaletteColors, StyledPalette } from './Palette.styled';
import ColorBox from '../ColorBox/ColorBox';
import React from 'react';

type Props = {
  palette: ColorPalette;
};

const Palette = ({ palette }: Props) => {
  const colorBoxes = palette.colors.map((colorData) => (
    <ColorBox
      key={colorData.name}
      backgroundColor={colorData.color}
      colorName={colorData.name}
    />
  ));

  return (
    <StyledPalette>
      {/* Navbar goes here */}

      <PaletteColors>
        {/* Bunch of color boxes */}
        {colorBoxes}
      </PaletteColors>

      {/* Footer goes here */}
    </StyledPalette>
  );
};

export default Palette;
