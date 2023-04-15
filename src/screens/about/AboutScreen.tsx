import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {AppStyle} from '../../utils/global-style';
import {useQueryClient} from '@tanstack/react-query';
import {AxiosResponse} from 'axios';
import {Pokedex} from '../../models/pokemon/pokedex';
import {TagItem} from '../../components/tagItem/TagItem';
import {style} from './AboutScreen.style';
import {CardContainer} from '../../components/CardContainer/CardContainer';
import {InfoItem} from '../../components/InfoItem/InfoItem';
import {getHeight, getTypeColor, getWeight} from '../../utils/general-helper';
import {useAbout} from '../../hooks/useAbout';
import {useGetPokemonSpecies} from '../../hooks/useGetPokemonSpecies';
import {Props} from './AboutScreen.type';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const AboutScreen: FC<Props> = ({speciesId}) => {
  const {theme} = useCustomTheme();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AxiosResponse<Pokedex>>([
    'pokemonDetails',
  ]);
  const {data: species, updateSpeciesId} = useGetPokemonSpecies();
  const [description, setDescription] = useState<string | undefined>();
  const {getPokemonDescription, getEggGroupsString} = useAbout();

  useEffect(() => {
    if (speciesId.length > 0) {
      updateSpeciesId(speciesId);
    }
  }, [speciesId]);

  useEffect(() => {
    if (species?.data.flavor_text_entries !== undefined) {
      const pokemonDesc = getPokemonDescription(
        species?.data.flavor_text_entries,
      );
      if (pokemonDesc !== undefined) {
        setDescription(pokemonDesc);
      }
    }
  }, [species?.data.flavor_text_entries]);

  return (
    <View style={AppStyle.screenContainer}>
      <View style={style.tagListContainer}>
        {data?.data?.types?.map((item, index) => (
          <TagItem
            key={index.toString()}
            tagContainerStyle={{backgroundColor: getTypeColor(item.type.name)}}
            label={item.type.name}
          />
        ))}
      </View>
      <Text style={[theme.text?.bodyMedium, style.descriptionLabel]}>
        Description
      </Text>
      {description !== undefined && (
        <Text style={theme.text?.bodyMedium}>{description}</Text>
      )}
      <CardContainer containerStyle={style.heightWeightContainer}>
        <InfoItem
          label="Height"
          value={`${getHeight(data?.data?.height) ?? '-'} m`}
        />
        <InfoItem
          label="Weight"
          value={`${getWeight(data?.data?.weight) ?? '-'} kg`}
        />
        <InfoItem
          label="Base Exp"
          value={`${data?.data?.base_experience ?? '-'}`}
        />
      </CardContainer>
      <InfoItem
        containerStyle={style.horizontalInfoContainer}
        direction="horizontal"
        label="Capture Rate"
        value={`${species?.data.capture_rate ?? '-'}%`}
      />
      <InfoItem
        containerStyle={style.horizontalInfoContainer}
        direction="horizontal"
        label="Friendship"
        value={`${species?.data.base_happiness ?? '-'}`}
      />
      <InfoItem
        containerStyle={style.horizontalInfoContainer}
        direction="horizontal"
        label="Egg Groups"
        value={getEggGroupsString(species?.data?.egg_groups)}
      />
    </View>
  );
};
