import {NavigatorScreenParams} from '@react-navigation/native';
import {BottomTabBarParamList} from '../bottom_navigation_bar/BottomTabBar.type';

export type HomeStackParamList = {
  //TODO: To be moved to other files.
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  PokemonDetails: {
    name: string;
  };
  Search: undefined;
  Settings: undefined;
};
