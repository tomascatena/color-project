import { Button } from '@mui/material';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import CustomDrawer from './CustomDrawer';
import React from 'react';

export default {
  title: `Components/CustomDrawer`,
  component: CustomDrawer,
} as ComponentMeta<typeof CustomDrawer>;

const Template: ComponentStory<typeof CustomDrawer> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setIsDrawerOpen(true)}
      >
        Open Drawer
      </Button>

      <CustomDrawer
        drawerWidth={400}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      >
        Content to be rendered inside the drawer
      </CustomDrawer>
    </>
  );
};

export const Default = Template.bind({});
