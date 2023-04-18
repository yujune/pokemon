import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {SEARCH_ICON} from '../../assets';
import {style} from './PokemonListHeaderRight.style';
import {Props} from './PokemonListHeaderRight.type';

export const PokemonListHeaderRight: FC<Props> = ({onSearchPressed}) => {
  return (
    <View style={style.headerRight}>
      <Pressable onPress={onSearchPressed}>
        <Image style={style.image} source={SEARCH_ICON} />
      </Pressable>
    </View>
  );
};
