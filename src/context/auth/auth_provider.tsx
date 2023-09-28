import React, {FC, createContext, useContext, useEffect, useState} from 'react';
import {IAuthContext, IAuthProvider} from './auth_provider.interface';
import {SecureStorageHelper} from '../../utils/secure-storage-helper';

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: FC<IAuthProvider> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (token: string, refreshToken: string) => {
    SecureStorageHelper.setAccessToken(token);
    SecureStorageHelper.setRefreshToken(refreshToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    SecureStorageHelper.removeAccessToken();
    SecureStorageHelper.removeRefreshToken();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (authContext == null) {
    throw new Error('useAuth() called outside of a AuthProvider');
  }
  return authContext;
};
