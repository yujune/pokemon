import React, {FC, useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {PokemonListItem} from '../../components/pokemon/PokemonListItem';
import {LoadingIndicator} from '../../components/loading/LoadingIndicator';
import {style} from './PokemonListScreen.style';
import {useGetPokemonList} from '../../hooks/useGetPokemonList';
import {ListEmpty} from '../../components/listEmpty/ListEmpty';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {AlertUtil} from '../../utils/alert';
import {Props} from './PokemonListScreen.type';
import {defaultTake} from '../../utils/constants';
import {extractIdFromUrl} from '../../utils/general-helper';

export const PokemonListScreen: FC<Props> = ({navigation}) => {
  const {
    theme: {color},
  } = useCustomTheme();
  const {
    data,
    isInitialLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
    remove,
    isError,
    error,
  } = useGetPokemonList({defaultTake: defaultTake});

  const onRefresh = async () => {
    //TO FIX: remove method will cause entire FlatList to re-render.
    // remove();
    await refetch();
  };

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const onPokemonPressed = (name: string) => {
    navigation.push('PokemonDetails', {name});
  };

  useEffect(() => {
    if (isError) {
      AlertUtil.showErrorAlert(error);
    }
  }, [isError, error]);

  if (isInitialLoading) {
    console.log(isInitialLoading);
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      style={[style.container, {backgroundColor: color.background}]}
      numColumns={3}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isFetching}
          tintColor={color.refreshControl}
        />
      }
      data={data?.pages.flatMap(page => page?.data.results)}
      onEndReached={onEndReached}
      ListEmptyComponent={<ListEmpty />}
      ListFooterComponent={
        isFetchingNextPage ? (
          <LoadingIndicator size="small" loadingType="loadMore" />
        ) : null
      }
      renderItem={({item}) => (
        <PokemonListItem
          id={extractIdFromUrl(item?.url) ?? ''}
          name={item?.name ?? '-'}
          onPressed={onPokemonPressed}
        />
      )}
    />
  );
};
