import axios, {Axios} from 'axios';
import {ListResult} from '../../models/pokemon/list_result';
import {Pokemon} from '../../models/pokemon/pokemon';
import {Pokedex} from '../../models/pokemon/pokedex';
import {Species} from '../../models/pokemon/species';
import {Evolution} from '../../models/pokemon/evolution';

export const DEFAULT_AXIOS_INSTANCE = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class Api {
  private instance: Axios;

  constructor(instance: Axios) {
    this.instance = instance;
  }

  async getPokemonList(skip: number, limit: number) {
    try {
      return this.instance.get<ListResult<Pokemon>>(
        `/pokemon?limit=${limit}&offset=${skip}`,
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonDetails(name: string) {
    try {
      return this.instance.get<Pokedex>(`/pokemon/${name}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonSpecies(speciesId: string) {
    try {
      return this.instance.get<Species>(`/pokemon-species/${speciesId}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonEvolutionChain(evolutionId: string) {
    try {
      return this.instance.get<Evolution>(`/evolution-chain/${evolutionId}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api(DEFAULT_AXIOS_INSTANCE);
