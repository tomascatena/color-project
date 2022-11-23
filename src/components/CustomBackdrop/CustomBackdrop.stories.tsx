import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomBackdrop from './CustomBackdrop';
import React from 'react';

export default {
  title: `UI/CustomBackdrop`,
  component: CustomBackdrop,
} as ComponentMeta<typeof CustomBackdrop>;

const Template: ComponentStory<typeof CustomBackdrop> = (args) => <CustomBackdrop {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
