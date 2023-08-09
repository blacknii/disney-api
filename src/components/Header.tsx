import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar sx={{ position: "static" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography component="h1" variant="h5">
          DISNEY
        </Typography>
        <Stack component="nav" direction="row" gap={2}>
          <Link to="/" style={{ color: "#fff" }}>
            Home
          </Link>
          <Link to="favorites" style={{ color: "#fff" }}>
            My Favorites
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
