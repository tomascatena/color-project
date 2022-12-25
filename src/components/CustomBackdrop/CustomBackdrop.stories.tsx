import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomBackdrop from './CustomBackdrop';
import React from 'react';

export default {
  title: `Components/CustomBackdrop`,
  component: CustomBackdrop,
} as ComponentMeta<typeof CustomBackdrop>;

const Template: ComponentStory<typeof CustomBackdrop> = (args) => <CustomBackdrop {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
  loaderSize: 100,
  loaderThickness: 4,
  message: `Loading... Please wait.`,
  textVariant: `h4`,
};
