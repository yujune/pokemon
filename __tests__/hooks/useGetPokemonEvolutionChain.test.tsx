import React from 'react';
import {
  WrapperComponent,
  cleanup,
  renderHook,
} from '@testing-library/react-hooks';
import {Evolution} from '../../src/models/pokemon/evolution';
import {api} from '../../src/services/api/api_service';
import {useGetPokemonEvolutionChain} from '../../src/hooks/useGetEvolutionChain';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AxiosResponse} from 'axios';

describe('useGetPokemonEvolutionChain ', () => {
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
  let apiMock = jest.spyOn(api, 'getPokemonEvolutionChain');

  const evolution: Evolution = {
    baby_trigger_item: null,
    chain: {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [
            {
              min_level: 16,
              time_of_day: '',
              needs_overworld_rain: false,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  min_level: 32,
                  needs_overworld_rain: false,
                  time_of_day: '',
                  trigger: {
                    name: 'level-up',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'venusaur',
                url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
          },
        },
      ],
      is_baby: false,
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
    },
    id: 1,
  };

  const mockData: AxiosResponse<Evolution> = {
    data: evolution,
    status: 200,
    statusText: 'OK',
    headers: {},
  };

  beforeAll(() => {
    wrapper = ({children}) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  //! Below unit test getting "TypeError: require(...).unstable_batchedUpdates is not a function at unstable_batchedUpdates (/Users/teeyujune/Documents/Pokemon/node_modules/react-native/Libraries/ReactNative/RendererImplementation.js:44:51).",
  // it('should fetch Pokemon evolution details and return data when successful', async () => {
  //   apiMock.mockResolvedValueOnce(mockData);

  //   const {result, waitFor} = renderHook(
  //     () => useGetPokemonEvolutionChain('1'),
  //     {
  //       wrapper,
  //     },
  //   );

  //   expect(result.current.isInitialLoading).toBe(true);

  //   await waitFor(() => result.current.isSuccess);

  //   expect(result.current.data?.data).toBe(evolution);
  // });

  // it('should return an error if api.getPokemonEvolutionChain fail', async () => {
  //   const expectedError = new Error('Failed to get pokemon evolution chain');
  //   apiMock.mockRejectedValue(expectedError);

  //   const {result, waitFor} = renderHook(
  //     () => useGetPokemonEvolutionChain('1'),
  //     {
  //       wrapper,
  //     },
  //   );

  //   expect(result.current.isFetching).toBe(true);

  //   await waitFor(() => result.current.isError);

  //   expect(result.current.error).toEqual(expectedError);
  // });

  it('should format evolution details correctly', () => {
    const evolutionChain = [
      [
        {
          evolution_details: [],
          evolves_to: [
            {
              evolution_details: [
                {
                  min_level: 16,
                  time_of_day: '',
                  needs_overworld_rain: false,
                  trigger: {
                    name: 'level-up',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [
                {
                  evolution_details: [
                    {
                      min_level: 32,
                      needs_overworld_rain: false,
                      time_of_day: '',
                      trigger: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                      },
                      turn_upside_down: false,
                    },
                  ],
                  evolves_to: [],
                  is_baby: false,
                  species: {
                    name: 'venusaur',
                    url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
                  },
                },
              ],
              is_baby: false,
              species: {
                name: 'ivysaur',
                url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
          },
        },
        {
          evolution_details: [
            {
              min_level: 16,
              time_of_day: '',
              needs_overworld_rain: false,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  min_level: 32,
                  needs_overworld_rain: false,
                  time_of_day: '',
                  trigger: {
                    name: 'level-up',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'venusaur',
                url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
          },
        },
      ],
      [
        {
          evolution_details: [
            {
              min_level: 16,
              time_of_day: '',
              needs_overworld_rain: false,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  min_level: 32,
                  needs_overworld_rain: false,
                  time_of_day: '',
                  trigger: {
                    name: 'level-up',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'venusaur',
                url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
          },
        },
        {
          evolution_details: [
            {
              min_level: 32,
              needs_overworld_rain: false,
              time_of_day: '',
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [],
          is_baby: false,
          species: {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
          },
        },
      ],
    ];
    const {result} = renderHook(() => useGetPokemonEvolutionChain('1'), {
      wrapper,
    });

    const list = result.current.getEvolutionChain(evolution.chain);
    expect(list).toEqual(evolutionChain);
  });
});
