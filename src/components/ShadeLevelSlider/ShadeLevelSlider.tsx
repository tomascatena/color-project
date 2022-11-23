import { LEVELS } from "@/constants/colors";
import { LevelText, SliderContainer } from "./ShadeLevelSlider.styled";
import { Slider } from "@mui/material";
import React from "react";

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
      <LevelText>
        Level: {level}
      </LevelText>

      <Slider
        sx={{ flex: 1 }}
        aria-label="Color Shade Level"
        defaultValue={defaultValue}
        valueLabelDisplay="off"
        onChange={(event, newLevel) => setLevel(newLevel as number)}
        step={step}
        min={minValue}
        max={maxValue}
      />
    </SliderContainer>
  );
};

export default ShadeLevelSlider;
