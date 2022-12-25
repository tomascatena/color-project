import {
  Button,
  Tooltip,
  Typography
} from '@mui/material';
import { ColorPalette } from '@/@types/typings';
import {
  DeletePaletteIcon,
  MiniPaletteColors,
  MiniPaletteContainer,
  MiniPaletteFooter
} from './MiniPalette.styled';
import { Emoji } from 'emoji-mart';
import CustomDialog from '../CustomDialog/CustomDialog';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react';

type Props = {
  /**
   * Function to handle click event.<br>
   * It can be used to navigate to the palette page.
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

/**
 * <h3>Mini Palette Component</h3>
 * <p>
 * The container component must specify the dimensions, either assigning the height and width or using the CSS Grid.
 * </p>
 */
const MiniPalette = ({
  handleClick,
  palette,
  removePalette
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

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
    setIsDialogOpen(false);
  };

  const handleDeletePaletteIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDialogOpen(true);
  };

  const handleCancelDeletePalette = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDialogOpen(false);
  };

  const dialogActions = (
    <>
      <Button
        variant="contained"
        color="info"
        onClick={handleCancelDeletePalette}
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={handleRemovePalette}
      >
        Delete Palette
      </Button>
    </>
  );

  const dialogContent = (
    <>
      <Typography>
        Are you sure you want to delete the palette?
      </Typography>

      <Typography>
        This action cannot be undone.
      </Typography>
    </>
  );

  return (
    <MiniPaletteContainer onClick={handleClick}>
      <Tooltip title={tooltipTitle}>
        <DeletePaletteIcon onClick={handleDeletePaletteIconClick}>
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

      <CustomDialog
        dialogActions={dialogActions}
        dialogContent={dialogContent}
        dialogTitle='Confirm Delete Palette'
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </MiniPaletteContainer>
  );
};

export default MiniPalette;
