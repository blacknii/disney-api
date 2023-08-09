import { Stack, Typography } from "@mui/material";
import Card from "../../UI/Card";

import { Character } from "../../../shared/character.model";

const MostPopularCharacters = ({ characters }: { characters: Character[] }) => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        textAlign: "center",
        maxWidth: 910,
        marginTop: 4,
        padding: 4,
      }}
      spacing={2}
    >
      <Typography variant="h1">Most popular Disney Characters</Typography>
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {characters.slice(0, 3).map((character: Character) => (
          <Card key={character.id} character={character} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MostPopularCharacters;
