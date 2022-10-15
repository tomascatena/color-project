import { BoxContent, CopyButton, CopyContainer, SeeMoreText, StyledColorBox } from './ColorBox.styled';
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
    <StyledColorBox backgroundColor={backgroundColor}>
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
    </StyledColorBox>
  );
};

export default ColorBox;
