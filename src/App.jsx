import Navbar from "./components/Layout/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  let nombre = "Paula";

  return (
    <main>
      <Navbar />
      <ItemListContainer nombre={nombre} />
    </main>
  );
}

export default App;
