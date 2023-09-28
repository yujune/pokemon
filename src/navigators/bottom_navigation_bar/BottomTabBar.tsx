import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PokemonListScreen} from '../../screens/pokemon_list/PokemonListScreen';
import {BottomTabBarParamList} from './BottomTabBar.type';
import Icon from 'react-native-vector-icons/AntDesign';
import {WatchListScreen} from '../../screens/watchlist/WatchListScreen';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {View} from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabBarParamList>();

export const BottomNavigationBar = () => {
  const {theme} = useCustomTheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.color.background?.toString(),
        tabBarInactiveBackgroundColor: theme.color.background?.toString(),
        headerBackgroundContainerStyle: {
          backgroundColor: theme.color.background,
        },
      }}>
      <BottomTab.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="WatchList"
        component={WatchListScreen}
        options={{
          tabBarLabel: 'WatchList',
          tabBarIcon: ({color, size}) => (
            <Icon name="hearto" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
