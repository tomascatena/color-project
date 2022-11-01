import {
  BoxContent,
  ColorBoxContainer,
  CopyButton,
  CopyMessage,
  CopyOverlay,
  SeeMoreText
} from './ColorBox.styled';
import { useCopyTextToClipboard } from '@/hooks/useCopyTextToClipboard';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import chroma from 'chroma-js';

type Props = {
  /**
   * Background color of the color box
   */
  backgroundColor: string;
  /**
   * Name of the color
   */
  colorName: string;
  /**
   * Id of the palette
   */
  paletteId: string;
  /**
   * Id of the color
   */
  colorId: string;
  /**
   * Whether the box is used to display a color shade.
   */
  isColorShade?: boolean;
};

const ColorBox = ({
  backgroundColor,
  colorName,
  paletteId,
  colorId,
  isColorShade = false,
}: Props) => {
  const COPY_MESSAGES = ['Copied!', 'Right One!', 'Paste Me!', 'It\'ll Rock!'];

  const { isCopied, copyTextToClipboard } = useCopyTextToClipboard();

  const handleCopy = () => {
    copyTextToClipboard(backgroundColor);
  };

  React.useEffect(() => {
    document.body.style.overflow = isCopied ? 'hidden' : 'auto';
  }, [isCopied]);

  const navigate = useNavigate();

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

      <div>
        <div>
          <BoxContent isDarkColor={chroma(backgroundColor).luminance() <= 0.3}>
            <span>{colorName}</span>
          </BoxContent>

          <CopyButton
            onClick={handleCopy}
            isDarkColor={chroma(backgroundColor).luminance() <= 0.5}
          >
            Copy
          </CopyButton>
        </div>

        {
          !isColorShade && (
            <SeeMoreText
              isDarkColor={chroma(backgroundColor).luminance() <= 0.2}
              onClick={() => navigate(`/palettes/${paletteId}/${colorId}`)}
            >
              More
            </SeeMoreText>
          )
        }
      </div>
    </ColorBoxContainer >
  );
};

export default ColorBox;
