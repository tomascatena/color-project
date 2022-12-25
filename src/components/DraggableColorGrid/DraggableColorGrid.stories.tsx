import { Box } from '@mui/system';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import { arrayMoveImmutable } from '@/utils/arrayMove/arrayMove';
import DraggableColorGrid from './DraggableColorGrid';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Components/DraggableColorGrid`,
  component: DraggableColorGrid,
} as ComponentMeta<typeof DraggableColorGrid>;

const Template: ComponentStory<typeof DraggableColorGrid> = () => {
  const [colors, setColors] = React.useState(seedPalettes[0].colors);

  const deleteColor = (colorName: string) => {
    setColors(colors.filter(({ name }) => name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number; }) => {
    setColors(arrayMoveImmutable(colors, oldIndex, newIndex));
  };

  return (
    <Box
      sx={{
        display: `flex`,
        height: `100vh`,
      }}
    >
      <DraggableColorGrid
        axis='xy'
        colors={colors}
        deleteColor={deleteColor}
        drawerWidth={360}
        isDrawerOpen={false}
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      />
    </Box>
  );
};

export const Default = Template.bind({});
