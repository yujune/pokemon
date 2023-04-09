import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {Props} from './PokemonListItem.interface';
import {style} from './PokemonListItem.style';
import {getPokemonImageUrl} from '../../utils/general-helper';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const PokemonListItem: FC<Props> = ({name}) => {
  const {
    theme: {color},
  } = useCustomTheme();
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        resizeMode="contain"
        source={{uri: getPokemonImageUrl(name)}}
      />
      <Text style={[style.label, {color: color.text}]}>{name}</Text>
    </View>
  );
};
