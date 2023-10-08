function ProductCard({ item }) {
  return (
    <div className="bg-violet-300 my-2 mx-8 items-center rounded-2xl shadow-md">
      <img
        className="w-full aspect-square object-cover object-center rounded-t-2xl"
        src={item.img}
        alt=""
      />
      <div className="p-3">
        <h2 className="font-bold">{item.title}</h2>
        <h3>{item.description}</h3>
        <h3>${item.price}-</h3>
        <button className="border-2 border-black border-solid px-5 item-center mt-4 block mx-auto">Ver detalle</button>
      </div>
    </div>
  );
}

export default ProductCard;
