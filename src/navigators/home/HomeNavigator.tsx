import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonListScreen} from '../../screens/pokemon_list/PokemonListScreen';
import {HomeStackParamList} from './HomeNavigator.type';
import {PokemonDetailsScreen} from '../../screens/pokemon_details/PokemonDetailsScreen';
import {SearchScreen} from '../../screens/search/SearchScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={() => ({headerTitle: 'Pokemon'})}
      />
      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetailsScreen}
        options={({route}) => ({
          headerTitle: route.params.name,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={() => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
};
