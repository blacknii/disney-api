import { Typography, Stack } from "@mui/material";

import { useCharactersData } from "../../../hooks/useCharactersData";
import { Character } from "../../../shared/character.model";
import Card from "../../UI/Card";

const MyFavorites = () => {
  const characters = useCharactersData();

  return (
    <Stack
      sx={{
        alignItems: "center",
        maxWidth: 1600,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        My favorites
      </Typography>
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {characters.map((character: Character) => (
          <Card character={character} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MyFavorites;
