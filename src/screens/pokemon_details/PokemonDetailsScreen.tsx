import React, {FC, useEffect, useState} from 'react';
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
import {useGetPokemonSpecies} from '../../hooks/useGetPokemonSpecies';
import {extractIdFromUrl} from '../../utils/general-helper';
import {PokemonEvolutionScreen} from '../evolution/PokemonEvolutionScreen';
import {AboutScreen} from '../about/AboutScreen';
import {GalleryScreen} from '../gallery/GalleryScreen';

const TABS = [
  {
    title: 'About',
  },
  {
    title: 'Base Stats',
  },
  {
    title: 'Evolution',
  },
  {
    title: 'Gallery',
  },
];

export const PokemonDetailsScreen: FC<Props> = ({route}) => {
  const {theme} = useCustomTheme();
  const scrollValue = useSharedValue(0);
  const [evolutionId, setEvolutionId] = useState('');
  const {data, isFetching, refetch, remove, isError, error} =
    useGetPokemonDetails(route.params.name);
  const {
    data: speciesResponse,
    speciesId,
    updateSpeciesId,
  } = useGetPokemonSpecies();

  const onRefresh = async () => {
    //TO FIX: remove method will cause entire FlatList to re-render.
    remove();
    await refetch();
  };

  function onScroll(e: NativeScrollEvent) {
    'worklet';
    scrollValue.value = e.contentOffset.y;
  }

  useEffect(() => {
    const evolutionUrl = speciesResponse?.data?.evolution_chain?.url;
    if (evolutionUrl != null && evolutionUrl?.length > 0) {
      const id = extractIdFromUrl(evolutionUrl);
      if (id != null) {
        setEvolutionId(id);
      }
    }
  }, [speciesResponse?.data?.evolution_chain?.url]);

  useEffect(() => {
    const speciesUrl = data?.data.species.url;
    if (speciesUrl != null && speciesUrl?.length > 0) {
      const id = extractIdFromUrl(speciesUrl);
      if (id != null) {
        updateSpeciesId(id);
      }
    }
  }, [data?.data.species.url]);

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
        tabTextActiveStyle={[
          style.tabTextActiveStyle,
          theme.text?.bodyMedium,
          {color: theme.color.tabLabelActive},
        ]}
        tabWrapperStyle={style.tabWrapperStyle}
        tabsContainerStyle={style.tabsContainerStyle}
        onScroll={onScroll}
        tabs={TABS}
        renderHeaderBar={() => (
          <HeaderBar scrollValue={scrollValue} name={data?.data.name ?? ''} />
        )}
        showsVerticalScrollIndicator={false}>
        <AboutScreen speciesId={speciesId} />
        <PokemonStatsScreen />
        <PokemonEvolutionScreen evolutionId={evolutionId} />
        <GalleryScreen />
      </TabbedHeaderPager>
    </>
  );
};
