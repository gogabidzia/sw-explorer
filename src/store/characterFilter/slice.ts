import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterFiltersState } from './types';

const initialState: CharacterFiltersState = {
  page: 1,
  search: null,
};
const characterFilterSlice = createSlice({
  name: 'characterFilter',
  initialState,
  reducers: {
    setPage(state: CharacterFiltersState, action: PayloadAction<number>) {
      state.page = action.payload;
    },

    setSearch(
      state: CharacterFiltersState,
      action: PayloadAction<CharacterFiltersState['search']>
    ) {
      state.search = action.payload;
      state.page = 1;
    },
  },
});

export const { setPage, setSearch } = characterFilterSlice.actions;

export default characterFilterSlice.reducer;
