import Alert from '@mui/material/Alert';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';

type Props = {
  /**
   * Whether the snackbar is open or not
   */
  openSnackbar: boolean;
  /**
   * Function to set the snackbar open state
   */
  setOpenSnackbar: (openSnackbar: boolean) => void;
  /**
   * Children to be rendered inside the snackbar
   */
  children: React.ReactNode;
};

const CustomSnackbar = ({
  openSnackbar,
  setOpenSnackbar,
  children,
}: Props) => {
  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
      open={openSnackbar}
    >
      <Alert
        onClose={handleCloseSnackbar}
        sx={{
          width: '100%',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
        }}
        variant='filled'
      >
        {children}
      </Alert>
    </Snackbar>);
};

export default CustomSnackbar;
