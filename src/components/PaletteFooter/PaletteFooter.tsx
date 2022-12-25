import { ColorPalette } from '@/@types/typings';
import { CopyrightText, FooterContainer, PaletteDescription } from './PaletteFooter.styled';
import { Emoji } from 'emoji-mart';
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
      <CopyrightText variant="body1">
        Created by Tomas Catena. All rights reserved.
      </CopyrightText>

      <PaletteDescription>
        {palette.paletteName} {emoji}
      </PaletteDescription>
    </FooterContainer>
  );
};

export default Footer;
