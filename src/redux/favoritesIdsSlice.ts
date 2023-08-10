import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number[] = JSON.parse(
  localStorage.getItem("favoritesIds") || "[]"
);

export const favoritesIdsSlice = createSlice({
  name: "favoritesIds",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
      localStorage.setItem("favoritesIds", JSON.stringify(state));
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const index = state.indexOf(action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("favoritesIds", JSON.stringify(state));
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesIdsSlice.actions;

export default favoritesIdsSlice.reducer;
