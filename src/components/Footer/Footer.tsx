import { ColorPaletteWithShades } from '@/typings/typings';
import { FooterContainer } from './Footer.styled';
import React from 'react';

type Props = {
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPaletteWithShades;
};

const Footer = ({ palette }: Props) => {
  return (
    <FooterContainer>
      {palette.paletteName} {palette.emoji}
    </FooterContainer>
  );
};

export default Footer;
