import { ComponentMeta, ComponentStory } from '@storybook/react';
import PalettePage from './PalettePage';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Pages/PalettePage`,
  component: PalettePage,
} as ComponentMeta<typeof PalettePage>;

const Template: ComponentStory<typeof PalettePage> = (args) => <PalettePage {...args} />;

export const Default = Template.bind({});

Default.args = {
  palette: seedPalettes[0],
};
