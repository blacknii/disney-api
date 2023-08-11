import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar sx={{ position: "static" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          <Typography component="h1" variant="h5">
            DISNEY
          </Typography>
        </Link>
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
