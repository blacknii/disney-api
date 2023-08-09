import { Stack, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Character } from "../../shared/character.model";

const Cart = ({ character }: { character: Character }) => {
  return (
    <Card
      key={character.id}
      sx={{
        width: 250,
        margin: 2,
      }}
      elevation={2}
    >
      <CardMedia
        sx={{ height: 250 }}
        image={character.imageUrl}
        title={character.name}
      />
      <CardContent>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <Typography variant="h5" component="div">
            {character.name}
          </Typography>
          <StarBorderIcon />
        </Stack>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Films:</Typography>
          <Typography variant="subtitle1">{character.films.length}</Typography>
        </Stack>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Tv Shows:</Typography>
          <Typography variant="subtitle1">
            {character.tvShows.length}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Cart;
