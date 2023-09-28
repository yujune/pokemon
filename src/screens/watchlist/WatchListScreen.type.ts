import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabBarParamList} from '../../navigators/bottom_navigation_bar/BottomTabBar.type';
import {HomeStackParamList} from '../../navigators/home/HomeNavigator.type';

export type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabBarParamList, 'WatchList'>,
  NativeStackScreenProps<HomeStackParamList>
>;
