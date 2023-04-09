import {Api} from '../src/services/api/api_service';
import {AxiosRequestConfig, AxiosStatic} from 'axios';

type AxiosGetSpyType = jest.SpyInstance<
  Promise<unknown>,
  [url: string, config?: AxiosRequestConfig<unknown> | undefined],
  any
>;

describe('Api get request', () => {
  let api: Api;
  let axiosGetSpy: AxiosGetSpyType;

  const mockAxios: AxiosStatic = jest.createMockFromModule('axios');

  beforeEach(() => {
    api = new Api(mockAxios);
    axiosGetSpy = jest.spyOn(mockAxios, 'get');
  });

  afterEach(() => {
    axiosGetSpy.mockRestore();
  });

  it('should get Pokemon list successfully', async () => {
    const skip = 0;
    const limit = 10;
    const mockData = {
      data: {
        results: [],
      },
    };

    axiosGetSpy.mockImplementationOnce(() => Promise.resolve(mockData));

    await expect(api.getPokemonList(skip, limit)).resolves.toEqual(mockData);
  });

  it('should throw an error if getPokemonList fails', async () => {
    const skip = 0;
    const limit = 10;

    // Define the expected error response
    const error = new Error('API error');

    axiosGetSpy.mockImplementationOnce(() => Promise.reject(error));

    // Call the getPokemonList method and expect it to throw an error
    await expect(api.getPokemonList(skip, limit)).rejects.toEqual(error);
  });
});
