import { DraggableColorBoxContainer } from './DraggableColorBox.styled';
import React from 'react';

type Props = {
  color: string;
};

const DraggableColorBox = ({ color }: Props) => {
  return (
    <DraggableColorBoxContainer color={color}>Draggable Color Box</DraggableColorBoxContainer>
  );
};

export default DraggableColorBox;
