import {pokemonImgBaseUrl} from './constants';

export const getPokemonImageUrl = (name: string) => {
  const imageName = name.replace(' ', '-');
  return `${pokemonImgBaseUrl}${imageName}.jpg`;
};
