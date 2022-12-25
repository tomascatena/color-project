import { Box } from '@mui/system';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import GoBackBox from './GoBackBox';
import React from 'react';

export default {
  title: `Components/GoBackBox`,
  component: GoBackBox,
} as ComponentMeta<typeof GoBackBox>;

const Template: ComponentStory<typeof GoBackBox> = () => {
  return (
    <Box
      sx={{
        height: `14rem`,
        width: `12rem`,
      }}
    >
      <GoBackBox
        backgroundColor='#F44336'
        paletteId='1'
      />
    </Box>
  );
};

export const Default = Template.bind({});
