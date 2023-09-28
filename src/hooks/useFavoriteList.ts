import {useQuery} from '@tanstack/react-query';
import {api} from '../services/api/api_service';

export const useFavoriteList = () => {
  const _getFavoriteList = () => api.getFavoriteList();

  const favoriteListQuery = useQuery({
    queryKey: ['favoriteList'],
    queryFn: _getFavoriteList,
  });

  return {...favoriteListQuery};
};
