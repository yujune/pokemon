import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {HomeStackParamList} from '../../navigators/home/HomeNavigator.type';
import {BottomTabBarParamList} from '../../navigators/bottom_navigation_bar/BottomTabBar.type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabBarParamList, 'PokemonList'>,
  NativeStackScreenProps<HomeStackParamList>
>;
