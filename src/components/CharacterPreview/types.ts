import { Character } from '@/src/external/swapi/types';

export type CharacterPreviewProps = {
  character: Character;
  onCharacterUpdate: (updatedCharacter: Character) => void;
};
