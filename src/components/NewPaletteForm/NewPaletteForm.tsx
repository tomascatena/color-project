import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { ChromePicker, ColorResult } from 'react-color';
import CustomDrawer from '@/components/CustomDrawer/CustomDrawer';
import React from 'react';

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
  colors: string[];
  setColors: (colors: string[]) => void;
};

const NewPaletteForm = ({
  drawerWidth,
  isDrawerOpen,
  setIsDrawerOpen,
  colors,
  setColors
}: Props) => {
  const [currentColor, setCurrentColor] = React.useState('steelblue');

  const handleColorChange = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);
  };

  const handleAddColor = () => {
    setColors([...colors, currentColor]);
  };

  const handleClearColors = () => {
    setColors([]);
  };

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
          label='Palette Name'
          variant='filled'
          fullWidth
        />

        <Button
          onClick={handleAddColor}
          variant='contained'
          fullWidth
          sx={{
            backgroundColor: currentColor,
          }}
        >
          Add Color
        </Button>
      </Box>
    </CustomDrawer>
  );
};

export default NewPaletteForm;
