import React, {FC, useEffect} from 'react';
import {useGetPokemonDetails} from '../../hooks/useGetPokemonDetails';
import {Props} from './PokemonDetailsScreen.type';
import {LoadingIndicator} from '../../components/loading/LoadingIndicator';
import {NativeScrollEvent} from 'react-native';
import {TabbedHeaderPager} from 'react-native-sticky-parallax-header';
import {useSharedValue} from 'react-native-reanimated';
import {HeaderBar} from '../../components/HeaderBar/HeaderBar';
import {PokemonStatsScreen} from '../pokemon_stats/PokemonStatsScreen';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {style} from './PokemonDetailsScreen.style';
import {AppColor} from '../../utils/color';
import {AlertUtil} from '../../utils/alert';

const TABS = [
  {
    title: 'Base Stats',
  },
  {
    title: 'Evolution Chart',
  },
  {
    title: 'Generation',
  },
];

export const PokemonDetailsScreen: FC<Props> = ({route}) => {
  const {theme} = useCustomTheme();
  const scrollValue = useSharedValue(0);
  const {data, isFetching, refetch, remove, isError, error} =
    useGetPokemonDetails(route.params.name);

  const onRefresh = async () => {
    //TO FIX: remove method will cause entire FlatList to re-render.
    remove();
    await refetch();
  };

  function onScroll(e: NativeScrollEvent) {
    'worklet';
    scrollValue.value = e.contentOffset.y;
    console.log(scrollValue.value);
  }

  useEffect(() => {
    if (isError) {
      AlertUtil.showErrorAlert(error);
    }
  }, [isError, error]);

  if (isFetching) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <TabbedHeaderPager
        containerStyle={style.stretchContainer}
        backgroundImage={{
          uri: data?.data.sprites.other?.['official-artwork'].front_default,
        }}
        backgroundColor={theme.color.background}
        title={data?.data.name}
        titleStyle={[
          style.titleStyle,
          theme.text?.titleLarge,
          {color: AppColor.white},
        ]}
        foregroundImage={{
          uri: data?.data.sprites.other?.home.front_default,
        }}
        tabsContainerBackgroundColor={theme.color.background}
        tabTextContainerStyle={style.tabTextContainerStyle}
        tabTextContainerActiveStyle={{backgroundColor: theme.color.tabActive}}
        tabTextStyle={[style.tabText, theme.text?.bodyMedium]}
        tabTextActiveStyle={[style.tabTextActiveStyle, theme.text?.bodyMedium]}
        tabWrapperStyle={style.tabWrapperStyle}
        tabsContainerStyle={style.tabsContainerStyle}
        onScroll={onScroll}
        tabs={TABS}
        renderHeaderBar={() => (
          <HeaderBar scrollValue={scrollValue} name={data?.data.name ?? ''} />
        )}
        showsVerticalScrollIndicator={false}>
        <PokemonStatsScreen />
        <PokemonStatsScreen />
        <PokemonStatsScreen />
      </TabbedHeaderPager>
    </>
  );
};
