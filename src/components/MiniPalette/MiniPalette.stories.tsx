import { Box } from '@mui/system';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import MiniPalette from './MiniPalette';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Components/MiniPalette`,
  component: MiniPalette,
} as ComponentMeta<typeof MiniPalette>;

const Template: ComponentStory<typeof MiniPalette> = () => {
  return (
    <Box
      sx={{
        height: `14rem`,
        width: `18rem`,
      }}
    >
      <MiniPalette
        palette={seedPalettes[0]}
        handleClick={() => { }}
        removePalette={() => { }}
      />
    </Box>
  );
};

export const Default = Template.bind({});
