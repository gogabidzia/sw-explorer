import { Character } from '@/src/external/swapi/types';

export type CharacterMap = Record<string, Character>;

export type CharactersState = {
  original: CharacterMap;
  updated: CharacterMap;
};
