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
  isColorShade = false
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
    <ColorBoxContainer
      backgroundColor={backgroundColor}
      isColorShade={isColorShade}
    >
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
          <BoxContent>
            <span>{colorName}</span>
          </BoxContent>

          <CopyButton onClick={handleCopy}>
            Copy
          </CopyButton>
        </div>

        {
          !isColorShade && (
            <SeeMoreText onClick={() => navigate(`/palettes/${paletteId}/${colorId}`)}>
              More
            </SeeMoreText>
          )
        }
      </div>
    </ColorBoxContainer>
  );
};

export default ColorBox;
