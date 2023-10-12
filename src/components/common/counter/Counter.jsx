import React from "react";

function Counter({ sumar, contador, restar, onAdd }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-left my-5">
        <button
          onClick={sumar}
          className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-0 px-2 rounded mr-2 "
        >
          +
        </button>
        <h3 className="border-inherit border-2 rounded px-2">{contador}</h3>
        <button
          onClick={restar}
          className="bg-red-500 hover-bg-red-700 text-white font-bold py-0 px-2 rounded ml-2"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => onAdd(contador)}
          className="bg-violet-300 hover:bg-violet-400 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Counter;
