import { Box } from '@mui/material';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import PaletteFooter from './PaletteFooter';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Components/PaletteFooter`,
  component: PaletteFooter,
} as ComponentMeta<typeof PaletteFooter>;

const Template: ComponentStory<typeof PaletteFooter> = (args) => {
  return (
    <Box sx={{ width: `100vw` }}>
      <PaletteFooter {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  palette: seedPalettes[0],
};
