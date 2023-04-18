import {useCallback} from 'react';
import {Pokemon} from '../models/pokemon/pokemon';

export const useSearch = () => {
  const filterPokemonWithName = useCallback(
    (name: string, list: (Pokemon | undefined)[]) => {
      return list.filter(pokemon =>
        pokemon?.name?.toLocaleLowerCase().includes(name.toLowerCase()),
      );
    },
    [],
  );

  return {filterPokemonWithName};
};
