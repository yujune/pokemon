import React, {FC, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {AppStyle} from '../../utils/global-style';
import {useGetPokemonEvolutionChain} from '../../hooks/useGetEvolutionChain';
import {Props} from './PokemonEvolutionScreen.type';
import {PokemonListItem} from '../../components/pokemon/PokemonListItem';
import {Chain} from '../../models/pokemon/evolution';
import {style} from './PokemonEvolutionScreen.style';
import {windowHeight} from '../../utils/constants';
import {FAST_FORWARD_ICON} from '../../assets';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {LoadingIndicator} from '../../components/loading/LoadingIndicator';
import {AlertUtil} from '../../utils/alert';
import {ListEmpty} from '../../components/listEmpty/ListEmpty';

export const PokemonEvolutionScreen: FC<Props> = ({evolutionId}) => {
  const {theme} = useCustomTheme();
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
      <Text>Evolution Chain</Text>
      {chainList.map((subEvolutionList, i) => {
        return (
          <View
            key={i.toString()}
            style={[
              style.evolutionList,
              i !== subEvolutionList.length - 1 && style.border,
            ]}>
            {subEvolutionList.map((evolution, index) => {
              const minLevel = evolution.evolution_details?.[0]?.min_level;
              return (
                <>
                  {index === 1 && (
                    <View key={index.toString()} style={style.fastForwardIcon}>
                      <Image source={FAST_FORWARD_ICON} />
                      {minLevel && (
                        <Text
                          style={
                            theme.text?.bodySmall
                          }>{`Level ${evolution.evolution_details?.[0]?.min_level}`}</Text>
                      )}
                    </View>
                  )}
                  <PokemonListItem
                    key={index.toString()}
                    containerStyle={style.evolutionItem}
                    name={evolution.species.name ?? ''}
                  />
                </>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
