import { COLOR_FORMATS, ColorFormat } from '@/constants/colors';
import { ColorPalette } from '@/typings/typings';
import { SingleColorPageContainer } from './SingleColorPage.styled';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import SingleColorShades from '@/components/SingleColorShades/SingleColorShades';

type Props = {
  /**
   * Id of the color
   */
  colorId: string;
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPalette;
};

const ColorShadesPage = ({
  colorId,
  palette
}: Props) => {
  const [colorFormat, setColorFormat] = React.useState<ColorFormat>(COLOR_FORMATS.hex.name);

  return (
    <SingleColorPageContainer>
      <Navbar
        colorFormat={colorFormat}
        setColorFormat={setColorFormat}
        hasSlider={false}
      />

      <SingleColorShades
        palette={palette}
        colorId={colorId}
        colorFormat={colorFormat}
      />

      <Footer palette={palette} />
    </SingleColorPageContainer>
  );
};

export default ColorShadesPage;
