import {renderHook} from '@testing-library/react-hooks';
import {useAbout} from '../../src/hooks/useAbout';
import {
  FlavorTextEntriesEntity,
  NameWithUrl,
} from '../../src/models/pokemon/species';

describe('useAbout', () => {
  const flavorTextList: FlavorTextEntriesEntity[] = [
    {
      flavor_text: 'test flavor text 1',
      language: {name: 'en', url: ''},
      version: {name: '', url: ''},
    },
    {
      flavor_text: 'test flavor text 2',
      language: {name: 'fr', url: ''},
      version: {name: '', url: ''},
    },
  ];
  const eggGroups: NameWithUrl[] = [
    {name: 'Test group 1', url: ''},
    {name: 'Test group 2', url: ''},
  ];

  it('returns a function to get pokemon description', () => {
    const {result} = renderHook(() => useAbout());

    expect(result.current.getPokemonDescription).toBeInstanceOf(Function);
  });

  it('returns a function to get egg groups string', () => {
    const {result} = renderHook(() => useAbout());

    expect(result.current.getEggGroupsString).toBeInstanceOf(Function);
  });

  describe('getPokemonDescription', () => {
    it('returns undefined when passed empty flavor text list', () => {
      const {result} = renderHook(() => useAbout());

      expect(result.current.getPokemonDescription([])).toBeUndefined();
    });

    it('returns undefined when no flavor text is available in English', () => {
      const {result} = renderHook(() => useAbout());

      const nonEngFlavorTextList = [
        {
          flavor_text: 'test flavor text 2',
          language: {name: 'fr', url: ''},
          version: {name: '', url: ''},
        },
      ];

      expect(
        result.current.getPokemonDescription(nonEngFlavorTextList),
      ).toBeUndefined();
    });

    it('returns a flavor text string when at least one English flavor text is available', () => {
      const {result} = renderHook(() => useAbout());

      const flavorText = result.current.getPokemonDescription(flavorTextList);

      expect(flavorText).toBeDefined();
      expect(typeof flavorText).toBe('string');
      expect(
        flavorTextList.some(entry => entry.flavor_text.includes(flavorText!)),
      ).toBe(true);
    });
  });

  describe('getEggGroupsString', () => {
    it('returns an empty string when passed empty egg groups list', () => {
      const {result} = renderHook(() => useAbout());

      expect(result.current.getEggGroupsString([])).toBe('');
    });

    it('returns a string with all egg group names separated by commas', () => {
      const {result} = renderHook(() => useAbout());

      expect(result.current.getEggGroupsString(eggGroups)).toBe(
        'Test group 1, Test group 2',
      );
    });
  });
});
