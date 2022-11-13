import { AppBar, AppBarContent, ButtonsContainer } from './NewPaletteAppBar.styled';
import {
  Button,
  IconButton,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

type Props = {
  /**
   * Width of the drawer
   */
  drawerWidth: number;
  /**
   * Whether the drawer is open
   */
  isDrawerOpen: boolean;
  /**
   * Callback to open the drawer
   */
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  /**
   * Callback to open the dialog to save the palette
   */
  setIsNameDialogOpen: (value: boolean) => void;
};

const NewPaletteAppBar = ({
  drawerWidth,
  isDrawerOpen,
  setIsDrawerOpen,
  setIsNameDialogOpen,
}: Props) => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      isDrawerOpen={isDrawerOpen}
      drawerWidth={drawerWidth}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setIsDrawerOpen(true)}
          edge="start"
          sx={{ mr: 2, ...(isDrawerOpen && { display: 'none' }) }}
        >
          <AddIcon />
        </IconButton>

        <AppBarContent>
          <Typography
            variant="h6"
            noWrap
          >
            Create a Palette
          </Typography>

          <ButtonsContainer>
            <Button
              variant='contained'
              color='info'
              onClick={() => setIsNameDialogOpen(true)}
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
          </ButtonsContainer>
        </AppBarContent>
      </Toolbar>
    </AppBar>
  );
};

export default NewPaletteAppBar;
