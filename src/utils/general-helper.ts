import {AppColor} from './color';
import {pokemonImgBaseUrl} from './constants';
import {HeightMeasurement, WeightMeasurement} from './enums/enum';

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

export const getWeight = (
  weight?: number,
  measurement: WeightMeasurement = WeightMeasurement.kg,
): number | null => {
  if (weight == null) {
    return null;
  }
  if (measurement === WeightMeasurement.kg) {
    //Follow pokemondb  web
    return weight / 10;
  }

  return weight;
};

export const getHeight = (
  height?: number,
  measurement: HeightMeasurement = HeightMeasurement.meter,
): number | null => {
  if (height == null) {
    return null;
  }
  if (measurement === HeightMeasurement.meter) {
    //Follow pokemondb  web
    return height / 10;
  }

  return height;
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case 'fire':
      return AppColor.orangeRed;

    case 'water':
      return AppColor.cyanBlue;

    case 'poison':
      return AppColor.mutedPurple;

    case 'grass':
      return AppColor.greenishCyan;

    case 'electric':
      return AppColor.brightSun;

    case 'rock':
      return AppColor.pinkishBrown;

    case 'dark':
      return AppColor.periwinkleGrey;

    case 'flying':
      return AppColor.periwinkleGrey;

    case 'dragon':
      return AppColor.paleOrange;

    case 'bug':
      return AppColor.yellowishGreen;

    case 'ground':
      return AppColor.orangeSalmon;

    case 'psychic':
      return AppColor.dusk;

    case 'fighting':
      return AppColor.dawn;

    case 'ghost':
      return AppColor.lavenderPurple;

    case 'ice':
      return AppColor.columbiaBlue;

    default:
      return AppColor.cloud;
  }
};

export const isSvgUrl = (url: string): boolean => {
  const fileExtension = url.split('.').pop();
  return fileExtension?.toLowerCase() === 'svg';
};
