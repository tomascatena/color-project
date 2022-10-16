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
    <nav>
      <ShadeLevelSlider
        level={level}
        setLevel={setLevel}
      />
    </nav>
  );
};

export default Navbar;
