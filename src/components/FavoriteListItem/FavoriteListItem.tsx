import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Props} from './FavoriteListItem.type';
import {style} from './FavoriteListItem.style';
import {CustomImage} from '../CustomImage/CustomImage';
import {
  getPokemonImageUrlFromId,
  getTypeColor,
} from '../../utils/general-helper';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {TagItem} from '../tagItem/TagItem';
import {AppStyle} from '../../utils/global-style';

export const FavoriteListItem: FC<Props> = ({name, id, types, onPressed}) => {
  const {theme} = useCustomTheme();
  return (
    <Pressable style={style.container} onPress={() => onPressed?.(name)}>
      <View
        style={[
          style.roundedContainer,
          {
            backgroundColor: theme.color.background,
            shadowColor: theme.color.shadow,
          },
        ]}>
        <CustomImage
          style={style.image}
          resizeMode="contain"
          source={{
            uri: getPokemonImageUrlFromId(id),
          }}
        />
        <View style={style.infoContainer}>
          <View style={AppStyle.row}>
            {types.map((item, index) => (
              <TagItem
                key={index.toString()}
                tagContainerStyle={{
                  backgroundColor: getTypeColor(item),
                  marginBottom: 5,
                }}
                label={item}
              />
            ))}
          </View>
          <Text style={theme.text?.bodyLarge}>{name.toUpperCase()}</Text>
        </View>
      </View>
    </Pressable>
  );
};
