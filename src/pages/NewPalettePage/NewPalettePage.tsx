import { AppBar } from '@/components/NewPaletteForm/NewPaletteForm.styled';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import NewPaletteForm from '@/components/NewPaletteForm/NewPaletteForm';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NewPalettePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <AppBar
        position="fixed"
        isDrawerOpen={isDrawerOpen}
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
      />
    </>
  );
};

export default NewPalettePage;
