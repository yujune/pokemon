import React from 'react';
import {Button, Text} from 'react-native';
import {style} from './SettingHeaderRight.style';
import {useAuth} from '../../../context/auth/auth_provider';
import {useNavigation} from '@react-navigation/native';
import {Props} from '../../../screens/setting/SettingScreen.type';
import {useCustomTheme} from '../../../context/theme/theme_provider';

export const SettingHeaderRight = () => {
  const {logout, isLoggedIn} = useAuth();
  const {theme} = useCustomTheme();
  const navigation = useNavigation<Props['navigation']>();

  const onLogoutPressed = () => {
    navigation.popToTop();
    logout();
  };

  if (isLoggedIn) {
    return (
      <Text style={style.label} onPress={onLogoutPressed}>
        Logout
      </Text>
    );
  }

  return (
    <Button
      color={theme.color.primary}
      title="Login"
      onPress={() => navigation.navigate('Login')}
    />
  );
};
