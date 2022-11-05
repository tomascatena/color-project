import { AddColorButton, ButtonsContainer, NewPaletteFormContainer, StyledForm } from './NewPaletteForm.styled';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { ChromePicker, ColorResult } from 'react-color';
import CustomDrawer from '@/components/CustomDrawer/CustomDrawer';
import React from 'react';

type Color = {
  color: string;
  name: string;
};

type Props = {
  /**
   * Array of colors in the palette being created
   */
  colors: Color[];
  /**
   * Width of the drawer
   */
  drawerWidth: number;
  /**
   * State of the drawer
   */
  isDrawerOpen: boolean;
  /**
   * Function to set the colors in the palette being created
   */
  setColors: (colors: Color[]) => void;
  /**
   * Function to set the state of the drawer
   */
  setIsDrawerOpen: (open: boolean) => void;
};

const NewPaletteForm = ({
  colors,
  drawerWidth,
  isDrawerOpen,
  setColors,
  setIsDrawerOpen,
}: Props) => {
  const [currentColor, setCurrentColor] = React.useState('#0048FF');
  const [newColorName, setNewColorName] = React.useState('');
  const [hasValidationError, setHasValidationError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const isPaletteFull = colors.length >= 20;

  const isColorUnique = (color: Color) => !colors.some((c) => c.name === color.name);

  const isColorNameUnique = (color: Color) => !colors.some((c) => c.color === color.color);

  const validateColor = (color: Color) => {
    if (!isColorUnique(color)) {
      setHelperText('Color name must be unique');
      setHasValidationError(true);
    } else if (!isColorNameUnique(color)) {
      setHelperText('Color must be unique');
      setHasValidationError(true);
    } else {
      setHelperText('');
      setHasValidationError(false);
    }
  };

  const handleAddColor = (event: React.FormEvent) => {
    event.preventDefault();

    setColors([
      ...colors,
      {
        color: currentColor,
        name: newColorName
      }
    ]);

    setHasValidationError(false);
    setHelperText('');
    setNewColorName('');
  };

  const handleClearColors = () => {
    setColors([]);
  };

  const handleNewColorNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColorName(event.target.value);

    validateColor({
      color: currentColor,
      name: event.target.value
    });
  };

  const handleColorChange = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);

    validateColor({
      color: newColor.hex,
      name: newColorName
    });
  };

  const isButtonDisabled = (
    !newColorName ||
    !isColorNameUnique({ color: currentColor, name: newColorName }) ||
    !isColorUnique({ color: currentColor, name: newColorName }) ||
    isPaletteFull
  );

  return (
    <CustomDrawer
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      drawerWidth={drawerWidth}
    >
      <NewPaletteFormContainer>
        <Typography
          variant='h4'
          fontWeight='light'
        >
          Design Your Palette
        </Typography>

        <ButtonsContainer>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleClearColors}
          >
            Clear Palette
          </Button>

          <Button
            variant='contained'
            color='primary'
          >
            Random Color
          </Button>
        </ButtonsContainer>

        <ChromePicker
          color={currentColor}
          onChangeComplete={handleColorChange}
          styles={{
            default: {
              picker: {
                width: '100%',
              },
            },
          }}
        />

        <StyledForm
          noValidate
          onSubmit={handleAddColor}
        >
          <TextField
            autoComplete='off'
            error={hasValidationError}
            fullWidth
            helperText={helperText}
            label='New Color Name'
            onChange={handleNewColorNameChange}
            value={newColorName}
            variant='filled'
          />

          <AddColorButton
            backgroundColor={currentColor}
            disabled={isButtonDisabled}
            fullWidth
            type='submit'
            variant='contained'
          >
            {isPaletteFull ? 'Palette Full' : 'Add Color'}
          </AddColorButton>
        </StyledForm>
      </NewPaletteFormContainer>
    </CustomDrawer>
  );
};

export default NewPaletteForm;
