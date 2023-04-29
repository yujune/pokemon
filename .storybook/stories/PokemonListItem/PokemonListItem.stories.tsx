import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {PokemonListItem} from '../../../src/components/pokemon/PokemonListItem';
import {View} from 'react-native';

type Story = StoryObj<typeof PokemonListItem>;

const meta: Meta<typeof PokemonListItem> = {
  title: 'PokemonListItem',
  component: PokemonListItem,
  parameters: {
    notes: `
## PokemonListItem

### Example

<PokemonListItem name="Bulbasaur"/>

### Description

Display pokemon image and name.

### Reference

- [note example](https://github.com/storybookjs/react-native/blob/d26ba6bed6f3f8367419b488585dac6c5625ea51/examples/expo-example/components/NotesExample/NotesExample.stories.tsx).

`,
  },
  args: {
    name: 'Balbasaur',
    customUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  argTypes: {
    containerStyle: {
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
