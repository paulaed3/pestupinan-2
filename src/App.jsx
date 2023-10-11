import Navbar from "./components/Layout/Navbar";
import CounterContainer from "./components/common/counter/CounterContainer";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
// 


function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer/>
      <ItemDetailContainer/>
      
    
    </main>
  );
}

export default App;
