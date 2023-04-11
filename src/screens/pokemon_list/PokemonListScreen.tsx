import React, {FC, useEffect} from 'react';
import {FlatList} from 'react-native';
import {PokemonListItem} from '../../components/pokemon/PokemonListItem';
import {LoadingIndicator} from '../../components/loading/LoadingIndicator';
import {style} from './PokemonListScreen.style';
import {useGetPokemonList} from '../../hooks/useGetPokemonList';
import {ListEmpty} from '../../components/listEmpty/ListEmpty';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {AlertUtil} from '../../utils/alert';
import {Props} from './PokemonListScreen.type';

export const PokemonListScreen: FC<Props> = ({navigation}) => {
  const {
    theme: {color},
  } = useCustomTheme();
  const {
    data,
    isLoading,
    isRefetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
    remove,
    isError,
    error,
  } = useGetPokemonList();

  const onRefresh = async () => {
    //TO FIX: remove method will cause entire FlatList to re-render.
    remove();
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

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      style={[style.container, {backgroundColor: color.background}]}
      numColumns={3}
      onRefresh={onRefresh}
      refreshing={isRefetching}
      data={data?.pages.flatMap(page => page?.data.results)}
      onEndReached={onEndReached}
      ListEmptyComponent={<ListEmpty />}
      ListFooterComponent={
        isFetchingNextPage ? <LoadingIndicator size="small" /> : null
      }
      renderItem={({item}) => (
        <PokemonListItem
          name={item?.name ?? '-'}
          onPressed={onPokemonPressed}
        />
      )}
    />
  );
};
