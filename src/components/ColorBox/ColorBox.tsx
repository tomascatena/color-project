import {
  BoxContent,
  ColorBoxContainer,
  ColorBoxContent,
  CopyButton,
  CopyContainer,
  CopyOverlay,
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

  const handleCopy = () => {
    copyTextToClipboard(backgroundColor);
  };

  React.useEffect(() => {
    document.body.style.overflow = isCopied ? 'hidden' : 'auto';
  }, [isCopied]);

  return (
    <ColorBoxContainer backgroundColor={backgroundColor}>
      <CopyOverlay
        backgroundColor={backgroundColor}
        className={`${isCopied ? 'show' : ''}`}
      />

      <ColorBoxContent>
        <CopyContainer>
          <BoxContent>
            <span>{colorName}</span>
          </BoxContent>

          <CopyButton onClick={handleCopy} >
            Copy
          </CopyButton>
        </CopyContainer>

        <SeeMoreText>More</SeeMoreText>
      </ColorBoxContent>
    </ColorBoxContainer>
  );
};

export default ColorBox;
