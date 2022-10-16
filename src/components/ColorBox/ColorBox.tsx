import {
  BoxContent,
  ColorBoxContainer,
  CopyButton,
  CopyMessage,
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
  const COPY_MESSAGES = ['Copied!', 'Right One!', 'Paste Me!', 'It\'ll Rock!'];

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
        className={`${isCopied ? 'showCopyOverlay' : ''}`}
      />

      <CopyMessage className={`${isCopied ? 'showCopyMessage' : ''}`}>
        <h1>{COPY_MESSAGES[Math.floor(Math.random() * COPY_MESSAGES.length)]}</h1>

        <p>{backgroundColor}</p>
      </CopyMessage>

      <article>
        <div>
          <BoxContent>
            <span>{colorName}</span>
          </BoxContent>

          <CopyButton onClick={handleCopy} >
            Copy
          </CopyButton>
        </div>

        <SeeMoreText>More</SeeMoreText>
      </article>
    </ColorBoxContainer>
  );
};

export default ColorBox;
