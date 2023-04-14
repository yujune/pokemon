import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {AppStyle} from '../../utils/global-style';
import {useGetPokemonEvolutionChain} from '../../hooks/useGetEvolutionChain';
import {Props} from './PokemonEvolutionScreen.type';
import {Chain} from '../../models/pokemon/evolution';
import {windowHeight} from '../../utils/constants';
import {LoadingIndicator} from '../../components/loading/LoadingIndicator';
import {AlertUtil} from '../../utils/alert';
import {ListEmpty} from '../../components/listEmpty/ListEmpty';
import {EvolutionChain} from '../../components/pokemon/EvolutionChain/EvolutionChain';

export const PokemonEvolutionScreen: FC<Props> = ({evolutionId}) => {
  const {data, isFetching, isError, error, getEvolutionChain} =
    useGetPokemonEvolutionChain(evolutionId);

  const [chainList, setChainList] = useState<Chain[][]>([]);

  useEffect(() => {
    if (data?.data != null) {
      const evolutionChain = getEvolutionChain(data?.data.chain);
      setChainList(evolutionChain);
    }
  }, [data?.data]);

  useEffect(() => {
    if (isError) {
      AlertUtil.showErrorAlert(error);
    }
  }, [isError, error]);

  if (isFetching) {
    return <LoadingIndicator />;
  }

  if (data?.data.chain?.evolves_to?.length === 0) {
    return <ListEmpty />;
  }

  return (
    <View style={[AppStyle.screenContainer, {minHeight: windowHeight}]}>
      {chainList.map((subEvolutionList, i) => {
        return <EvolutionChain key={i.toString()} chain={subEvolutionList} />;
      })}
    </View>
  );
};
