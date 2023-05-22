import {renderHook} from '@testing-library/react-hooks';
import {Pokemon} from '../../src/models/pokemon/pokemon';
import {useSearch} from '../../src/hooks/useSearch';

describe('useSearch', () => {
  const pokemonList: (Pokemon | undefined)[] = [
    {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
    {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
    {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
  ];

  it('should return an empty array if no matches found', () => {
    const {result} = renderHook(() => useSearch());
    const filteredList = result.current.filterPokemonWithName(
      'pikachu',
      pokemonList,
    );
    expect(filteredList).toHaveLength(0);
  });

  it('should return a filtered array if matches found', () => {
    const {result} = renderHook(() => useSearch());
    const filteredList = result.current.filterPokemonWithName(
      'saur',
      pokemonList,
    );
    expect(filteredList).toHaveLength(3);
    expect(filteredList[0]).toEqual(pokemonList[0]);
    expect(filteredList[1]).toEqual(pokemonList[1]);
    expect(filteredList[2]).toEqual(pokemonList[2]);
  });

  it('should not be case-sensitive', () => {
    const {result} = renderHook(() => useSearch());
    const filteredList = result.current.filterPokemonWithName(
      'BUlBa',
      pokemonList,
    );
    expect(filteredList).toHaveLength(1);
    expect(filteredList[0]).toEqual(pokemonList[0]);
  });
});
