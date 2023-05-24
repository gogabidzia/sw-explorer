import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterMap, CharactersState } from './types';
import { Character } from '@/src/external/swapi/types';

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
