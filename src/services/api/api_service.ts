import axios, {Axios} from 'axios';
import {ListResult} from '../../models/pokemon/list_result';
import {Pokemon} from '../../models/pokemon/pokemon';
import {Pokedex} from '../../models/pokemon/pokedex';
import {Species} from '../../models/pokemon/species';
import {Evolution} from '../../models/pokemon/evolution';
import {RegistrationReq} from '../../models/auth/registration_req';
import {ILoginForm} from '../../models/auth/login_form';
import {User} from '../../models/auth/user';
import {Favorite} from '../../models/pokemon/favorite';
import {SecureStorageHelper} from '../../utils/secure-storage-helper';

export const DEFAULT_AXIOS_INSTANCE = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

DEFAULT_AXIOS_INSTANCE.interceptors.request.use(
  async function (config) {
    const accessToken = await SecureStorageHelper.getAccessToken();
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

//TODO: Refactor to base api.
export class Api {
  private instance: Axios;

  constructor(instance: Axios) {
    this.instance = instance;
  }

  async login(loginReq: ILoginForm) {
    //TODO: encrypt password
    try {
      return this.instance.post<User>('/auth/login', loginReq);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async register(registrationReq: RegistrationReq) {
    //TODO: encrypt password
    try {
      return this.instance.post<User>('/auth/register', registrationReq);
    } catch (error) {
      console.error(error);
      throw error;
    }
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
      return this.instance.get<Species>(
        `/pokemon/pokemon-species/${speciesId}`,
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonEvolutionChain(evolutionId: string) {
    try {
      return this.instance.get<Evolution>(
        `/pokemon/evolution-chain/${evolutionId}`,
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addToFavorite(id: string, name: string, types: string[]) {
    try {
      return this.instance.post<Favorite>('/user/favorite', {
        id,
        name,
        types,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteFavorite(name: string) {
    try {
      return this.instance.delete<Favorite>(`/user/favorite/${name}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async isFavorite(name: String) {
    try {
      return this.instance.get<boolean>(`/pokemon/${name}/isFavorite`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getFavoriteList() {
    try {
      return this.instance.get<Favorite[]>(`/user/favorites`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api(DEFAULT_AXIOS_INSTANCE);
