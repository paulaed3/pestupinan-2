import ProductCard from "../../common/ProductCard/ProductCard";

function ItemList({ items }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:p-10 mb-10"
    
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
}

export default ItemList;
