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

export class AppFontSize {
  static small = 12;
  static medium = 14;
  static large = 16;
  static xlarge = 22;
}

export const APP_DEFAULT_THEME: IAppTheme = {
  name: 'light',
  color: {
    text: AppColor.black,
    primary: AppColor.deepSkyBlue,
    background: AppColor.white,
    tabActive: AppColor.pattensBlue,
    tabInActive: AppColor.white,
    tabLabelActive: AppColor.black,
    progress: AppColor.deepSkyBlue,
    progressBorder: AppColor.deepSkyBlue,
    border: AppColor.seaShell,
    inputBorder: AppColor.seaShell,
    shadow: AppColor.black,
    icon: AppColor.dawn,
    refreshControl: AppColor.cloud,
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
export const APP_DARK_THEME: IAppTheme = {
  name: 'dark',
  color: {
    text: AppColor.white,
    primary: AppColor.deepSkyBlue,
    background: AppColor.black,
    tabActive: AppColor.pattensBlue,
    tabInActive: AppColor.white,
    tabLabelActive: AppColor.black,
    progress: AppColor.deepSkyBlue,
    progressBorder: AppColor.deepSkyBlue,
    border: AppColor.seaShell,
    inputBorder: AppColor.seaShell,
    shadow: AppColor.white,
    icon: AppColor.white,
    refreshControl: AppColor.white,
  },
  fontStyle: {
    regular: AppFont.PublicSans_Regular,
    bold: AppFont.PublicSans_Bold,
    italic: AppFont.PublicSans_Italic,
  },

  text: {
    bodySmall: {
      color: AppColor.white,
      fontSize: 12,
    },
    bodyMedium: {
      color: AppColor.white,
      fontSize: 14,
    },
    bodyLarge: {
      color: AppColor.white,
      fontSize: 16,
    },
    headerSmall: {
      color: AppColor.white,
      fontSize: 18,
    },
    headerMedium: {
      color: AppColor.white,
      fontSize: 20,
    },
    headerLarge: {
      color: AppColor.white,
      fontSize: 24,
    },
    titleLarge: {
      color: AppColor.white,
      fontSize: 40,
    },
  },
};
