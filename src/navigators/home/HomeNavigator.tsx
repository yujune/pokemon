import React from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {HomeStackParamList} from './HomeNavigator.type';
import {PokemonDetailsScreen} from '../../screens/pokemon_details/PokemonDetailsScreen';
import {SearchScreen} from '../../screens/search/SearchScreen';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {SettingScreen} from '../../screens/setting/SettingScreen';
import {LoginScreen} from '../../screens/auth/login/LoginScreen';
import {SignUpScreen} from '../../screens/auth/sign_up/SignUpScreen';
import {BottomNavigationBar} from '../bottom_navigation_bar/BottomTabBar';
import {PokemonListHeaderRight} from '../../components/PokemonListHeaderRight/PokemonListHeaderRight';
import {Text} from 'react-native';
import {SettingHeaderRight} from '../../components/HeaderBar/SettingHeaderRight/SettingHeaderRight';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export const HomeNavigator = () => {
  const {theme} = useCustomTheme();

  const themeStackNavigationOptions: NativeStackNavigationOptions = {
    headerTintColor: theme.color.text as string,
    headerStyle: {backgroundColor: theme.color.background as string},
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomNavigationBar}
        options={({navigation}) => ({
          headerTitle: 'Pokemon',
          ...themeStackNavigationOptions,
          headerRight: () => (
            <PokemonListHeaderRight
              onSearchPressed={() => navigation.push('Search')}
              onSettingPressed={() => navigation.push('Settings')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetailsScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={() => ({
          headerTitle: 'Settings',
          ...themeStackNavigationOptions,
          headerRight: () => <SettingHeaderRight />,
        })}
      />
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => ({
            headerTitle: 'Login',
            ...themeStackNavigationOptions,
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={() => ({
            headerTitle: 'Sign Up',
            ...themeStackNavigationOptions,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
