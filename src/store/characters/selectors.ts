import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selectOriginalCharacters = (state: RootState) => state.characters.original;
const selectUpdatedCharacters = (state: RootState) => state.characters.updated;

export const selectAllCharacters = createSelector(
  [selectOriginalCharacters, selectUpdatedCharacters],
  (originalCharacters, updatedCharacters) => {
    const allCharacters = {
      ...originalCharacters,
    };

    Object.keys(originalCharacters).forEach((id) => {
      allCharacters[id] = {
        ...allCharacters[id],
        ...updatedCharacters[id],
      };
    }); // making sure that updated character is not shown on all pages.

    return allCharacters;
  }
);
