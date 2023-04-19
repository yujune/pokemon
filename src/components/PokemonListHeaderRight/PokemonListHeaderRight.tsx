import React, {FC} from 'react';
import {Image, Pressable} from 'react-native';
import {SEARCH_ICON} from '../../assets';
import {style} from './PokemonListHeaderRight.style';
import {Props} from './PokemonListHeaderRight.type';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppColor} from '../../utils/color';

export const PokemonListHeaderRight: FC<Props> = ({
  onSearchPressed,
  onSettingPressed,
}) => {
  return (
    <Pressable style={style.headerRight} onPress={onSearchPressed}>
      <Image style={style.image} source={SEARCH_ICON} />
      <Icon
        name="settings-outline"
        size={25}
        color={AppColor.dawn}
        onPress={onSettingPressed}
      />
    </Pressable>
  );
};
