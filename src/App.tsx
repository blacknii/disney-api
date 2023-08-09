import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/main-content/home/Home";
import MyFavorites from "./components/main-content/my-favorites/MyFavorites";

function App() {
  const isMyFavoritesActive = true;
  return (
    <>
      <Header />
      {isMyFavoritesActive ? <MyFavorites /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
