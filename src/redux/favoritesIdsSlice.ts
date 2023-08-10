import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = JSON.parse(
  localStorage.getItem("favoritesIds") || "[]"
);

export const favoritesIdsSlice = createSlice({
  name: "favoritesIds",
  initialState,
  reducers: {},
});

export default favoritesIdsSlice.reducer;
