import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type Props = {
  label: string;
  tagContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  color?: ColorValue;
  labelColor?: ColorValue;
};
