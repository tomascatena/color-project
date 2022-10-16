import { generatePalette } from '@/utils/colorHelpters';
import Palette from '@/components/Palette/Palette';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

const HomePage = () => {
  console.log(generatePalette(seedPalettes[4]));

  return (
    <div>
      <Palette palette={seedPalettes[2]} />
    </div>
  );
};

export default HomePage;
