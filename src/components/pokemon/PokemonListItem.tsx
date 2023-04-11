import React, {FC} from 'react';
import {Image, Pressable, Text} from 'react-native';
import {Props} from './PokemonListItem.interface';
import {style} from './PokemonListItem.style';
import {getPokemonImageUrl} from '../../utils/general-helper';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const PokemonListItem: FC<Props> = ({name, onPressed}) => {
  const {
    theme: {color},
  } = useCustomTheme();
  return (
    <Pressable
      style={style.container}
      onPress={() => {
        onPressed?.(name);
      }}>
      <Image
        style={style.image}
        resizeMode="contain"
        source={{uri: getPokemonImageUrl(name)}}
      />
      <Text style={[style.label, {color: color.text}]}>{name}</Text>
    </Pressable>
  );
};
