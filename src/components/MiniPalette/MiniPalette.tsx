import { ColorPalette } from '@/typings/typings';
import {
  DeletePaletteIcon,
  MiniPaletteColors,
  MiniPaletteContainer,
  MiniPaletteFooter
} from './MiniPalette.styled';
import { Emoji } from 'emoji-mart';
import {
  Tooltip,
  Typography
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react';

type Props = {
  /**
   * Function to handle click event
   */
  handleClick?: () => void;
  /**
   * Palette object
   */
  palette: ColorPalette;
  /**
   * Function to delete a palette from local storage
   */
  removePalette: (paletteId: string) => void;
};

const MiniPalette = ({
  handleClick,
  palette,
  removePalette
}: Props) => {
  const emoji = (
    <Emoji
      emoji={palette.emoji}
      size={18}
      set='apple'
      native
    />
  );

  const tooltipTitle = (
    <React.Fragment>
      <Typography variant="body2">Delete Palette</Typography>
    </React.Fragment>
  );

  const handleRemovePalette = (event: React.MouseEvent) => {
    event.stopPropagation();
    removePalette(palette.id);
  };

  return (
    <MiniPaletteContainer onClick={handleClick}>
      <Tooltip title={tooltipTitle}>
        <DeletePaletteIcon onClick={handleRemovePalette}>
          <DeleteOutlineIcon />
        </DeletePaletteIcon>
      </Tooltip>

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
