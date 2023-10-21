import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {useGetPokemonList} from '../../hooks/useGetPokemonList';
import {maxTake} from '../../utils/constants';
import {AlertUtil} from '../../utils/alert';
import {LoadingIndicator} from '../../components/loading/LoadingIndicator';
import {FlatList} from 'react-native';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {style} from './SearchScreen.style';
import {ListEmpty} from '../../components/listEmpty/ListEmpty';
import {SearchListItem} from '../../components/SearchListItem/SearchListItem';
import {Props} from './SearchScreen.type';
import {SearchHeader} from '../../components/SearchHeader/SearchHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSearch} from '../../hooks/useSearch';
import {Pokemon} from '../../models/pokemon/pokemon';
import {extractIdFromUrl} from '../../utils/general-helper';

export const SearchScreen: FC<Props> = ({navigation}) => {
  const {theme} = useCustomTheme();
  const flatListRef = useRef<FlatList<Pokemon | undefined>>(null);
  const {filterPokemonWithName} = useSearch();
  const [search, setSearch] = useState<string | null>(null);
  const [filterResult, setFilterResult] = useState<(Pokemon | undefined)[]>([]);
  const {data, isError, error, isLoading, remove, refetch, isRefetching} =
    useGetPokemonList({
      defaultTake: maxTake,
    });

  const onRefresh = async () => {
    //TO FIX: remove method will cause entire FlatList to re-render.
    remove();
    await refetch();
  };

  const onSearchItemPressed = (name: string) => {
    navigation.push('PokemonDetails', {name});
  };

  const onBackButtonPressed = () => {
    navigation.pop();
  };

  const updateSearch = (value: string) => {
    setSearch(value);
  };

  const dataList = useMemo(() => {
    if (data === undefined) {
      return [];
    }
    return data.pages.flatMap(page => page.data.results);
  }, [data]);

  const updateFilterList = () => {
    const list = filterPokemonWithName(search ?? '', dataList);
    setFilterResult(list);
  };

  useEffect(() => {
    //Initial load
    if (search === null) {
      updateFilterList();
      return;
    }
    const searchTimeout = setTimeout(() => {
      flatListRef.current?.scrollToOffset({animated: true, offset: 0});
      updateFilterList();
    }, 500);

    return () => clearTimeout(searchTimeout);
  }, [search, dataList]);

  useEffect(() => {
    if (isError) {
      AlertUtil.showErrorAlert(error);
    }
  }, [isError, error]);

  return (
    <SafeAreaView
      style={[style.container, {backgroundColor: theme.color.background}]}>
      {isLoading || isRefetching ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          ref={flatListRef}
          bounces={false}
          style={[style.container, {backgroundColor: theme.color.background}]}
          onRefresh={onRefresh}
          refreshing={isRefetching}
          data={filterResult}
          ListEmptyComponent={<ListEmpty />}
          ListHeaderComponent={
            <SearchHeader
              onBackButtonPressed={onBackButtonPressed}
              search={search ?? ''}
              updateSearch={updateSearch}
            />
          }
          stickyHeaderIndices={[0]}
          renderItem={({item}) => (
            <SearchListItem
              id={extractIdFromUrl(item?.url) ?? ''}
              name={item?.name ?? ''}
              onSearchItemPressed={onSearchItemPressed}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};
