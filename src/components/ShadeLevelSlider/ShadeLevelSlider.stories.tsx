import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import React from 'react';
import ShadeLevelSlider from './ShadeLevelSlider';

export default {
  title: `Components/ShadeLevelSlider`,
  component: ShadeLevelSlider,
} as ComponentMeta<typeof ShadeLevelSlider>;

const Template: ComponentStory<typeof ShadeLevelSlider> = (args) => {
  const [level, setLevel] = React.useState(500);

  return (
    <ShadeLevelSlider
      {...args}
      level={level}
      setLevel={setLevel}
    />
  );
};

export const Default = Template.bind({});
