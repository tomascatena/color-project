import { DrawerHeader, StyledDrawer } from './NewPaletteForm.styled';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import React from 'react';

type Props = {
  /**
   * Function to set the state of the drawer
   */
  setIsDrawerOpen: (open: boolean) => void;
  /**
   * State of the drawer
   */
  isDrawerOpen: boolean;
};

const NewPaletteForm = ({ setIsDrawerOpen, isDrawerOpen }: Props) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <h1>New Palette Form</h1>
    </StyledDrawer>);
};

export default NewPaletteForm;
