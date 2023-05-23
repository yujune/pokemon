import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {AxiosError, AxiosResponse} from 'axios';
import {api} from '../../src/services/api/api_service';
import {Pokedex} from '../../src/models/pokemon/pokedex';
import {WrapperComponent, renderHook} from '@testing-library/react-hooks';
import {useGetPokemonDetails} from '../../src/hooks/useGetPokemonDetails';

//Mock the entire module instead of dependency injection.
jest.mock('../../src/services/api/api_service', () => ({
  api: {
    getPokemonDetails: jest.fn(),
  },
}));

describe('useGetPokemonDetails', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        //To fix "Jest did not exit one second after the test run has completed." error.
        //Reference: https://github.com/TanStack/query/issues/1847#issuecomment-1325196926
        cacheTime: 0,
        retry: false,
      },
      mutations: {
        cacheTime: 0,
        retry: false,
      },
    },
  });
  let wrapper:
    | WrapperComponent<{
        children: any;
      }>
    | undefined;

  beforeAll(() => {
    wrapper = ({children}) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  });

  afterEach(() => {
    queryClient.clear();
  });

  it('should fetch Pokemon details and return data when successful', async () => {
    const pokemonDetails = {id: 1, name: 'Bulbasaur'};

    const response: AxiosResponse<Pokedex> = {
      data: pokemonDetails,
      status: 200,
      statusText: 'OK',
      headers: {},
    };

    (
      api.getPokemonDetails as jest.MockedFunction<typeof api.getPokemonDetails>
    ).mockResolvedValue(response);

    const {result, waitFor} = renderHook(
      () => useGetPokemonDetails('bulbasaur'),
      {
        wrapper,
      },
    );

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data?.data).toEqual(pokemonDetails);
  });

  it('should return error when fetching Pokemon details fails', async () => {
    const response: AxiosError = {
      status: 400,
      message: 'Failed to fetch Pokemon details',
      isAxiosError: false,
      toJSON: function (): object {
        return {};
      },
      name: '',
    };

    (
      api.getPokemonDetails as jest.MockedFunction<typeof api.getPokemonDetails>
    ).mockRejectedValue(response);

    const {result, waitFor} = renderHook(
      () => useGetPokemonDetails('bulbasaur'),
      {
        wrapper,
      },
    );

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => result.current.isError);
    console.log('result.current.error', result.current.error);
    expect(result.current.error).toEqual(response);
  });
});
