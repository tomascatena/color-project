import { ComponentMeta, ComponentStory } from '@storybook/react';
import PalettesListPage from './PalettesListPage';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Pages/PalettesListPage`,
  component: PalettesListPage,
} as ComponentMeta<typeof PalettesListPage>;

const Template: ComponentStory<typeof PalettesListPage> = (args) => <PalettesListPage {...args} />;

export const Default = Template.bind({});

Default.args = {
  palettes: seedPalettes,
  removePalette: () => { },
};
