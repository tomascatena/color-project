import { Box } from '@mui/system';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import { arrayMoveImmutable } from '@/utils/arrayMove/arrayMove';
import DraggableColorGrid from './DraggableColorGrid';
import React from 'react';

const MOCK_COLORS = [
  { name: `red`, color: `#F44336` },
  { name: `pink`, color: `#E91E63` },
  { name: `purple`, color: `#9C27B0` },
  { name: `deeppurple`, color: `#673AB7` },
  { name: `indigo`, color: `#3F51B5` },
  { name: `blue`, color: `#2196F3` },
  { name: `lightblue`, color: `#03A9F4` },
  { name: `cyan`, color: `#00BCD4` },
  { name: `teal`, color: `#009688` },
  { name: `green`, color: `#4CAF50` },
  { name: `lightgreen`, color: `#8BC34A` },
  { name: `lime`, color: `#CDDC39` },
  { name: `yellow`, color: `#FFEB3B` },
  { name: `amber`, color: `#FFC107` },
  { name: `orange`, color: `#FF9800` },
  { name: `deeporange`, color: `#FF5722` },
  { name: `brown`, color: `#795548` },
  { name: `grey`, color: `#9E9E9E` },
  { name: `bluegrey`, color: `#607D8B` },
];

export default {
  title: `Components/DraggableColorGrid`,
  component: DraggableColorGrid,
} as ComponentMeta<typeof DraggableColorGrid>;

const Template: ComponentStory<typeof DraggableColorGrid> = () => {
  const [colors, setColors] = React.useState(MOCK_COLORS);

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
