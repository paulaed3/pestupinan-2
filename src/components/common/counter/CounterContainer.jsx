import React, { useState, useEffect } from "react";
import Counter from "./Counter";

function CounterContainer({ stock, onAdd , initial=1}) {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Cantidad máxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Ya solo tiene un producto");
    }
  };

  return (
    <Counter sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} />
  );
}

export default CounterContainer;
