import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {CardContainer} from '../../../src/components/CardContainer/CardContainer';
import {Text} from 'react-native';

type Story = StoryObj<typeof CardContainer>;

const meta: Meta<typeof CardContainer> = {
  title: 'CardContainer',
  component: CardContainer,
  parameters: {
    notes: `
## CardContainer

### Example

<CardContainer> 
    <Text>Hello World</Text> 
</CardContainer>

### Description

To add a card container to components.

### Reference

- [note example](https://github.com/storybookjs/react-native/blob/d26ba6bed6f3f8367419b488585dac6c5625ea51/examples/expo-example/components/NotesExample/NotesExample.stories.tsx).

`,
  },
  args: {
    children: <Text>Hello World</Text>,
    containerStyle: {
      margin: 15,
    },
  },
  argTypes: {
    containerStyle: {
      control: {type: 'object'},
    },
  },
};

export default meta;

export const Basic: Story = {};
