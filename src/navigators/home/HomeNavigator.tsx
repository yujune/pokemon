import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonListScreen} from '../../screens/pokemon_list/PokemonListScreen';
import {HomeStackParamList} from './HomeNavigator.type';
import {PokemonDetailsScreen} from '../../screens/pokemon_details/PokemonDetailsScreen';
import {SearchScreen} from '../../screens/search/SearchScreen';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {SettingScreen} from '../../screens/setting/SettingScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  const {theme} = useCustomTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={() => ({
          headerTitle: 'Pokemon',
          headerTintColor: theme.color.text as string,
          headerStyle: {backgroundColor: theme.color.background as string},
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
          headerTintColor: theme.color.text as string,
          headerStyle: {backgroundColor: theme.color.background as string},
        })}
      />
    </Stack.Navigator>
  );
};
