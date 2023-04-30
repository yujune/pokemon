import {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {LoadingIndicator} from '../../../src/components/loading/LoadingIndicator';

type Story = StoryObj<typeof LoadingIndicator>;

const meta: Meta<typeof LoadingIndicator> = {
  title: 'LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    notes: `
## LoadingIndicator

### Example

<LoadingIndicator size="large"/>

### Description

Display loading indicator when loading data.

### Reference

- [note example](https://github.com/storybookjs/react-native/blob/d26ba6bed6f3f8367419b488585dac6c5625ea51/examples/expo-example/components/NotesExample/NotesExample.stories.tsx).

`,
  },
  args: {
    size: 'large',
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

export const Large: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
