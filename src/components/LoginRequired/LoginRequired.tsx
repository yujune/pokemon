import React from 'react';
import {Text, View} from 'react-native';
import {ExpandedButton} from '../ExpandedButton/ExpandedButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigators/home/HomeNavigator.type';
import {LoginProps} from '../../screens/auth/login/LoginScreen.type';
import {style} from './LoginRequired.style';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const LoginRequired = () => {
  const {theme} = useCustomTheme();
  const navigation = useNavigation<LoginProps['navigation']>();

  const onLoginPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[style.container, {backgroundColor: theme.color.background}]}>
      <Text style={[style.loginLabel, {color: theme.color.text}]}>
        Please login to proceed
      </Text>
      <ExpandedButton title="Login" onPress={onLoginPressed} />
    </View>
  );
};
