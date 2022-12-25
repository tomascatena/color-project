import { Box } from '@mui/system';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import React from 'react';
import SingleColorShades from './SingleColorShades';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Components/SingleColorShades`,
  component: SingleColorShades,
} as ComponentMeta<typeof SingleColorShades>;

const Template: ComponentStory<typeof SingleColorShades> = (args) => {
  return (
    <Box
      sx={{
        display: `flex`,
        height: `100vh`,
      }}
    >
      <SingleColorShades {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  colorId: `red`,
  colorFormat: `hex`,
  shouldPlaySound: true,
  palette: seedPalettes[0],
};
