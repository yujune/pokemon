import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {PokemonListItem} from '../PokemonListItem';
import {Props} from './EvolutionChain.type';
import {style} from './EvolutionChain.style';
import {useCustomTheme} from '../../../context/theme/theme_provider';
import {extractIdFromUrl} from '../../../utils/general-helper';
import Icon from 'react-native-vector-icons/AntDesign';

export const EvolutionChain: FC<Props> = ({chain}) => {
  const {theme} = useCustomTheme();
  const minLevel = chain[1].evolution_details?.[0]?.min_level;
  return (
    <View style={style.row}>
      <PokemonListItem
        key={chain[0].species.name}
        containerStyle={style.evolutionItem}
        name={chain[0].species.name ?? ''}
        id={extractIdFromUrl(chain[0].species.url) ?? ''}
      />
      <View style={style.fastForwardContainer}>
        <Icon
          style={[style.fastForwardIcon, {color: theme.color.icon}]}
          name="forward"
          size={20}
        />
        {minLevel && (
          <Text style={theme.text?.bodySmall}>{`Level ${minLevel}`}</Text>
        )}
      </View>
      <PokemonListItem
        key={chain[1].species.name}
        containerStyle={style.evolutionItem}
        name={chain[1].species.name ?? ''}
        id={extractIdFromUrl(chain[1].species.url) ?? ''}
      />
    </View>
  );
};
