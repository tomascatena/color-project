import { ComponentMeta, ComponentStory } from '@storybook/react';
import CircularLoader from './CircularLoader';
import React from 'react';

export default {
  title: `UI/CircularLoader`,
  component: CircularLoader,
} as ComponentMeta<typeof CircularLoader>;

const Template: ComponentStory<typeof CircularLoader> = (args) => <CircularLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 80,
  thickness: 4,
  duration: 800,
};
