import {FlavorTextEntriesEntity, NameWithUrl} from '../models/pokemon/species';

export const useAbout = () => {
  const getPokemonDescription = (
    flavorTextList?: FlavorTextEntriesEntity[] | null,
  ): string | undefined => {
    const engFlavorList = flavorTextList?.filter(
      value => value.language.name === 'en',
    );
    const selectedFlavor =
      engFlavorList?.[Math.floor(Math.random() * engFlavorList.length)];

    return selectedFlavor?.flavor_text.replace(/\n|\f/g, ' ');
  };

  const getEggGroupsString = (eggGroups?: NameWithUrl[] | null) => {
    let result = '';
    eggGroups?.forEach((group, index) => {
      result = result + group.name;
      if (index !== eggGroups.length - 1) {
        result = result + ', ';
      }
    });
    return result;
  };

  return {getPokemonDescription, getEggGroupsString};
};
