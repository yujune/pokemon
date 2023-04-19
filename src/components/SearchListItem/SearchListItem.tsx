import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {style} from './SearchListItem.style';
import {Props} from './SearchListItem.type';
import {CustomImage} from '../CustomImage/CustomImage';
import {
  getPokemonImageUrl,
  getPokemonImageUrlFromId,
} from '../../utils/general-helper';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {POKEBALL_LOADING} from '../../assets';

export const SearchListItem: FC<Props> = ({name, id, onSearchItemPressed}) => {
  const {theme} = useCustomTheme();
  return (
    <Pressable
      style={style.container}
      onPress={() => {
        onSearchItemPressed?.(name);
      }}>
      <CustomImage
        style={style.image}
        loadingImageStyle={style.loadingImage}
        defaultSource={POKEBALL_LOADING}
        source={{uri: getPokemonImageUrlFromId(id)}}
      />
      <Text style={[style.name, theme.text?.bodyMedium]}>{name}</Text>
    </Pressable>
  );
};
