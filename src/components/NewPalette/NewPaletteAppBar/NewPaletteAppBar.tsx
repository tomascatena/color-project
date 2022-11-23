import { AppBar, AppBarContent, AppBarTitle, ButtonsContainer } from './NewPaletteAppBar.styled';
import {
  Button,
  IconButton,
} from '@mui/material';
import { ColorDefinition } from '@/@types/typings';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

type Props = {
  /**
   * Array of colors
   */
  colors: ColorDefinition[];
  /**
   * Width of the drawer
   */
  drawerWidth: number | string;
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
  colors,
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
      color="inherit"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setIsDrawerOpen(true)}
          edge="start"
          sx={{ mr: 2, ...(isDrawerOpen && { display: `none` }) }}
        >
          <AddIcon />
        </IconButton>

        <AppBarContent isDrawerOpen={isDrawerOpen}>
          <AppBarTitle
            isDrawerOpen={isDrawerOpen}
            noWrap
          >
            Create a Palette
          </AppBarTitle>

          <ButtonsContainer>
            <Button
              variant='contained'
              color='info'
              onClick={() => setIsNameDialogOpen(true)}
              disabled={!colors.length}
            >
              Save Palette
            </Button>

            <Button
              variant='contained'
              color='info'
              onClick={() => navigate(`/`)}
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
