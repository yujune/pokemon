import {useQuery} from '@tanstack/react-query';
import {api} from '../services/api/api_service';
import {useState} from 'react';

export const useGetPokemonSpecies = () => {
  const [speciesId, setSpeciesId] = useState('');

  const updateSpeciesId = (id: string) => {
    setSpeciesId(id);
  };

  const _getPokemonSpecies = async () => {
    return api.getPokemonSpecies(speciesId);
  };

  const query = useQuery({
    queryKey: ['pokemonSpecies', speciesId],
    queryFn: _getPokemonSpecies,
    enabled: speciesId.length > 0,
    cacheTime: 0,
  });

  return {...query, updateSpeciesId};
};
