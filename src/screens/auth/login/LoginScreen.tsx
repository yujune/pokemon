import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native';
import {style} from './LoginScreen.style';
import {POKEMON_LOGO} from '../../../assets';
import {LoginForm} from './components/LoginForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCustomTheme} from '../../../context/theme/theme_provider';
import {LoginProps} from './LoginScreen.type';

export const LoginScreen: FC<LoginProps> = () => {
  const {theme} = useCustomTheme();
  return (
    <ScrollView style={{backgroundColor: theme.color.background}}>
      <SafeAreaView>
        <View style={style.container}>
          <Image
            resizeMode="contain"
            style={style.pokemonLogo}
            source={POKEMON_LOGO}
          />
          <LoginForm />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
