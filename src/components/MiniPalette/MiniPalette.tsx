import { ColorPalette } from '@/typings/typings';
import { Emoji } from 'emoji-mart';
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
  /**
   * Function to delete a palette from local storage
   */
  removePalette: (paletteId: string) => void;
};

const MiniPalette = ({
  palette,
  handleClick
}: Props) => {
  const emoji = (
    <Emoji
      emoji={palette.emoji}
      size={24}
      set='apple'
      native
    />
  );

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
        {palette.paletteName} <span>{emoji}</span>
      </MiniPaletteFooter>
    </MiniPaletteContainer>
  );
};

export default MiniPalette;
