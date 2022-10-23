import { ColorPalette } from '@/typings/typings';
import {
  MiniPaletteColors,
  MiniPaletteContainer,
  MiniPaletteFooter
} from './MiniPalette.styled';
import React from 'react';

type Props = {
  /**
   * Palette object
   */
  palette: ColorPalette;
  /**
   * Function to handle click event
   */
  handleClick?: () => void;
};

const MiniPalette = ({ palette, handleClick }: Props) => {
  return (
    <MiniPaletteContainer onClick={handleClick}>
      <MiniPaletteColors>
        {
          palette.colors.map((color) => (
            <div
              key={color.name}
              style={{ backgroundColor: color.color }}
            >
            </div>
          ))
        }
      </MiniPaletteColors>

      <MiniPaletteFooter>
        {palette.paletteName} <span>{palette.emoji}</span>
      </MiniPaletteFooter>
    </MiniPaletteContainer>
  );
};

export default MiniPalette;
