import EncryptedStorage from 'react-native-encrypted-storage';

export class SecureStorageHelper {
  static accessTokenKey: string = 'accessToken';
  static refreshTokenKey: string = 'refreshToken';

  static setAccessToken = (token: string): Promise<void> => {
    return EncryptedStorage.setItem(this.accessTokenKey, token);
  };

  static removeAccessToken = (): Promise<void> => {
    return EncryptedStorage.removeItem(this.accessTokenKey);
  };

  static getAccessToken = (): Promise<string | null> => {
    return EncryptedStorage.getItem(this.accessTokenKey);
  };

  static setRefreshToken = (token: string): Promise<void> => {
    return EncryptedStorage.setItem(this.refreshTokenKey, token);
  };

  static removeRefreshToken = (): Promise<void> => {
    return EncryptedStorage.removeItem(this.refreshTokenKey);
  };

  static getRefreshToken = (): Promise<string | null> => {
    return EncryptedStorage.getItem(this.refreshTokenKey);
  };
}
