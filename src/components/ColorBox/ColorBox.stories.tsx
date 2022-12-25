import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ColorBox from './ColorBox';
import React from 'react';

export default {
  title: `Components/ColorBox`,
  component: ColorBox,
} as ComponentMeta<typeof ColorBox>;

const Template: ComponentStory<typeof ColorBox> = (args) => {
  return (
    <Box
      sx={{
        width: `16rem`,
        height: `12rem`,
      }}
    >
      <ColorBox {...args} />
    </Box>
  );
};

export const DarkBox = Template.bind({});
DarkBox.args = {
  backgroundColor: `#2a2e64`,
  colorId: `DeepKoamaru500`,
  colorName: `DeepKoamaru 500`,
  isColorShade: false,
  paletteId: `flat-ui-colors-aussie`,
  shouldPlaySound: true,
};

export const LightBox = Template.bind({});
LightBox.args = {
  backgroundColor: `#d7f1f3`,
  colorId: `CoastalBreeze500`,
  colorName: `CoastalBreeze 500`,
  isColorShade: false,
  paletteId: `flat-ui-colors-aussie`,
  shouldPlaySound: true,
};
