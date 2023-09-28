import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Pressable, Text, View} from 'react-native';
import {style} from './HeaderBar.style';
import {Props} from './HeaderBar.type';
import {useCustomTheme} from '../../context/theme/theme_provider';
import Icon from 'react-native-vector-icons/AntDesign';
import {useFavorite} from '../../hooks/useFavorite';
import {useAuth} from '../../context/auth/auth_provider';
import {LoadingIndicator} from '../loading/LoadingIndicator';

export const HeaderBar: FC<Props> = ({
  title,
  pokemonName,
  pokemonId,
  types,
}) => {
  const {theme} = useCustomTheme();
  const {isLoggedIn} = useAuth();
  const navigation = useNavigation();
  const {isFavoriteQuery, addToFavoriteMutation, deleteFavoriteMutation} =
    useFavorite(pokemonId, pokemonName, types);
  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const isFavorite = isFavoriteQuery.data?.data;

  const onFavoritePressed = () => {
    if (isFavorite) {
      deleteFavoriteMutation.mutate();
    } else {
      addToFavoriteMutation.mutate();
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      isFavoriteQuery.refetch();
    }
  }, []);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[
        style.headerContainer,
        {backgroundColor: theme.color.background},
      ]}>
      <View style={style.headerWrapper}>
        <Pressable onPress={goBack}>
          <Image
            style={[style.headerImage, {tintColor: theme.color.text}]}
            resizeMode="contain"
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png',
            }}
          />
        </Pressable>
        <Text
          style={[
            style.headerText,
            {color: theme.color.text},
            theme.text?.headerMedium,
          ]}>
          {title}
        </Text>

        {isLoggedIn && (
          <Icon
            style={{color: isFavorite ? theme.color.primary : theme.color.icon}}
            name="heart"
            size={20}
            onPress={onFavoritePressed}
          />
        )}
      </View>
      {(addToFavoriteMutation.isLoading ||
        deleteFavoriteMutation.isLoading) && <LoadingIndicator />}
    </SafeAreaView>
  );
};
