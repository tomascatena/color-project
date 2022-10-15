import {
  BoxContent,
  ColorBoxContainer,
  ColorBoxContent,
  CopyButton,
  CopyContainer,
  SeeMoreText
} from './ColorBox.styled';
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
  return (
    <ColorBoxContainer backgroundColor={backgroundColor}>
      <ColorBoxContent>
        <CopyContainer>
          <BoxContent>
            <span>{colorName}</span>
          </BoxContent>

          <CopyButton>
            Copy
          </CopyButton>
        </CopyContainer>

        <SeeMoreText>
          More
        </SeeMoreText>
      </ColorBoxContent>
    </ColorBoxContainer>
  );
};

export default ColorBox;
