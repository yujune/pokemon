import {useCallback} from 'react';
import {api} from '../services/api/api_service';
import {useQuery} from '@tanstack/react-query';
import {Chain} from '../models/pokemon/evolution';

export const useGetPokemonEvolutionChain = (id: string) => {
  const _getEvolutionChain = useCallback(() => {
    return api.getPokemonEvolutionChain(id);
  }, [id]);

  const _query = useQuery({
    queryKey: ['evolution-chain', id],
    queryFn: _getEvolutionChain,
    enabled: id.length > 0,
  });

  const getEvolutionChain = useCallback((chain: Chain): Chain[][] => {
    let evolutionChain: Chain[][] = [];
    let totalChain: Chain[] = [chain];
    while (totalChain.length > 0) {
      const currentChain = totalChain.shift();
      currentChain?.evolves_to?.forEach(item => {
        totalChain.push(item);
        evolutionChain.push([currentChain, item]);
      });
    }
    return evolutionChain;
  }, []);

  return {..._query, getEvolutionChain};
};
