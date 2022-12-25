import {
  DrawerHeader,
  StyledDrawer
} from './customDrawer.styled';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import React from 'react';

type Props = {
  /**
   * Children to be rendered inside the drawer
   */
  children: React.ReactNode;
  /**
   * Width of the drawer
   */
  drawerWidth: number | string;
  /**
    * State of the drawer
    */
  isDrawerOpen: boolean;
  /**
   * Function to set the state of the drawer
   */
  setIsDrawerOpen: (open: boolean) => void;
};

/**
 * <h3>Custom Drawer Component</h3>
 * <p>
 * This component is a wrapper around the Material UI Drawer component.
 * </p>
 */
const CustomDrawer = ({
  children,
  drawerWidth,
  isDrawerOpen,
  setIsDrawerOpen,
}: Props) => {
  const theme = useTheme();

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
      drawerWidth={drawerWidth}
    >
      <DrawerHeader>
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          {theme.direction === `ltr` ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      {children}
    </StyledDrawer>
  );
};

export default CustomDrawer;
