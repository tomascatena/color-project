import { ColorDefinition } from '@/typings/typings';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '@/components/NewPalette/DraggableColorBox/DraggableColorBox';
import React from 'react';

interface Props {
  colors: ColorDefinition[];
  deleteColor: (colorName: string) => void;
};

const DraggableColorList = ({
  colors,
  deleteColor,
}: Props) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
      }}
    >
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          key={color.name}
          color={color}
          deleteColor={deleteColor}
        />
      ))}
    </div>
  );
};

export default SortableContainer<Props>(DraggableColorList);
