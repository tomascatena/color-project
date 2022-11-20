import { ColorFormat } from '@/constants/colors';
import { NavbarContainer, StyledLink } from './Navbar.styled';
import { Typography } from '@mui/material';
import ColorFormatSelect from '../ColorFormatSelect/ColorFormatSelect';
import CustomSnackbar from '@/components/CustomSnackbar/CustomSnackbar';
import React from 'react';
import ShadeLevelSlider from '@/components/ShadeLevelSlider/ShadeLevelSlider';
import useGetDeviceSeize from '@/hooks/useGetDeviceSize';

type Props = {
  /**
   * Current color format (hex, rgb, rgba)
   */
  colorFormat: ColorFormat;
  /**
   * Weather to show the slider or not
   *
   * @default true
   */
  hasSlider?: boolean;
  /**
   * Current shade level
   */
  level?: number;
  /**
   * Function to set the color format
   */
  setColorFormat: (colorFormat: ColorFormat) => void;
  /**
   * Function to set the shade level
   */
  setLevel?: (level: number) => void;
  /**
   * Title to display
   */
  title?: string;
};

const Navbar = ({
  colorFormat,
  hasSlider = true,
  level,
  setColorFormat,
  setLevel,
  title
}: Props) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  const { isMobile } = useGetDeviceSeize();

  return (
    <NavbarContainer>
      <StyledLink to="/">
        Back To Palettes
      </StyledLink>

      {
        !isMobile && title && (
          <Typography
            sx={{ alignSelf: 'center' }}
            variant="h5"
          >
            {title}
          </Typography>
        )
      }

      {
        hasSlider && level && setLevel && (
          <ShadeLevelSlider
            level={level}
            setLevel={setLevel}
          />
        )
      }

      <ColorFormatSelect
        colorFormat={colorFormat}
        setColorFormat={setColorFormat}
        setIsSnackbarOpen={setIsSnackbarOpen}
      />

      <CustomSnackbar
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
      >
        Format Changed To {colorFormat.toUpperCase()}!
      </CustomSnackbar>
    </NavbarContainer >
  );
};

export default Navbar;
