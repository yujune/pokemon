import React, {FC, createContext, useContext, useState} from 'react';
import {IThemProvider, IThemeContext} from './them_provider.interface';
import {APP_DARK_THEME, APP_DEFAULT_THEME} from '../../themes/theme';
import {ThemeType} from '../../themes/theme.interface';

export const ThemeContext = createContext<IThemeContext>({
  theme: APP_DEFAULT_THEME,
  toggleTheme: () => {},
});

export const ThemeProvider: FC<IThemProvider> = ({children}) => {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  const toggleTheme = (type: ThemeType) => {
    if (themeType === type) {
      return;
    }
    setThemeType(type);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeType === 'light' ? APP_DEFAULT_THEME : APP_DARK_THEME,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext == null) {
    throw new Error('useCustomTheme() called outside of a ThemeProvider');
  }
  return themeContext;
};
