import { Stack, Grid, TextField } from "@mui/material";
import { useState } from "react";

import CharactersList from "./CharactersList";
import MostPopularCharacters from "./MostPopularCharacters";
import { Character } from "../../../shared/character.model";

const Home = ({
  characters,
  favoriteCharacters,
}: {
  characters: Character[];
  favoriteCharacters: Character[];
}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack alignItems="center" gap={4}>
      <MostPopularCharacters characters={characters} />
      <TextField
        fullWidth
        id="search bar"
        label="Character name"
        value={searchValue}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setSearchValue(e.target.value);
        }}
      />
      <Grid container spacing={2} padding={2} columns={{ sm: 1, md: 2 }}>
        <Grid item xs={1}>
          <CharactersList characters={characters} />
        </Grid>
        <Grid item xs={1}>
          <CharactersList
            characters={favoriteCharacters}
            allowFiltering={true}
            searchValue={searchValue}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
