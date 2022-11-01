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
   * Width of the drawer
   */
  drawerWidth: number;
  /**
   * State of the drawer
   */
  isDrawerOpen: boolean;
  /**
   * Function to set the state of the drawer
   */
  setIsDrawerOpen: (open: boolean) => void;
  colors: Color[];
  setColors: (colors: Color[]) => void;
};

const NewPaletteForm = ({
  drawerWidth,
  isDrawerOpen,
  setIsDrawerOpen,
  colors,
  setColors
}: Props) => {
  const [currentColor, setCurrentColor] = React.useState('#ffffff');
  const [newColorName, setNewColorName] = React.useState('');
  const [hasValidationError, setHasValidationError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const isPaletteFull = colors.length >= 20;

  const colorNameExists = colors.some(color => color.name === newColorName);
  const colorExists = colors.some(color => color.color === currentColor);

  const handleAddColor = () => {
    setColors([
      ...colors,
      {
        color: currentColor,
        name: newColorName
      }
    ]);

    setHasValidationError(false);
    setHelperText('');
  };

  const handleClearColors = () => {
    setColors([]);
  };

  const handleNewColorNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColorName(event.target.value);

    if (colorNameExists) {
      setHasValidationError(true);
      setHelperText(`Color with name ${newColorName} already exists`);
    }
  };

  const handleBlur = () => {
    if (colorNameExists) {
      setHasValidationError(true);
      setHelperText(`Color with name ${newColorName} already exists`);
    } else if (colorExists) {
      setHasValidationError(true);
      setHelperText(`Color with hex value ${currentColor} already exists`);
    } else {
      setHasValidationError(false);
      setHelperText('');
    }
  };

  const handleColorChange = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);

    if (colorExists) {
      setHasValidationError(true);
      setHelperText(`Color with hex value ${currentColor} already exists`);
    }
  };

  const isButtonDisabled = colorNameExists || colorExists || newColorName === '';

  const firstRender = React.useRef(true);
  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (colorNameExists) {
      setHasValidationError(true);
      setHelperText(`Color with name ${newColorName} already exists`);
    } else if (colorExists) {
      setHasValidationError(true);
      setHelperText(`Color with hex value ${currentColor} already exists`);
    } else {
      setHasValidationError(false);
      setHelperText('');
    }
  }, [newColorName, currentColor]);

  return (
    <CustomDrawer
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      drawerWidth={drawerWidth}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          padding: 2,
        }}
      >
        <Typography
          variant='h4'
          fontWeight='light'
        >
          Design Your Palette
        </Typography>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            gap: 2,
          }}
        >
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
        </Box>

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

        <TextField
          autoComplete='off'
          error={hasValidationError}
          fullWidth
          helperText={helperText}
          label='New Color Name'
          onBlur={handleBlur}
          onChange={handleNewColorNameChange}
          value={newColorName}
          variant='filled'
        />

        <Button
          onClick={handleAddColor}
          variant='contained'
          fullWidth
          sx={{
            backgroundColor: currentColor,

            '&:hover': {
              backgroundColor: currentColor,
            },
          }}
          disabled={isButtonDisabled}
        >
          {isPaletteFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </Box>
    </CustomDrawer>
  );
};

export default NewPaletteForm;
