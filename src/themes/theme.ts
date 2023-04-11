import {AppColor} from '../utils/color';
import {AppFont} from '../utils/enums/font';
import {IAppTheme} from './theme.interface';

export class AppSpacing {
  static small = 5;
  static mediumSmall = 10;
  static medium = 15;
  static standard = 20;
  static large = 25;
}

export const APP_DEFAULT_THEME: IAppTheme = {
  name: 'light',
  color: {
    text: AppColor.black,
    primary: AppColor.white,
    background: AppColor.white,
    tabActive: AppColor.pattensBlue,
    tabInActive: AppColor.white,
  },

  spacing: {
    small: 5,
    medium: 15,
    large: 25,
  },

  fontSize: {
    small: 12,
    medium: 14,
    large: 16,
    xlarge: 22,
  },

  fontStyle: {
    regular: AppFont.PublicSans_Regular,
    bold: AppFont.PublicSans_Bold,
    italic: AppFont.PublicSans_Italic,
  },

  text: {
    bodySmall: {
      color: AppColor.black,
      fontSize: 12,
    },
    bodyMedium: {
      color: AppColor.black,
      fontSize: 14,
    },
    bodyLarge: {
      color: AppColor.black,
      fontSize: 16,
    },
    headerSmall: {
      color: AppColor.black,
      fontSize: 18,
    },
    headerMedium: {
      color: AppColor.black,
      fontSize: 20,
    },
    headerLarge: {
      color: AppColor.black,
      fontSize: 24,
    },
    titleLarge: {
      color: AppColor.black,
      fontSize: 40,
    },
  },
};

//TODO: Add AppPinkyTheme, AppSunnyTheme, AppDarkTheme...
