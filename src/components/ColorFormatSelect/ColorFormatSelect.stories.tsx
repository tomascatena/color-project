import { COLOR_FORMATS, ColorFormat } from '../../constants/colors';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ColorFormatSelect from './ColorFormatSelect';
import React from 'react';

export default {
  title: `Components/ColorFormatSelect`,
  component: ColorFormatSelect,
} as ComponentMeta<typeof ColorFormatSelect>;

const Template: ComponentStory<typeof ColorFormatSelect> = () => {
  const [colorFormat, setColorFormat] = React.useState<ColorFormat>(COLOR_FORMATS.hex.name);

  return (
    <ColorFormatSelect
      colorFormat={colorFormat}
      setColorFormat={setColorFormat}
      setIsSnackbarOpen={() => { }}
    />
  );
};

export const Default = Template.bind({});
