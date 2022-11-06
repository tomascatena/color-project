import { ColorDefinition } from '@/typings/typings';
import { DraggableColorBoxContainer } from './DraggableColorBox.styled';
import React from 'react';

type Props = {
  color: ColorDefinition;
};

const DraggableColorBox = ({ color }: Props) => {
  return (
    <DraggableColorBoxContainer color={color.color}>
      {color.name}
    </DraggableColorBoxContainer>
  );
};

export default DraggableColorBox;
