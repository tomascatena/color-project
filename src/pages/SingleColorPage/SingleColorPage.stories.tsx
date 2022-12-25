import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SingleColorPage from './SingleColorPage';
import seedPalettes from '@/data/seedPalettes';

const MOCK_PALETTE = seedPalettes[0];

export default {
  title: `Pages/SingleColorPage`,
  component: SingleColorPage,
  argTypes: {
    colorId: {
      control: {
        type: `select`,
        options: MOCK_PALETTE.colors.map(color => color.name.toLowerCase()),
      },
    },
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    },
  },
} as ComponentMeta<typeof SingleColorPage>;

const Template: ComponentStory<typeof SingleColorPage> = (args) => <SingleColorPage {...args} />;

export const Default = Template.bind({});

Default.args = {
  colorId: MOCK_PALETTE.colors[0].name.toLowerCase(),
  palette: MOCK_PALETTE,
};
