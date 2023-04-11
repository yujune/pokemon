import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Pokemon} from '../models/pokemon/pokemon';
import {ListResult} from '../models/pokemon/list_result';
import {defaultTake, firstPage} from '../utils/constants';
import {Pokedex} from '../models/pokemon/pokedex';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getPokemonList: builder.query<ListResult<Pokemon>, number | void>({
      query: (page = firstPage) => {
        const skip = (page ?? firstPage) * defaultTake;
        return `pokemon?limit=${defaultTake}&offset=${skip}`;
      },
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, data, {arg}) => {
        if (arg === firstPage) {
          return data;
        }
        return {
          ...data,
          results: [...(currentCache.results ?? []), ...(data.results ?? [])],
        };
      },
      // Refetch when the page arg changes
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
    getPokemonDetails: builder.query<Pokedex, string>({
      query: name => `pokemon/${name}`,
    }),
  }),
});

export const {useGetPokemonListQuery, useLazyGetPokemonListQuery} = pokemonApi;
