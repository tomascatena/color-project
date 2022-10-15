import { ColorPalette } from '@/typings/typings';
import { PaletteColors, StyledPalette } from './Palette.styled';
import React from 'react';

type Props = {
  palette: ColorPalette;
};

const Palette = ({ palette }: Props) => {
  console.log(palette);
  return (
    <StyledPalette>
      {/* Navbar goes here */}

      <PaletteColors>
        {/* Bunch of color boxes */}
      </PaletteColors>

      {/* Footer goes here */}
    </StyledPalette>
  );
};

export default Palette;
