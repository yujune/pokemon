import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

export const decorators = [withBackgrounds, Story => <Story />];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color|labelColor)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'plain',
    values: [
      {name: 'plain', value: 'white'},
      {name: 'dark', value: 'black'},
    ],
  },
};
