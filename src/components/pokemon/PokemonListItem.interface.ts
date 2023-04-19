import {StyleProp, ViewStyle} from 'react-native';

export interface Props {
  name: string;
  id: string;
  customUrl?: string;
  onPressed?: (name: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}
