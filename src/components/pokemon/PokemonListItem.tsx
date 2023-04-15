import React, {FC} from 'react';
import {Image, Pressable, Text} from 'react-native';
import {Props} from './PokemonListItem.interface';
import {style} from './PokemonListItem.style';
import {getPokemonImageUrl, isSvgUrl} from '../../utils/general-helper';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {SvgUri} from 'react-native-svg';

export const PokemonListItem: FC<Props> = ({
  name,
  customUrl,
  onPressed,
  containerStyle,
}) => {
  const {
    theme: {color},
  } = useCustomTheme();

  const url = customUrl !== undefined ? customUrl : getPokemonImageUrl(name);

  return (
    <Pressable
      style={[style.container, containerStyle]}
      onPress={() => {
        onPressed?.(name);
      }}>
      {isSvgUrl(url) ? (
        <SvgUri style={style.image} width={100} height={100} uri={url} />
      ) : (
        <Image
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
