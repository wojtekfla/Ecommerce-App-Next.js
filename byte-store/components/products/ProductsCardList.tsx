import { mockProducts } from "./mockData";
import ProductCard from "./ProductCard";

const ProductsCardList = () => {
  return (
    <div>
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCardList;
