import React, {FC} from 'react';
import {View} from 'react-native';
import {style} from './PokemonStatsScreen.style';
import {useQueryClient} from '@tanstack/react-query';
import {Pokedex} from '../../models/pokemon/pokedex';
import {AxiosResponse} from 'axios';
import {StatsListItem} from '../../components/StatsListItem/StatsListItem';

export const PokemonStatsScreen: FC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AxiosResponse<Pokedex, any>>([
    'pokemonDetails',
  ]);
  return (
    <View style={style.contentContainer}>
      {data?.data.stats.map((stat, index) => {
        return <StatsListItem key={index.toString()} stat={stat} />;
      })}
    </View>
  );
};
