import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type Props = {
  label: string;
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  direction?: 'vertical' | 'horizontal';
};
