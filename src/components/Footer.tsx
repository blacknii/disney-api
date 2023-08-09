import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar sx={{ position: "static", alignItems: "center" }}>
      <Toolbar>
        <Typography component="div">Made with ❤ 2023</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
