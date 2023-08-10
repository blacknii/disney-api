import { configureStore } from "@reduxjs/toolkit";
import favoritesIdsReducer from "./favoritesIdsSlice";

export const store = configureStore({
  reducer: {
    favoritesIds: favoritesIdsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
