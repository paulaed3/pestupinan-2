import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

function CounterContainer({ stock, onAdd, initial = 1 }) {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire("Lo siento, no hay más unidades de este producto");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      Swal.fire("Ya solo tiene un producto");
    }
  };

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  return (
    <Counter sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} />
  );
}

export default CounterContainer;
