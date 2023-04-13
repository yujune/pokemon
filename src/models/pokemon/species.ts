export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: NameWithUrl;
  egg_groups?: NameWithUrl[] | null;
  evolution_chain: EvolutionChain;
  evolves_from_species?: null;
  flavor_text_entries?: FlavorTextEntriesEntity[] | null;
  form_descriptions?: null[] | null;
  forms_switchable: boolean;
  gender_rate: number;
  genera?: GeneraEntity[] | null;
  generation: NameWithUrl;
  growth_rate: NameWithUrl;
  habitat: NameWithUrl;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names?: NamesEntity[] | null;
  order: number;
  pal_park_encounters?: PalParkEncountersEntity[] | null;
  pokedex_numbers?: PokedexNumbersEntity[] | null;
  shape: NameWithUrl;
  varieties?: VarietiesEntity[] | null;
}
export interface NameWithUrl {
  name: string;
  url: string;
}
export interface EvolutionChain {
  url: string;
}
export interface FlavorTextEntriesEntity {
  flavor_text: string;
  language: NameWithUrl;
  version: NameWithUrl;
}
export interface GeneraEntity {
  genus: string;
  language: NameWithUrl;
}
export interface NamesEntity {
  language: NameWithUrl;
  name: string;
}
export interface PalParkEncountersEntity {
  area: NameWithUrl;
  base_score: number;
  rate: number;
}
export interface PokedexNumbersEntity {
  entry_number: number;
  pokedex: NameWithUrl;
}
export interface VarietiesEntity {
  is_default: boolean;
  pokemon: NameWithUrl;
}
