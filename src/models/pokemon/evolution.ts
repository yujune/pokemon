import {NameWithUrl} from './species';

export interface Evolution {
  baby_trigger_item?: null;
  chain: Chain;
  id: number;
}
export interface Chain {
  evolution_details?: EvolutionDetailsEntity[] | null;
  evolves_to?: Chain[] | null;
  is_baby: boolean;
  species: NameWithUrl;
}

export interface EvolutionDetailsEntity {
  gender?: null;
  held_item?: null;
  item?: null;
  known_move?: null;
  known_move_type?: null;
  location?: null;
  min_affection?: null;
  min_beauty?: null;
  min_happiness?: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species?: null;
  party_type?: null;
  relative_physical_stats?: null;
  time_of_day: string;
  trade_species?: null;
  trigger: NameWithUrl;
  turn_upside_down: boolean;
}
