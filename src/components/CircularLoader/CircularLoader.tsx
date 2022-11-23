import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import React from 'react';

type Props = {
  /**
   * Duration of the animation in milliseconds
   *
   * @default 800
   */
  duration?: number;
  /**
   * The size of the loader
   *
   * @default 40
   */
  size?: number;
  /**
   * The styles for the loader
   */
  sx?: SxProps<Theme> | undefined;
  /**
   * The thickness of the loader
   *
   * @default 4
   */
  thickness?: number;
};

/**
 * A circular loader
 */
const CircularLoader = ({
  duration = 800,
  size = 40,
  sx,
  thickness = 4,
}: Props) => {
  return (
    <Box sx={{ position: `relative`, ...sx }}>
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === `light` ? 200 : 800],
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
          position: `absolute`,
          left: 0,

          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: `round`,
          },
        }}
        size={size}
        thickness={thickness}
      />
    </Box>
  );
};

export default CircularLoader;
