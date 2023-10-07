// eslint-disable-next-line react/prop-types
function ItemListContainer({ nombre }) {
  return (
    <div className="text-center ">
      <h2 className="font-bold">Bienvenida!! {nombre} </h2>
      <h3>Aca podras encontrar el listado de los productos de tecnologia</h3>
    </div>
  );
}

export default ItemListContainer;
