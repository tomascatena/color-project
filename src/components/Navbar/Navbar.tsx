import { ColorFormat } from '@/constants/colors';
import { IconButton } from '@mui/material';
import { NavbarContainer, NavbarTitle, SoundSelector, StyledLink } from './Navbar.styled';
import ColorFormatSelect from '../ColorFormatSelect/ColorFormatSelect';
import CustomSnackbar from '@/components/CustomSnackbar/CustomSnackbar';
import React from 'react';
import ShadeLevelSlider from '@/components/ShadeLevelSlider/ShadeLevelSlider';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

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
  /**
   * Weather to play sound or not
   */
  shouldPlaySound: boolean;
  /**
   * Function to set the sound
   */
  setShouldPlaySound: (shouldPlaySound: boolean) => void;
};

const Navbar = ({
  colorFormat,
  hasSlider = true,
  level,
  setColorFormat,
  setLevel,
  setShouldPlaySound,
  shouldPlaySound,
  title,
}: Props) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  return (
    <NavbarContainer>
      <StyledLink to="/">
        Back To Palettes
      </StyledLink>

      {title && <NavbarTitle>{title}</NavbarTitle>}

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

      <SoundSelector>
        Sound {shouldPlaySound ? `On` : `Off`}

        <IconButton >
          {
            shouldPlaySound ? (
              <VolumeUpIcon
                onClick={() => setShouldPlaySound(false)}
              />
            ) : (
              <VolumeOffIcon
                onClick={() => setShouldPlaySound(true)}
              />
            )
          }
        </IconButton>
      </SoundSelector>

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
