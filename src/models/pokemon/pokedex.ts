export interface Pokedex {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: PastType[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface PastType {
  generation: Species;
  types: Type[];
}

export interface Type {
  slot: number;
  type: Species;
}

export interface GenerationV {
  'black-white': Sprites;
}

export interface GenerationIv {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  platinum: Sprites;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface Sprites extends BaseSprite {
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  'red-blue': BaseSprite;
  yellow: BaseSprite;
}
export interface GenerationIi {
  crystal: BaseSprite;
  gold: BaseSprite;
  silver: BaseSprite;
}
export interface GenerationIii {
  emerald: BaseSprite;
  'firered-leafgreen': BaseSprite;
  'ruby-sapphire': BaseSprite;
}

export interface GenerationVi {
  'omegaruby-alphasapphire': BaseSprite;
  'x-y': BaseSprite;
}

export interface GenerationVii {
  icons: BaseSprite;
  'ultra-sun-ultra-moon': BaseSprite;
}

export interface GenerationViii {
  icons: BaseSprite;
}

export interface Other {
  dream_world: BaseSprite;
  home: BaseSprite;
  'official-artwork': BaseSprite;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface BaseSprite {
  front_default?: string;
  front_shiny?: string;
  back_default?: string;
  back_shiny?: string;
  front_female?: string;
}
