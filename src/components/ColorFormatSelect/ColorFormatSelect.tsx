import { COLOR_FORMATS } from '@/constants/colors';
import FormControl from '@mui/material/FormControl';
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
  setOpenSnackbar: (openSnackbar: boolean) => void;
};

type ColorFormat = keyof typeof COLOR_FORMATS;

const ColorFormatSelect = ({ colorFormat, setColorFormat, setOpenSnackbar }: Props) => {
  const handleColorFormatChange = (event: SelectChangeEvent) => {
    setColorFormat(event.target.value as ColorFormat);
    setOpenSnackbar(true);
  };

  return (
    <FormControl
      sx={{
        minWidth: '17rem',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: '3rem',
      }}
      size="small"
    >
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
    </FormControl>);
};

export default ColorFormatSelect;
