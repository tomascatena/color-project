import { AppBar } from '@/components/NewPaletteForm/NewPaletteForm.styled';
import {
  Box,
  Button,
  IconButton,
  Typography
} from '@mui/material';
import {
  ColorBoxesContainer,
  NewPalettePageContainer
} from './NewPalettePage.styled';
import {
  ColorDefinition,
  ColorPalette
} from '@/typings/typings';
import { DrawerHeader } from '@/components/CustomDrawer/customDrawer.styled';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DraggableColorBox from '@/components/DraggableColorBox/DraggableColorBox';
import NewPaletteForm from '@/components/NewPaletteForm/NewPaletteForm';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

type Props = {
  /**
   * Function to save the new palette in local storage
   */
  savePalette: (newPalette: ColorPalette) => void;
};

const NewPalettePage = ({ savePalette }: Props) => {
  const DRAWER_WIDTH = 360;

  const [newPaletteName, setNewPaletteName] = React.useState('Pelusa Palette');

  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const [colors, setColors] = React.useState<ColorDefinition[]>([
    { color: '#0000ff', name: 'Blue' },
    { color: '#ff0000', name: 'Red' },
    { color: '#00ff00', name: 'Green' },
    { color: '#ffff00', name: 'Yellow' },
  ]);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleSavePalette = () => {
    const newPalette = {
      colors,
      emoji: '🐈',
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      paletteName: newPaletteName,
    };

    savePalette(newPalette);

    navigate('/');
  };

  return (
    <NewPalettePageContainer>
      <AppBar
        position="fixed"
        isDrawerOpen={isDrawerOpen}
        drawerWidth={DRAWER_WIDTH}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(isDrawerOpen && { display: 'none' }) }}
          >
            <AddIcon />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              Create a Palette
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 6
              }}
            >
              <Button
                variant='contained'
                color='info'
                onClick={handleSavePalette}
              >
                Save Palette
              </Button>

              <Button
                variant='contained'
                color='info'
                onClick={() => navigate('/')}
              >
                Go Back
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <NewPaletteForm
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        drawerWidth={DRAWER_WIDTH}
        colors={colors}
        setColors={setColors}
      />

      <DrawerHeader />

      <ColorBoxesContainer
        drawerWidth={DRAWER_WIDTH}
        isDrawerOpen={isDrawerOpen}
      >
        {
          colors.map((color) => (
            <DraggableColorBox
              key={color.name}
              color={color}
            />
          ))
        }
      </ColorBoxesContainer>
    </NewPalettePageContainer>
  );
};

export default NewPalettePage;
