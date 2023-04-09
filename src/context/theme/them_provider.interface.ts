import {ReactNode} from 'react';
import {IAppTheme, ThemeType} from '../../themes/theme.interface';

export interface IThemeContext {
  theme: IAppTheme;
  toggleTheme: (type: ThemeType) => void;
}

export interface IThemProvider {
  children: ReactNode;
}
