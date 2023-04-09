import axios, {AxiosInstance} from 'axios';
import {ApiConfig} from './api.type';
import {ListResult} from '../../models/pokemon/list_result';
import {Pokemon} from '../../models/pokemon/pokemon';

export const DEFAULT_API_CONFIG: ApiConfig = {
  //TODO: Use react-native-config to handle different env configuration.
  url: 'https://pokeapi.co/api/v2/',
  timeout: 10000,
};

class Api {
  private baseUrl: string;
  private instance: AxiosInstance;

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.baseUrl = config.url;
    this.instance = axios.create({
      baseURL: '',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getPokemonList(skip: number, limit: number) {
    try {
      return this.instance.get<ListResult<Pokemon>>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${skip}`,
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api();
