import React, {FC, useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useAuth} from '../../context/auth/auth_provider';
import {LoginRequired} from '../../components/LoginRequired/LoginRequired';
import {Props} from './WatchListScreen.type';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {ScreenContainer} from '../../components/ScreenContainer/ScreenContainer';
import {ListEmpty} from '../../components/listEmpty/ListEmpty';
import {useFavoriteList} from '../../hooks/useFavoriteList';
import {FavoriteListItem} from '../../components/FavoriteListItem/FavoriteListItem';

export const WatchListScreen: FC<Props> = ({navigation}) => {
  const {isLoggedIn} = useAuth();
  const {theme} = useCustomTheme();
  const {refetch, remove, data, isFetching} = useFavoriteList();

  const onRefresh = async () => {
    //TO FIX: remove method will cause entire FlatList to re-render.
    remove();
    await refetch();
  };

  const onPokemonPressed = (name: string) => {
    navigation.push('PokemonDetails', {name});
  };

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn)
    return (
      <ScreenContainer>
        <LoginRequired />
      </ScreenContainer>
    );
  return (
    <ScreenContainer>
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={isFetching}
            tintColor={theme.color.refreshControl}
          />
        }
        data={data?.data.map(item => item) ?? []}
        ListEmptyComponent={isFetching ? null : <ListEmpty />}
        renderItem={({item}) => (
          <FavoriteListItem
            name={item?.name ?? '-'}
            id={item?.id ?? '-'}
            types={item?.types ?? []}
            onPressed={onPokemonPressed}
          />
        )}
      />
    </ScreenContainer>
  );
};
