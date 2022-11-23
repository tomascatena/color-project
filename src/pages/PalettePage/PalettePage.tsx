import { COLOR_FORMATS, ColorFormat } from "@/constants/colors";
import { ColorPalette } from "@/@types/typings";
import { PalettePageContainer } from "./PalettePage.styled";
import { generatePalette } from "@/utils/colorHelpers/colorHelpers";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Palette from "@/components/Palette/Palette";
import React from "react";
import useGetDeviceSeize from "@/hooks/useGetDeviceSize";

type Props = {
  palette: ColorPalette;
};

const HomePage = ({ palette }: Props) => {
  const [level, setLevel] = React.useState(500);
  const [colorFormat, setColorFormat] = React.useState<ColorFormat>(COLOR_FORMATS.hex.name);

  const { isMobile } = useGetDeviceSeize();

  return (
    <PalettePageContainer>
      <Navbar
        colorFormat={colorFormat}
        level={level}
        setColorFormat={setColorFormat}
        setLevel={setLevel}
        hasSlider={!isMobile}
      />

      <Palette
        level={level}
        colorFormat={colorFormat}
        palette={generatePalette(palette)}
      />

      <Footer palette={palette} />
    </PalettePageContainer>
  );
};

export default HomePage;
