function CounterPresentacional({ sumar, contador, restar, nombre, setNombre} ) {
    return (
        <div>
          <button onClick={sumar}>sumar</button>
          <h3>{contador}</h3>
          <button onClick={restar}>restar</button>

          <h4>{nombre}</h4>
      <button onClick={()=>setNombre("Paula")}>Cambiar nombre</button>
          
        </div>
      );
    }
    

export default CounterPresentacional