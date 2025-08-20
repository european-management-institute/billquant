import { configureStore } from '@reduxjs/toolkit';
import wizardReducer from './features/wizardSlice';

export const store = configureStore({
  reducer: {
    wizard: wizardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
