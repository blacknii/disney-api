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
} from "@mui/material";

import TvIcon from "@mui/icons-material/Tv";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { Character } from "../../../shared/character.model";

export default function CharactersList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Picture</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Film count</TableCell>
            <TableCell align="left">Favorites</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character: Character) => (
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
                <StarBorderIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
