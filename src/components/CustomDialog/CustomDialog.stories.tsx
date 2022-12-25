import {
  Button,
  Typography
} from '@mui/material';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import CustomDialog from './CustomDialog';
import React from 'react';

export default {
  title: `Components/CustomDialog`,
  component: CustomDialog,
} as ComponentMeta<typeof CustomDialog>;

const Template: ComponentStory<typeof CustomDialog> = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  const dialogActions = (
    <>
      <Button
        variant="contained"
        color="info"
        onClick={() => setIsDialogOpen(false)}
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={() => setIsDialogOpen(false)}
      >
        Delete Palette
      </Button>
    </>
  );

  const dialogContent = (
    <>
      <Typography>
        Are you sure you want to delete the palette?
      </Typography>

      <Typography>
        This action cannot be undone.
      </Typography>
    </>
  );

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setIsDialogOpen(true)}
      >
        Open Dialog
      </Button>

      <CustomDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        dialogTitle="Confirm Delete Palette"
        dialogContent={dialogContent}
        dialogActions={dialogActions}
      />
    </>
  );
};

export const Default = Template.bind({});
