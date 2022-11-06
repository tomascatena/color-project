import {
  Button,
  TextField,
} from '@mui/material';
import CustomDialog from '@/components/CustomDialog/CustomDialog';
import React from 'react';

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
  setNewPaletteName: (value: string) => void;
  newPaletteName: string;
};

const NewPaletteNameDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  setNewPaletteName,
  newPaletteName
}: Props) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPaletteName(event.target.value);
  };

  const dialogContent = (
    <TextField
      autoFocus
      fullWidth
      id="new-palette-name"
      label="Palette Name"
      margin="dense"
      variant='filled'
      onChange={handleNameChange}
      type="text"
      value={newPaletteName}
    />
  );

  const dialogActions = (
    <Button
      color="primary"
      onClick={() => setIsDialogOpen(false)}
    >
      Save Palette
    </Button>
  );

  return (
    <CustomDialog
      dialogActions={dialogActions}
      dialogContent={dialogContent}
      dialogTitle='Choose a Palette Name'
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
};

export default NewPaletteNameDialog;
