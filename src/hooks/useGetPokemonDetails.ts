import {QueryFunctionContext, useQuery} from '@tanstack/react-query';
import {api} from '../services/api/api_service';

export const useGetPokemonDetails = (name: string) => {
  const _getPokemonDetails = async ({
    pageParam = name,
  }: QueryFunctionContext) => {
    const response = await api.getPokemonDetails(pageParam);
    return response;
  };

  return useQuery({
    queryKey: ['pokemonDetails'],
    queryFn: _getPokemonDetails,
  });
};
