import {
  Stack,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Skeleton,
} from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";

import { Character } from "../../../shared/character.model";
import FavoriteToggleIcon from "../../UI/FavoriteToggleIcon";

interface CharactersList {
  characters: Character[];
  allowFiltering?: boolean;
  searchValue?: string;
  loading: boolean;
}

export default function CharactersList({
  characters: propsCharacters,
  allowFiltering = false,
  searchValue = "",
  loading,
}: CharactersList) {
  let characters = propsCharacters;

  if (allowFiltering) {
    characters = characters.filter((character) => {
      if (allowFiltering) {
        return character.name.toLowerCase().includes(searchValue.toLowerCase());
      } else {
        return true;
      }
    });
  }

  const rowsSkeletons = Array(10)
    .fill(0)
    .map((_, i) => (
      <TableRow key={i}>
        <TableCell align="center">
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell align="left">
          <Skeleton sx={{ fontSize: "1rem", width: 200 }} />
        </TableCell>
        <TableCell align="right">
          <Skeleton sx={{ fontSize: "1rem" }} />
        </TableCell>
        <TableCell align="right">
          <Skeleton sx={{ fontSize: "1rem" }} />
        </TableCell>
      </TableRow>
    ));

  const rows = characters.map((character: Character) => (
    <TableRow key={character.id}>
      <TableCell align="center">
        <Avatar alt={character.name} src={character.imageUrl} />
      </TableCell>
      <TableCell align="left">
        <Stack direction="row" gap={1} alignItems="center">
          {character.name}
          {character.tvShows.length > 0 && (
            <Tooltip
              placement="top"
              title={character.tvShows.map((show, i) =>
                i ? " - " + show : show
              )}
            >
              <TvIcon />
            </Tooltip>
          )}
        </Stack>
      </TableCell>
      <TableCell align="right">{character.films.length}</TableCell>
      <TableCell align="right">
        <FavoriteToggleIcon id={character.id} />
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "60rem" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Picture</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right" sx={{ minWidth: "7rem" }}>
              Film count
            </TableCell>
            <TableCell align="left">Favorites</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{loading ? rowsSkeletons : rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
