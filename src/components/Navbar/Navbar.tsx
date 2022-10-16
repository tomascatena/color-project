import { NavbarContainer, StyledLink } from './Navbar.styled';
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
};

const Navbar = ({ level, setLevel }: Props) => {
  return (
    <NavbarContainer>
      <StyledLink to="/">
        Back To Palettes
      </StyledLink>

      <ShadeLevelSlider
        level={level}
        setLevel={setLevel}
      />
    </NavbarContainer>
  );
};

export default Navbar;
