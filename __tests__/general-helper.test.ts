import {getPokemonImageUrl} from '../src/utils/general-helper';

describe('getPokemonImageUrl', () => {
  it('should return the correct image URL', () => {
    const name = 'charizard';
    const expectedUrl = 'https://img.pokemondb.net/artwork/large/charizard.jpg';
    const imageUrl = getPokemonImageUrl(name);
    expect(imageUrl).toBe(expectedUrl);
  });

  it('should replace spaces with hyphens in the name', () => {
    const name = 'mew two';
    const expectedUrl = 'https://img.pokemondb.net/artwork/large/mew-two.jpg';
    const imageUrl = getPokemonImageUrl(name);
    expect(imageUrl).toBe(expectedUrl);
  });

  it('shold replace any spaces with hypens in the name', () => {
    const name = 'mew two first generation';
    const expectedUrl =
      'https://img.pokemondb.net/artwork/large/mew-two-first-generation.jpg';
    const imageUrl = getPokemonImageUrl(name);
    expect(imageUrl).toBe(expectedUrl);
  });
});
