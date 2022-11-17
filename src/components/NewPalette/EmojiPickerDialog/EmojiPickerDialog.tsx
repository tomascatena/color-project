import 'emoji-mart/css/emoji-mart.css';
import { BaseEmoji, Picker } from 'emoji-mart';
import CustomDialog from '@/components/CustomDialog/CustomDialog';
import React from 'react';

type Props = {
  /**
   * Function to save the new palette in local storage
   */
  handleSavePalette: (emoji: BaseEmoji) => void;
  /**
   * Boolean to control the dialog open state
   */
  isDialogOpen: boolean;
  /**
   * Function to set the dialog open state
   */
  setIsDialogOpen: (value: boolean) => void;
};

const EmojiPickerDialog = ({
  handleSavePalette,
  isDialogOpen,
  setIsDialogOpen,
}: Props) => {
  const dialogContent = (
    <Picker
      onSelect={(emoji: BaseEmoji) => handleSavePalette(emoji)}
      title='Pick an emoji'
      sheetSize={32}
      emojiSize={32}
      style={{ width: '100%' }}
    />
  );

  return (
    <CustomDialog
      dialogContent={dialogContent}
      dialogTitle='Pick an Emoji for your Palette'
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
};

export default EmojiPickerDialog;
