import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {InfoItem} from '../../../src/components/InfoItem/InfoItem';
import {View} from 'react-native';

const directions = {vertical: 'vertical', horizontal: 'horizontal'};

type Story = StoryObj<typeof InfoItem>;

const meta: Meta<typeof InfoItem> = {
  title: 'InfoItem',
  component: InfoItem,
  parameters: {
    notes: `
## InfoItem

### Example

<InfoItem label="height" value="120kg"/>

### Description

To display the information.

### Reference

- [note example](https://github.com/storybookjs/react-native/blob/d26ba6bed6f3f8367419b488585dac6c5625ea51/examples/expo-example/components/NotesExample/NotesExample.stories.tsx).

`,
  },
  args: {
    label: 'height',
    value: '50kg',
  },
  argTypes: {
    direction: {
      options: Object.values(directions),
      defaultValue: directions.vertical,
      control: {
        type: 'select',
        labels: {
          [directions.vertical]: 'vertical',
          [directions.horizontal]: 'horizontal',
        },
      },
    },
    containerStyle: {
      control: {type: 'object'},
    },
    labelStyle: {
      control: {type: 'object'},
    },
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Basic: Story = {};
