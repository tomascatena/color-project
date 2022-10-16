import { ColorPalette } from '@/typings/typings';
import {
  MiniPaletteColors,
  MiniPaletteContainer,
  MiniPaletteFooter
} from './MiniPalette.styled';
import React from 'react';

type Props = {
  palette: ColorPalette;
};

const MiniPalette = ({ palette }: Props) => {
  return (
    <MiniPaletteContainer>
      <MiniPaletteColors>
        {palette.colors.map((color) => (
          <div
            key={color.name}
            style={{ backgroundColor: color.color }}
          >
          </div>
        ))}
      </MiniPaletteColors>

      <MiniPaletteFooter>
        {palette.paletteName} <span>{palette.emoji}</span>
      </MiniPaletteFooter>
    </MiniPaletteContainer>
  );
};

export default MiniPalette;
