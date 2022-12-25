import { Button } from '@mui/material';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import CustomSnackbar from './CustomSnackbar';
import React from 'react';

export default {
  title: `Components/CustomSnackbar`,
  component: CustomSnackbar,
} as ComponentMeta<typeof CustomSnackbar>;

const Template: ComponentStory<typeof CustomSnackbar> = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState<boolean>(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setIsSnackbarOpen(true)}
      >
        Open Snackbar
      </Button>

      <CustomSnackbar
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
      >
        Content to be rendered inside the snackbar
      </CustomSnackbar>
    </>
  );
};

export const Default = Template.bind({});
