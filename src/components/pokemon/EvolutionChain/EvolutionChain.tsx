import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {FAST_FORWARD_ICON} from '../../../assets';
import {PokemonListItem} from '../PokemonListItem';
import {Props} from './EvolutionChain.type';
import {style} from './EvolutionChain.style';
import {useCustomTheme} from '../../../context/theme/theme_provider';

export const EvolutionChain: FC<Props> = ({chain}) => {
  const {theme} = useCustomTheme();
  const minLevel = chain[1].evolution_details?.[0]?.min_level;
  return (
    <View style={style.row}>
      <PokemonListItem
        key={chain[0].species.name}
        containerStyle={style.evolutionItem}
        name={chain[0].species.name ?? ''}
      />
      <View style={style.fastForwardIcon}>
        <Image source={FAST_FORWARD_ICON} />
        {minLevel && (
          <Text style={theme.text?.bodySmall}>{`Level ${minLevel}`}</Text>
        )}
      </View>
      <PokemonListItem
        key={chain[1].species.name}
        containerStyle={style.evolutionItem}
        name={chain[1].species.name ?? ''}
      />
    </View>
  );
};
