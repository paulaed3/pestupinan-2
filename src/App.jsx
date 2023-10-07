import React, { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import CounterContainer from "./components/common/counter/CounterContainer";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
   const [montar, setMontar] = useState(false);


  return (
    <main>
      <Navbar />
      <CounterContainer/>
      <ItemListContainer/>
    </main>
  );
}

export default App;
