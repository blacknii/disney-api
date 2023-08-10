import { Typography, Stack } from "@mui/material";

import { Character } from "../../../shared/character.model";
import Card from "../../UI/Card";
import CardSkeleton from "../../UI/CardSkeleton";
import Error from "../Error";

const MyFavorites = ({
  favoriteCharacters,
  loading,
  error,
}: {
  favoriteCharacters: Character[];
  loading: boolean;
  error: string | null;
}) => {
  const carts = favoriteCharacters.map((character: Character) => (
    <Card key={character.id} character={character} />
  ));

  const cartsSkeletons = Array(10)
    .fill(0)
    .map((_, i) => <CardSkeleton key={i} />);

  if (error) {
    return <Error errorType="500" />;
  }

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
        {loading ? cartsSkeletons : carts}
      </Stack>
    </Stack>
  );
};

export default MyFavorites;
