import { Typography, Stack } from "@mui/material";

import Card from "../../UI/Card";
import CardSkeleton from "../../UI/CardSkeleton";
import Error from "../Error";
import { Character } from "../../../shared/character.model";

interface MyFavoritesProps {
  favoriteCharacters: Character[];
  loading: boolean;
  error: string | null;
}

const MyFavorites = ({
  favoriteCharacters,
  loading,
  error,
}: MyFavoritesProps) => {
  const cards = favoriteCharacters.map((character: Character) => (
    <Card key={character.id} character={character} />
  ));

  const cardsSkeletons = Array(10)
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
        {loading ? cardsSkeletons : cards}
        {!loading && favoriteCharacters.length === 0 && (
          <Typography variant="body1" color="gray">
            You have no favorite characters
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default MyFavorites;
