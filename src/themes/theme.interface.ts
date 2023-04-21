import {ColorValue, StyleProp, TextStyle} from 'react-native';
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
    tabActive?: ColorValue;
    tabInActive?: ColorValue;
    tabLabelActive?: ColorValue;
    tabLabelInActive?: ColorValue;
    progress?: ColorValue;
    progressBorder?: ColorValue;
    border?: ColorValue;
    shadow?: ColorValue;
    icon?: ColorValue;
    refreshControl?: ColorValue;
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

  text?: {
    bodySmall?: StyleProp<TextStyle>;
    bodyMedium?: StyleProp<TextStyle>;
    bodyLarge?: StyleProp<TextStyle>;
    headerSmall?: StyleProp<TextStyle>;
    headerMedium?: StyleProp<TextStyle>;
    headerLarge?: StyleProp<TextStyle>;
    titleLarge?: StyleProp<TextStyle>;
  };
}
