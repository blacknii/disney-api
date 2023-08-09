import { Stack, Grid, Typography } from "@mui/material";

import { Character } from "../../../shared/character.model";
import CharactersList from "./CharactersList";

const Home = ({ characters }: { characters: Character[] }) => {
  return (
    <Stack textAlign="center" gap={4}>
      <Typography variant="h2" component="h1">
        Home
      </Typography>
      <Grid container spacing={2} padding={2} columns={{ sm: 1, md: 2 }}>
        <Grid item xs={1}>
          <CharactersList characters={characters} />
        </Grid>
        <Grid item xs={1}>
          <CharactersList characters={characters} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
