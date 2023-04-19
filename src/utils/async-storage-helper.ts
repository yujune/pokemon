import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeType} from '../themes/theme.interface';

export class AsyncStorageHelper {
  static themeKey: string = 'theme';

  static setTheme = (theme: ThemeType): Promise<void> => {
    return AsyncStorage.setItem(this.themeKey, theme);
  };

  static getTheme = (): Promise<string | null> => {
    return AsyncStorage.getItem(this.themeKey);
  };
}
