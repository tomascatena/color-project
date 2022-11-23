import { StyledAlert } from "./CustomSnackbar.styled";
import React from "react";
import Snackbar from "@mui/material/Snackbar";

type Props = {
  /**
   * Children to be rendered inside the snackbar
   */
  children: React.ReactNode;
  /**
   * Whether the snackbar is open or not
   */
  isSnackbarOpen: boolean;
  /**
   * Function to set the snackbar open state
   */
  setIsSnackbarOpen: (isSnackbarOpen: boolean) => void;
};

const CustomSnackbar = ({
  children,
  isSnackbarOpen,
  setIsSnackbarOpen,
}: Props) => {
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === `clickaway`) {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: `bottom`, horizontal: `left` }}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
      open={isSnackbarOpen}
    >
      <StyledAlert
        severity='info'
        onClose={handleCloseSnackbar}
        variant='filled'
        icon={false}
      >
        {children}
      </StyledAlert>
    </Snackbar>);
};

export default CustomSnackbar;
