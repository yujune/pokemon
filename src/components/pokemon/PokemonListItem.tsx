import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {Props} from './PokemonListItem.interface';
import {style} from './PokemonListItem.style';
import {getPokemonImageUrlFromId, isSvgUrl} from '../../utils/general-helper';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {SvgUri} from 'react-native-svg';
import {CustomImage} from '../CustomImage/CustomImage';

export const PokemonListItem: FC<Props> = ({
  id,
  name,
  customUrl,
  onPressed,
  containerStyle,
}) => {
  const {
    theme: {color},
  } = useCustomTheme();

  const url =
    customUrl !== undefined ? customUrl : getPokemonImageUrlFromId(id);

  return (
    <Pressable
      style={[style.container, containerStyle]}
      onPress={() => {
        onPressed?.(name);
      }}>
      {isSvgUrl(url) ? (
        <SvgUri style={style.image} width={100} height={100} uri={url} />
      ) : (
        <CustomImage
          style={style.image}
          resizeMode="contain"
          source={{
            uri: url,
          }}
        />
      )}
      <Text style={[style.label, {color: color.text}]}>{name}</Text>
    </Pressable>
  );
};
