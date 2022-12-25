import { Box } from '@mui/material';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import { generatePalette } from '@/utils/colorHelpers/colorHelpers';
import Palette from './Palette';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

const MOCK_PALETTE = generatePalette(seedPalettes[0]);

export default {
  title: `Components/Palette`,
  component: Palette,
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = (args) => {
  return (
    <Box
      sx={{
        display: `flex`,
        height: `100vh`,
      }}
    >
      <Palette {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  colorFormat: `hex`,
  level: 500,
  palette: MOCK_PALETTE,
  shouldPlaySound: true,
};
