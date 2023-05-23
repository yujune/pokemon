import React from 'react';
import {
  WrapperComponent,
  act,
  cleanup,
  renderHook,
} from '@testing-library/react-hooks';
import {useGetPokemonSpecies} from '../../src/hooks/useGetPokemonSpecies';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {Species} from '../../src/models/pokemon/species';
import {api} from '../../src/services/api/api_service';

describe('useGetPokemonSpecies', () => {
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

  let apiMock = jest.spyOn(api, 'getPokemonSpecies');

  beforeAll(() => {
    wrapper = ({children}) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  });
  afterEach(() => {
    cleanup();
  });

  it('should fetch Pokemon species and return data when successful', async () => {
    const species: Species = {base_happiness: 50, capture_rate: 45};

    const mockData: AxiosResponse<Species> = {
      data: species,
      status: 200,
      statusText: 'OK',
      headers: {},
    };

    apiMock.mockResolvedValueOnce(mockData);

    const {result, waitFor} = renderHook(() => useGetPokemonSpecies(), {
      wrapper,
    });
    expect(result.current.speciesId).toHaveLength(0);

    act(() => {
      result.current.updateSpeciesId('1');
    });
    expect(result.current.isInitialLoading).toBe(true);
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data?.data).toBe(species);
  });

  it('should return an error if api.getPokemonSpecies fails', async () => {
    const speciesId = 'pikachu';
    const expectedError = new Error('Failed to get pokemon species');
    apiMock.mockRejectedValue(expectedError);

    const {result, waitFor} = renderHook(() => useGetPokemonSpecies(), {
      wrapper,
    });
    act(() => {
      result.current.updateSpeciesId(speciesId);
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toEqual(expectedError);
  });
});
