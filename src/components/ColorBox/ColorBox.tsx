import { StyledColorBox } from './ColorBox.styled';
import React from 'react';

type Props = {
  backgroundColor: string;
  colorName: string;
};

const ColorBox = ({ backgroundColor, colorName }: Props) => {
  return (
    <StyledColorBox backgroundColor={backgroundColor}>
      <span>{colorName}</span>
      <span>MORE</span>
    </StyledColorBox>
  );
};

export default ColorBox;
