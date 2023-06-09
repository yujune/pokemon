import {QueryFunctionContext, useInfiniteQuery} from '@tanstack/react-query';
import {api} from '../services/api/api_service';

export const useGetPokemonList = ({defaultTake}: {defaultTake: number}) => {
  const getPokemonList = async ({pageParam = 0}: QueryFunctionContext) => {
    const skip = pageParam * defaultTake;
    const response = await api.getPokemonList(skip, defaultTake);
    return response;
  };

  return useInfiniteQuery(['pokemon'], getPokemonList, {
    getNextPageParam: (lastPage, totalPages) => {
      const count = lastPage.data.results?.length;
      if (count === undefined || count < defaultTake) {
        return undefined;
      }
      return totalPages.length;
    },
  });
};
