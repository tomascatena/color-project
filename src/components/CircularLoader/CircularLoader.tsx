import {
  CircularProgressAnimated,
  CircularProgressBackground
} from './CircularLoader.styled';
import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
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
 * A circular loader components.<br>
 * Allows for customization of the duration [ms], size [px] and thickness [px].
 */
const CircularLoader = ({
  duration = 800,
  size = 40,
  sx,
  thickness = 4,
}: Props) => {
  return (
    <Box sx={{ position: `relative`, ...sx }}>
      <CircularProgressBackground
        variant='determinate'
        size={size}
        thickness={thickness}
        value={100}
      />

      <CircularProgressAnimated
        duration={duration}
        variant='indeterminate'
        disableShrink
        size={size}
        thickness={thickness}
      />
    </Box>
  );
};

export default CircularLoader;
