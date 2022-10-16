import { COLOR_FORMATS } from '@/constants/colors';
import { SelectContainer } from './ColorFormatSelect.styled';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  /**
   * Current color format (hex, rgb, rgba)
   */
  colorFormat: ColorFormat;
  /**
   * Function to set the color format
   */
  setColorFormat: (colorFormat: ColorFormat) => void;
  /**
   * Function to set the snackbar open state
   */
  setIsSnackbarOpen: (isSnackbarOpen: boolean) => void;
};

type ColorFormat = keyof typeof COLOR_FORMATS;

const ColorFormatSelect = ({ colorFormat, setColorFormat, setIsSnackbarOpen }: Props) => {
  const handleColorFormatChange = (event: SelectChangeEvent) => {
    setColorFormat(event.target.value as ColorFormat);
    setIsSnackbarOpen(true);
  };

  return (
    <SelectContainer>
      <Select
        variant='standard'
        value={colorFormat}
        onChange={handleColorFormatChange}
      >
        {Object.keys(COLOR_FORMATS).map((format) => (
          <MenuItem
            key={COLOR_FORMATS[format as ColorFormat].name}
            value={COLOR_FORMATS[format as ColorFormat].name}
          >
            {COLOR_FORMATS[format as ColorFormat].label}
          </MenuItem>
        ))}
      </Select>
    </SelectContainer>);
};

export default ColorFormatSelect;
