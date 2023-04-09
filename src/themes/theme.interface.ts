import {ColorValue} from 'react-native';
import {AppFont} from '../utils/enums/font';

export type ThemeType = 'light' | 'dark';

export interface IAppTheme {
  name: ThemeType;
  color: {
    primary?: ColorValue;
    secondary?: ColorValue;
    background?: ColorValue;
    text?: ColorValue;
    inputBorder?: ColorValue;
    inputBackground?: ColorValue;
    bottomTabActiveColor?: ColorValue;
    bottomTabInActiveColor?: ColorValue;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };

  fontSize: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };

  fontStyle: {
    regular: AppFont;
    bold: AppFont;
    italic: AppFont;
  };
}
