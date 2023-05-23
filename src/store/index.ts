import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './characters/slice';
import characterFilterReducer from './characterFilter/slice';

const rootReducer = {
  characters: charactersReducer,
  characterFilter: characterFilterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
