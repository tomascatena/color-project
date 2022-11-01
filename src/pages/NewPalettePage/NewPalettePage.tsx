import { AppBar } from '@/components/NewPaletteForm/NewPaletteForm.styled';
import { DrawerHeader } from '@/components/CustomDrawer/customDrawer.styled';
import { Main } from './NewPalettePage.styled';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import NewPaletteForm from '@/components/NewPaletteForm/NewPaletteForm';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NewPalettePage = () => {
  const DRAWER_WIDTH = 360;

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const [colors, setColors] = React.useState<string[]>(['purple', '#e15764']);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
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

          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <NewPaletteForm
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        drawerWidth={DRAWER_WIDTH}
        colors={colors}
        setColors={setColors}
      />

      <Main
        drawerWidth={DRAWER_WIDTH}
        isDrawerOpen={isDrawerOpen}
      >
        <DrawerHeader />

        <ul>
          {colors.map((color) => (
            <li
              key={color}
              style={{ backgroundColor: color }}
            >
              {color}
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
};

export default NewPalettePage;
