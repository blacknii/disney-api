import { Stack, Grid, Typography } from "@mui/material";
import { useState } from "react";

import CharactersList from "./CharactersList";
import MostPopularCharacters from "./MostPopularCharacters";
import { Character } from "../../../shared/character.model";
import Error from "../Error";
import SearchBar from "./SearchBar";

const Home = ({
  characters,
  favoriteCharacters,
  loading,
  error,
}: {
  characters: Character[];
  favoriteCharacters: Character[];
  loading: boolean;
  error: string | null;
}) => {
  const [searchValue, setSearchValue] = useState("");

  if (error) {
    return <Error errorType="500" />;
  }

  return (
    <Stack
      alignItems="center"
      textAlign="center"
      gap={4}
      padding="0 1rem 0 1rem"
    >
      <MostPopularCharacters characters={characters} loading={loading} />
      <Typography
        component="h2"
        sx={{
          typography: { md: "h2", sm: "h3", xs: "h4" },
          maxWidth: "50rem",
        }}
        gutterBottom
      >
        The Best Animated Disney Characters of All Time
      </Typography>
      <SearchBar setSearchValue={setSearchValue} />
      <Grid container spacing={2} padding={2} columns={{ sm: 1, md: 2 }}>
        <Grid item xs={1}>
          <Typography
            component="h3"
            sx={{ typography: { md: "h3", xs: "h4" } }}
            gutterBottom
          >
            Disney Characters
          </Typography>
          <CharactersList characters={characters} loading={loading} />
        </Grid>
        <Grid item xs={1}>
          <Typography
            component="h3"
            sx={{ typography: { md: "h3", xs: "h4" } }}
            gutterBottom
          >
            My Favorites
          </Typography>
          <CharactersList
            characters={favoriteCharacters}
            allowFiltering={true}
            searchValue={searchValue}
            loading={loading}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
