import {
  Button,
  TextField,
} from '@mui/material';
import { ColorPalette } from '@/typings/typings';
import CustomDialog from '@/components/CustomDialog/CustomDialog';
import React from 'react';

type Props = {
  /**
   * Whether the dialog is open
   */
  isDialogOpen: boolean;
  /**
   * Name of the new palette
   */
  newPaletteName: string;
  /**
   * List of existing palettes
   */
  palettes: ColorPalette[];
  /**
   * Callback to close the dialog
   */
  setIsDialogOpen: (value: boolean) => void;
  /**
   * Callback to set the new palette name
   */
  setNewPaletteName: (value: string) => void;
  handleSavePalette: () => void;
};

const NewPaletteNameDialog = ({
  isDialogOpen,
  newPaletteName,
  palettes,
  setIsDialogOpen,
  setNewPaletteName,
  handleSavePalette
}: Props) => {
  const [hasValidationError, setHasValidationError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const isPaletteNameUnique = (name: string) => {
    return palettes.every(
      ({ paletteName }) => paletteName.toLowerCase() !== name.toLowerCase()
    );
  };

  const validatePaletteName = (name: string) => {
    if (newPaletteName.trim() === '') {
      setHelperText('Palette name cannot be empty');
      setHasValidationError(true);
    } else if (!isPaletteNameUnique(name)) {
      setHelperText('Palette name must be unique');
      setHasValidationError(true);
    } else {
      setHelperText('');
      setHasValidationError(false);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPaletteName(event.target.value);

    validatePaletteName(event.target.value);
  };

  const handleSavePaletteName = () => {
    setIsDialogOpen(false);
    handleSavePalette();
  };

  const isButtonDisabled = hasValidationError || newPaletteName.trim() === '';

  const dialogContent = (
    <TextField
      autoFocus
      error={hasValidationError}
      fullWidth
      helperText={helperText}
      id="new-palette-name"
      label="Palette Name"
      margin="dense"
      onChange={handleNameChange}
      type="text"
      value={newPaletteName}
      variant='filled'
    />
  );

  const dialogActions = (
    <Button
      color="primary"
      onClick={handleSavePaletteName}
      disabled={isButtonDisabled}
      variant='contained'
    >
      Save Palette Name
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
