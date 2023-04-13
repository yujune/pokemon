import {pokemonImgBaseUrl} from './constants';

export const getPokemonImageUrl = (name: string) => {
  const imageName = name.replaceAll(' ', '-');
  return `${pokemonImgBaseUrl}${imageName}.jpg`;
};

export const extractIdFromUrl = (url?: string): string | null => {
  const match = url?.match(/\/(\d+)\/$/);
  if (match && match.length > 1) {
    return match[1];
  }
  return null;
};
