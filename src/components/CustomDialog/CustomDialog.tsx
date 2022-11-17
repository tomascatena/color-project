import { BootstrapDialog } from './CustomDialog.styles';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React from 'react';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = ({
  children,
  onClose,
  ...other
}: DialogTitleProps) => {
  return (
    <DialogTitle
      sx={{ m: 0, p: 2 }}
      {...other}
    >
      {children}

      {
        onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null
      }
    </DialogTitle>
  );
};

type Props = {
  dialogActions?: React.ReactNode | undefined;
  dialogContent: React.ReactNode;
  dialogTitle: string;
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
};

const CustomDialog = ({
  dialogActions,
  dialogContent,
  dialogTitle,
  isDialogOpen,
  setIsDialogOpen,
}: Props) => {
  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <BootstrapDialog
      aria-labelledby="customized-dialog-title"
      fullWidth
      maxWidth='sm'
      onClose={handleClose}
      open={isDialogOpen}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        {dialogTitle}
      </BootstrapDialogTitle>

      <DialogContent dividers>
        {dialogContent}
      </DialogContent>

      {
        dialogActions && (
          <DialogActions>
            {dialogActions}
          </DialogActions>
        )
      }
    </BootstrapDialog>
  );
};

export default CustomDialog;
