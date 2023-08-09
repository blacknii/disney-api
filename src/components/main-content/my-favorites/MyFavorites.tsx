import { Typography, Stack } from "@mui/material";
import Card from "../../UI/Card";
import { Character } from "../../../shared/character.model";

const MyFavorites = () => {
  const DUMMY_CHARACTERS: Character[] = [
    {
      id: 138,
      films: ["Frozen", "Ralph Breaks the Internet", "Frozen II"],
      tvShows: ["Once Upon a Time"],
      name: "King Agnarr",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/6/63/Profile_-_King_Agnarr_Frozen_2.jpg",
    },
    {
      id: 24,
      films: [
        "Alice in Wonderland (2010 film)",
        "Alice Through the Looking Glass",
      ],
      tvShows: [],
      name: "Absolem",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/4/4d/Caterpillar.jpg",
    },
    {
      id: 173,
      films: [
        "Beverly Hills Chihuahua 2",
        "Beverly Hills Chihuahua 3: Viva la Fiesta",
      ],
      tvShows: [],
      name: "Ali",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/7/75/Char_80637.jpg",
    },
  ];

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
        {DUMMY_CHARACTERS.map((character: Character) => (
          <Card character={character} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MyFavorites;
