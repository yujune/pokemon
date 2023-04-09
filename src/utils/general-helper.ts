import {pokemonImgBaseUrl} from './constants';

export const getPokemonImageUrl = (name: string) => {
  const imageName = name.replaceAll(' ', '-');
  return `${pokemonImgBaseUrl}${imageName}.jpg`;
};
