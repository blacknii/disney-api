import { CssBaseline, Stack, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/main-content/home/Home";
import MyFavorites from "./components/main-content/my-favorites/MyFavorites";
import Error from "./components/main-content/Error";
import { Character } from "./shared/character.model";

import { useCharactersData } from "./hooks/useCharactersData";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const {
    characters,
    loading,
    error,
  }: { characters: Character[]; loading: boolean; error: string | null } =
    useCharactersData();
  const favoritesIds = useSelector((state: RootState) => state.favoritesIds);
  const favoriteCharacters = characters.filter((character: Character) =>
    favoritesIds.includes(character.id)
  );
  return (
    <BrowserRouter>
      <CssBaseline />
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexGrow: "1",
            alignItems: "stretch",
          }}
        >
          <Routes>
            <Route
              index
              element={
                <Home
                  characters={characters}
                  favoriteCharacters={favoriteCharacters}
                  loading={loading}
                  error={error}
                />
              }
            />
            <Route
              path="favorites"
              element={
                <MyFavorites
                  favoriteCharacters={favoriteCharacters}
                  loading={loading}
                  error={error}
                />
              }
            />
            <Route path="*" element={<Error errorType="404" />} />
          </Routes>
        </Box>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
