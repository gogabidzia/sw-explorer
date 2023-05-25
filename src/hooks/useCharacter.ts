import { useCallback, useEffect, useState } from 'react';
import { UseCharacterArgs } from './types';
import { Character } from '@/src/external/swapi/types';
import SWApiClient from '@/src/external/swapi';

export const useCharacter = ({ id }: UseCharacterArgs) => {
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCharacter = useCallback(() => {
    if (!id) return;

    setIsLoading(true);

    new SWApiClient()
      .character(id)
      .then(setCharacter)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return {
    character,
    isLoading,
    error,
  };
};
