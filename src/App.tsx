import { CssBaseline, Stack, Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/main-content/home/Home";
import MyFavorites from "./components/main-content/my-favorites/MyFavorites";

function App() {
  const isMyFavoritesActive = true;
  return (
    <>
      <CssBaseline />
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Box sx={{ flexGrow: "1" }}>
          {isMyFavoritesActive ? <MyFavorites /> : <Home />}
        </Box>
        <Footer />
      </Stack>
    </>
  );
}

export default App;
