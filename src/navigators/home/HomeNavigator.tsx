import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonListScreen} from '../../screens/pokemon_list_screen/PokemonListScreen';
import {HomeStackParamList} from './HomeNavigator.type';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonListScreen"
        component={PokemonListScreen}
        options={() => ({headerTitle: 'Pokemon'})}
      />
    </Stack.Navigator>
  );
};
