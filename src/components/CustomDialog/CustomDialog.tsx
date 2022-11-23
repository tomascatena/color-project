import { BootstrapDialog } from './CustomDialog.styles';
import BootstrapDialogTitle from './BootstrapDialogTitle/BootstrapDialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import useClickOutside from '@/hooks/useClickOutside';

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
  const dialogContentRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(dialogContentRef, () => setIsDialogOpen(false));

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
      onClick={(event: React.MouseEvent) => event.stopPropagation()}
    >
      <div ref={dialogContentRef}>
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
      </div>
    </BootstrapDialog>
  );
};

export default CustomDialog;
