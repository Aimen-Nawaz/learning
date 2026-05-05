import { products } from "../../assets/Flowers";
import ProductCard from "../Folower/Products/ProductCard";

const ProductList = () => {
  return (
    <section className="products">
      <h2>Our Flowers</h2>

      <div className="container">
        {products?.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;