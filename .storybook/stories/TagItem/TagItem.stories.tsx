import React from 'react';
import {View} from 'react-native';
import {TagItem} from '../../../src/components/tagItem/TagItem';
import {Meta, StoryObj} from '@storybook/react';

type Story = StoryObj<typeof TagItem>;

const meta: Meta<typeof TagItem> = {
  title: 'TagItem',
  component: TagItem,
  parameters: {
    notes: `
## TagItem

### Example

<TagItem color="red"/>

### Description

Used to indicate the type of an item.

### Reference

- [note example](https://github.com/storybookjs/react-native/blob/d26ba6bed6f3f8367419b488585dac6c5625ea51/examples/expo-example/components/NotesExample/NotesExample.stories.tsx).

`,
  },
  args: {
    label: 'Fire',
    color: 'red',
    labelColor: 'white',
  },
  argTypes: {
    labelStyle: {
      control: {type: 'object'},
    },
    tagContainerStyle: {
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

export const TagList: Story = {
  name: 'Tag List',
  render: () => (
    <View style={{flexDirection: 'row'}}>
      <TagItem label="Fire" tagContainerStyle={{backgroundColor: 'red'}} />
      <TagItem label="Water" tagContainerStyle={{backgroundColor: 'blue'}} />
      <TagItem label="Poison" tagContainerStyle={{backgroundColor: 'purple'}} />
    </View>
  ),
};
