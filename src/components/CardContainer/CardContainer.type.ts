import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
};
