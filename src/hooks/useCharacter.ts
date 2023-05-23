import { useEffect, useState } from 'react';
import SWApiClient, { Character } from '../external/swapi';

type UseCharacterArgs = {
  id: string;
};

export const useCharacter = ({ id }: UseCharacterArgs) => {
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCharacter = () => {
    setIsLoading(true);

    new SWApiClient()
      .character(id)
      .then(setCharacter)
      .catch(setError)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!id) return;

    fetchCharacter();
  }, [id]);

  return {
    character,
    isLoading,
    error,
  };
};
