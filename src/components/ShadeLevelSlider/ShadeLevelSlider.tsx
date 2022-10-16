import { LEVELS } from '@/constants/colors';
import { Slider } from '@mui/material';
import { SliderContainer } from './ShadeLevelSlider.styled';
import React from 'react';

type Props = {
  /**
   * Function to set the shade level
   */
  setLevel: (level: number) => void;
  /**
    * Current shade level
    */
  level: number;
};

const ShadeLevelSlider = ({ setLevel, level }: Props) => {
  const defaultValue = LEVELS[Math.floor(LEVELS.length / 2)];
  const minValue = LEVELS[1];
  const maxValue = LEVELS[LEVELS.length - 1];
  const step = (LEVELS[LEVELS.length - 1] - LEVELS[1]) / (LEVELS.length - 2);

  return (
    <SliderContainer>
      <Slider
        sx={{ marginTop: 'auto' }}
        aria-label="Color Shade Level"
        defaultValue={defaultValue}
        valueLabelDisplay="off"
        onChange={(event, newLevel) => setLevel(newLevel as number)}
        step={step}
        min={minValue}
        max={maxValue}
        size="small"
      />

      {level}
    </SliderContainer>
  );
};

export default ShadeLevelSlider;
