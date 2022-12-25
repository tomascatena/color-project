import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewPalettePage from './NewPalettePage';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Pages/NewPalettePage`,
  component: NewPalettePage,
} as ComponentMeta<typeof NewPalettePage>;

const Template: ComponentStory<typeof NewPalettePage> = (args) => <NewPalettePage {...args} />;

export const Default = Template.bind({});

Default.args = {
  savePalette: () => { },
  palettes: seedPalettes,
};
