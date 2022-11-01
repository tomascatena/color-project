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
};

const NewPaletteForm = ({
  drawerWidth,
  isDrawerOpen,
  setIsDrawerOpen,
}: Props) => {
  return (
    <CustomDrawer
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      drawerWidth={drawerWidth}
    >
      <h1>New Palette Form</h1>
    </CustomDrawer>
  );
};

export default NewPaletteForm;
