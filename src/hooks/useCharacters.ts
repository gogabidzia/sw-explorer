import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SWApiClient from '../external/swapi';
import { selectCharacterFilter } from '../store/characterFilter/selectors';
import { setPage, setSearch } from '../store/characterFilter/slice';
import { selectAllCharacters } from '../store/characters/selectors';
import { setCharacters } from '../store/characters/slice';
import { useDebouncedValue } from './useDebouncedValue';

export const useCharacters = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [pageData, setPageData] = useState({
    total: 0,
    hasPrev: false,
    hasNext: false,
  });

  const characters = useSelector(selectAllCharacters);
  const filters = useSelector(selectCharacterFilter);
  const debouncedSearch = useDebouncedValue(filters.search, 300);

  const fetchCharacters = useCallback(() => {
    setIsLoading(true);

    new SWApiClient()
      .characters({
        page: filters.page,
        search: debouncedSearch,
      })
      .then((data) => {
        setPageData({
          total: data.count,
          hasPrev: !!data.previous,
          hasNext: !!data.next,
        });
        dispatch(setCharacters(data.results));
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [filters.page, debouncedSearch, dispatch]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const onSearchTermChange = (term: string) => {
    dispatch(setSearch(term));
  };

  const onPageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return {
    onSearchTermChange,
    onPageChange,
    isLoading,
    error,
    characters,
    filters,
    pageData,
  };
};
