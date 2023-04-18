import {ImageProps, ImageStyle, StyleProp} from 'react-native';

export interface Props extends ImageProps {
  loadingImageStyle?: StyleProp<ImageStyle>;
}
