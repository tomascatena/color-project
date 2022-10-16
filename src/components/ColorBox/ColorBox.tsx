import {
  BoxContent,
  ColorBoxContainer,
  ColorBoxContent,
  CopyButton,
  CopyContainer,
  SeeMoreText
} from './ColorBox.styled';
import { useCopyTextToClipboard } from '@/hooks/useCopyTextToClipboard';
import React from 'react';

type Props = {
  /**
   * Background color of the color box
   */
  backgroundColor: string;
  /**
   * Name of the color
   */
  colorName: string;
};

const ColorBox = ({ backgroundColor, colorName }: Props) => {
  const { isCopied, copyTextToClipboard } = useCopyTextToClipboard();

  return (
    <ColorBoxContainer backgroundColor={backgroundColor}>
      <ColorBoxContent>
        <CopyContainer>
          <BoxContent>
            <span>{colorName}</span>
          </BoxContent>

          <CopyButton onClick={() => copyTextToClipboard(backgroundColor)} >
            Copy
          </CopyButton>
        </CopyContainer>

        <SeeMoreText>More</SeeMoreText>
      </ColorBoxContent>
    </ColorBoxContainer>
  );
};

export default ColorBox;
