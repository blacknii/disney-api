import { Stack, Typography } from "@mui/material";
import Card from "../../UI/Card";

import { Character } from "../../../shared/character.model";
import CardSkeleton from "../../UI/CardSkeleton";

const MostPopularCharacters = ({
  characters,
  loading,
}: {
  characters: Character[];
  loading: boolean;
}) => {
  const carts = characters
    .slice(0, 3)
    .map((character: Character) => (
      <Card key={character.id} character={character} />
    ));

  const cartsSkeletons = Array(3)
    .fill(0)
    .map((_, i) => <CardSkeleton key={i} />);

  return (
    <Stack
      sx={{
        alignItems: "center",
        textAlign: "center",
        maxWidth: 910,
        marginTop: 4,
      }}
      spacing={2}
    >
      <Typography
        component="h1"
        sx={{ typography: { md: "h1", sm: "h2", xs: "h4" } }}
      >
        Most popular Disney Characters
      </Typography>
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {loading ? cartsSkeletons : carts}
      </Stack>
    </Stack>
  );
};

export default MostPopularCharacters;
