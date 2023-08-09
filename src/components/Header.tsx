import { AppBar, Toolbar, Link, Typography, Stack } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ position: "static" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography component="h1" variant="h5">
          DISNEY
        </Typography>
        <Stack component="nav" direction="row" gap={2}>
          <Link href="#" color="primary.contrastText">
            Home
          </Link>
          <Link href="#" color="primary.contrastText">
            My Favorites
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
