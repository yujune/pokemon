import {useMutation, useQuery} from '@tanstack/react-query';
import {api} from '../services/api/api_service';
import {useFavoriteList} from './useFavoriteList';

export const useFavorite = (id: string, name: string, types: string[]) => {
  const favoriteListQuery = useFavoriteList();
  const _getIsFavorite = () => api.isFavorite(name);

  const _addToFavorite = () => api.addToFavorite(id, name, types);

  const _deleteFavorite = () => api.deleteFavorite(name);

  const isFavoriteQuery = useQuery({
    queryKey: ['isFavorite'],
    queryFn: _getIsFavorite,
    enabled: false,
  });

  const addToFavoriteMutation = useMutation({
    mutationFn: _addToFavorite,
    onSuccess: () => {
      isFavoriteQuery.refetch();
      favoriteListQuery.refetch();
    },
  });

  const deleteFavoriteMutation = useMutation({
    mutationFn: _deleteFavorite,
    onSuccess: () => {
      isFavoriteQuery.refetch();
      favoriteListQuery.refetch();
    },
  });

  return {isFavoriteQuery, addToFavoriteMutation, deleteFavoriteMutation};
};
