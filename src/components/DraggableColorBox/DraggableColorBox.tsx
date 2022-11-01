import { DraggableColorBoxContainer } from './DraggableColorBox.styled';
import React from 'react';

type Props = {
  color: {
    color: string;
    name: string;
  };
};

const DraggableColorBox = ({ color }: Props) => {
  return (
    <DraggableColorBoxContainer color={color.color}>
      {color.name}
    </DraggableColorBoxContainer>
  );
};

export default DraggableColorBox;
