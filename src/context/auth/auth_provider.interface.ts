import {ReactNode} from 'react';

export interface IAuthContext {
  isLoggedIn: boolean;
  login: (token: string, refreshToken: string) => void;
  logout: () => void;
}

export interface IAuthProvider {
  children: ReactNode;
}
