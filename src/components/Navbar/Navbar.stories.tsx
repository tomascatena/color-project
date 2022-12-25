import { ColorFormat } from '@/constants/colors';
import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import Navbar from './Navbar';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

export default {
  title: `Components/Navbar`,
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
  const [level, setLevel] = React.useState(500);
  const [colorFormat, setColorFormat] = React.useState<ColorFormat>(`hex`);
  const [shouldPlaySound, setShouldPlaySound] = React.useState(true);

  return (
    <Navbar
      {...args}
      colorFormat={colorFormat}
      level={level}
      setColorFormat={setColorFormat}
      setLevel={setLevel}
      setShouldPlaySound={setShouldPlaySound}
      shouldPlaySound={shouldPlaySound}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  hasSlider: true,
  title: seedPalettes[0].paletteName,
};
