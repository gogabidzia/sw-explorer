import { useCallback, useEffect, useState } from 'react';
import { UseCharacterArgs } from './types';
import { Character } from '@/src/external/swapi/types';
import SWApiClient from '@/src/external/swapi';

export const useCharacter = ({ id }: UseCharacterArgs) => {
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCharacter = useCallback(() => {
    setIsLoading(true);

    new SWApiClient()
      .character(id)
      .then(setCharacter)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    if (!id) return;

    fetchCharacter();
  }, [id, fetchCharacter]);

  return {
    character,
    isLoading,
    error,
  };
};
