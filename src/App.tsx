import { CssBaseline, Stack, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/main-content/home/Home";
import MyFavorites from "./components/main-content/my-favorites/MyFavorites";
import Error from "./components/main-content/Error";

function App() {
  return (
    <BrowserRouter>
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
        <Box
          sx={{
            display: "flex",
            flexGrow: "1",
            alignItems: "stretch",
          }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="favorites" element={<MyFavorites />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Box>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
