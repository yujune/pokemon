import {Meta} from '@storybook/react';
import React from 'react';
import {LoadingImage} from '../../../src/components/LoadingImage/LoadingImage';
import {View} from 'react-native';
import {StoryObj} from '@storybook/react-native';

type Story = StoryObj<typeof LoadingImage>;

const meta: Meta<typeof LoadingImage> = {
  title: 'LoadingImage',
  component: LoadingImage,
  parameters: {
    notes: `
    ## LoadingImage
    
    ### Example
    
    <LoadingImage/> 
    
    ### Description
    
    To indicate the image is loading.
    
    ### Reference
    
    - [note example](https://github.com/storybookjs/react-native/blob/d26ba6bed6f3f8367419b488585dac6c5625ea51/examples/expo-example/components/NotesExample/NotesExample.stories.tsx).
    
    `,
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
