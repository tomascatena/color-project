import { ColorPalette } from '@/typings/typings';
import { Emoji } from 'emoji-mart';
import { FooterContainer } from './Footer.styled';
import React from 'react';

type Props = {
  /**
   * Palette data, includes palette name, id, emoji, and colors
   */
  palette: ColorPalette;
};

const Footer = ({ palette }: Props) => {
  const emoji = (
    <Emoji
      emoji={palette.emoji}
      size={22}
      set='apple'
      native
    />
  );

  return (
    <FooterContainer>
      {palette.paletteName} {emoji}
    </FooterContainer>
  );
};

export default Footer;
