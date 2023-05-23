import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SWApiClient from '../external/swapi';
import { selectCharacterFilter } from '../store/characterFilter/selectors';
import { setPage, setSearch } from '../store/characterFilter/slice';
import { selectAllCharacters } from '../store/characters/selectors';
import { setCharacters } from '../store/characters/slice';

export const useCharacters = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(false);
  const [pageData, setPageData] = useState({
    total: 0,
    hasPrev: false,
    hasNext: false,
  });

  const characters = useSelector(selectAllCharacters);
  const filters = useSelector(selectCharacterFilter);

  const fetchCharacters = () => {
    setIsLoading(true);

    new SWApiClient()
      .characters(filters)
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
  };

  useEffect(() => {
    fetchCharacters();
  }, [filters.page]);

  useEffect(() => {
    if (filters.search === null) return;

    const timer = setTimeout(() => {
      fetchCharacters();
    }, 300); // debouncing

    return () => {
      clearTimeout(timer);
    };
  }, [filters.search]);

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
