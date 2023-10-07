import React, { useState, useEffect } from "react";
import CounterPresentacional from "./Counter";


function CounterContainer({ stock }) {
    const [contador, setContador] = useState(1);
    const [nombre, setNombre] = useState("Andrea");

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

    useEffect(() => {
       
        console.log("Se realizo una peticion");
    }, []); 

    console.log("montaje o actualizacion");

    return (
        <CounterPresentacional
            sumar={sumar}
            restar={restar}
            contador={contador}
            nombre={nombre}
            setNombre={setNombre}
        />
    );
}

export default CounterContainer;
