import React from 'react';
import {Meta} from '@storybook/react';
import {CustomImage} from '../../../src/components/CustomImage/CustomImage';
import {View} from 'react-native';
import {StoryObj} from '@storybook/react-native';

type Story = StoryObj<typeof CustomImage>;

const meta: Meta<typeof CustomImage> = {
  title: 'CustomImage',
  component: CustomImage,
  parameters: {
    notes: `
    ## CustomImage
    
    ### Example
    
    <CustomImage/> 
    
    ### Description
    
    To indicate the image is loading.
    
    ### Reference
    
    - [note example](https://github.com/storybookjs/react-native/blob/d26ba6bed6f3f8367419b488585dac6c5625ea51/examples/expo-example/components/NotesExample/NotesExample.stories.tsx).
    
    `,
  },
  args: {
    source: {
      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    style: {
      width: '75%',
      aspectRatio: 1,
      alignSelf: 'center',
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
