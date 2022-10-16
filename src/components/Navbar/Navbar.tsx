import { ColorFormat } from '@/constants/colors';
import { NavbarContainer, StyledLink } from './Navbar.styled';
import ColorFormatSelect from '../ColorFormatSelect/ColorFormatSelect';
import CustomSnackbar from '@/components/CustomSnackbar/CustomSnackbar';
import React from 'react';
import ShadeLevelSlider from '@/components/ShadeLevelSlider/ShadeLevelSlider';

type Props = {
  /**
   * Function to set the shade level
   */
  setLevel: (level: number) => void;
  /**
   * Current shade level
   */
  level: number;
  /**
   * Current color format (hex, rgb, rgba)
   */
  colorFormat: ColorFormat;
  /**
   * Function to set the color format
   */
  setColorFormat: (colorFormat: ColorFormat) => void;
};

const Navbar = ({
  level,
  setLevel,
  colorFormat,
  setColorFormat
}: Props) => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  return (
    <NavbarContainer>
      <StyledLink to="/">
        Back To Palettes
      </StyledLink>

      <ShadeLevelSlider
        level={level}
        setLevel={setLevel}
      />

      <ColorFormatSelect
        colorFormat={colorFormat}
        setColorFormat={setColorFormat}
        setOpenSnackbar={setOpenSnackbar}
      />

      <CustomSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      >
        Format Changed To {colorFormat.toUpperCase()}
      </CustomSnackbar>
    </NavbarContainer >
  );
};

export default Navbar;
