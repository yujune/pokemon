import {ButtonProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type Props = {
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
} & ButtonProps;
