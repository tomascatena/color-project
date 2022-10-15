import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import React from 'react';

type Props = {
  /**
   * The size of the loader
   */
  size?: number;
  /**
   * The thickness of the loader
   */
  thickness?: number;
  /**
   * The styles for the loader
   */
  sx?: SxProps<Theme> | undefined;
  /**
   * Duration of the animation in milliseconds
   */
  duration?: number;
};

/**
 * A circular loader
 */
const CircularLoader = ({
  size = 40,
  thickness = 4,
  duration = 800,
  sx
}: Props) => {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={size}
        thickness={thickness}
        value={100}
      />

      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          animationDuration: `${duration}ms`,
          position: 'absolute',
          left: 0,

          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={size}
        thickness={thickness}
      />
    </Box>
  );
};

export default CircularLoader;
