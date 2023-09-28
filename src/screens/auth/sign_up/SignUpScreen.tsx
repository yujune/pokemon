import React from 'react';
import {Image} from 'react-native';
import {POKEMON_LOGO} from '../../../assets';
import {useCustomTheme} from '../../../context/theme/theme_provider';
import {style} from './SignUpScreen.style';
import {SignUpForm} from './components/SignUpForm';
import {ScreenContainer} from '../../../components/ScreenContainer/ScreenContainer';

export const SignUpScreen = () => {
  const {theme} = useCustomTheme();
  return (
    <ScreenContainer>
      <Image
        resizeMode="contain"
        style={style.pokemonLogo}
        source={POKEMON_LOGO}
      />
      <SignUpForm />
    </ScreenContainer>
  );
};
