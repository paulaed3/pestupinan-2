import ProductCard from "../../common/ProductCard/ProductCard";

function ItemList({ items }) {
  return (
    <section className="grid grid-cols-4 items-center p-10 	">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
}

export default ItemList;
