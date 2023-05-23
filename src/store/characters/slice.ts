import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@/src/external/swapi';

export type CharacterMap = Record<string, Character>;

export type CharactersState = {
  original: CharacterMap;
  updated: CharacterMap;
};

const initialState: CharactersState = {
  original: {},
  updated: {},
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state: CharactersState, action: PayloadAction<Character[]>) {
      state.original = action.payload.reduce((acc: CharacterMap, current: Character) => {
        acc[current.id] = current;
        return acc;
      }, {});
    },
    updateCharacter(state: CharactersState, action: PayloadAction<Character>) {
      state.updated[action.payload.id] = action.payload;
    },
  },
});

export const { setCharacters, updateCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
