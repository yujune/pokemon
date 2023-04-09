import {AppColor} from '../utils/color';
import {AppFont} from '../utils/enums/font';
import {IAppTheme} from './theme.interface';

export const APP_DEFAULT_THEME: IAppTheme = {
  name: 'light',
  color: {
    text: AppColor.black,
    primary: AppColor.white,
    background: AppColor.white,
  },

  spacing: {
    small: 5,
    medium: 15,
    large: 25,
  },

  fontSize: {
    small: 11,
    medium: 15,
    large: 18,
    xlarge: 22,
  },

  fontStyle: {
    regular: AppFont.PublicSans_Regular,
    bold: AppFont.PublicSans_Bold,
    italic: AppFont.PublicSans_Italic,
  },
};

//TODO: Add AppPinkyTheme, AppSunnyTheme, AppDarkTheme...
