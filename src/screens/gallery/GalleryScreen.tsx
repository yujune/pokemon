import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {AppStyle} from '../../utils/global-style';
import {useGallery} from '../../hooks/useGallery';
import {PokemonListItem} from '../../components/pokemon/PokemonListItem';
import {style} from './GalleryScreen.style';
import {AxiosResponse} from 'axios';
import {Pokedex} from '../../models/pokemon/pokedex';
import {useQueryClient} from '@tanstack/react-query';
import {Category} from '../../models/pokemon/category';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {extractIdFromUrl} from '../../utils/general-helper';

export const GalleryScreen: FC = () => {
  const {theme} = useCustomTheme();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AxiosResponse<Pokedex>>([
    'pokemonDetails',
  ]);
  const [gallery, setGallery] = useState<Category[] | undefined>();

  const {getImageList} = useGallery();

  useEffect(() => {
    if (data?.data?.sprites !== undefined || data?.data?.sprites !== null) {
      const list = getImageList(data!.data.sprites);
      setGallery(list);
    }
  }, [data?.data.sprites]);

  return (
    <View style={AppStyle.screenContainer}>
      <FlatList
        scrollEnabled={false}
        style={style.flatList}
        data={gallery}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text style={[theme.text?.bodyMedium, style.categoryTitle]}>
              {item.name}
            </Text>
            <View style={style.imageListContainer}>
              {item.data.map((pokemon, index) => (
                <PokemonListItem
                  containerStyle={style.imageContainer}
                  key={pokemon.name + index.toString()}
                  name={pokemon.name}
                  id={extractIdFromUrl(pokemon.url) ?? ''}
                  customUrl={pokemon.url}
                />
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};
