import Pagination from "./Pagination";
import ProductsCardList from "./ProductsCardList";
import ProductsHeader from "./ProductsHeader";

const ProductsContainer = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProductsHeader />
      <ProductsCardList />
      <Pagination />
    </div>
  );
};

export default ProductsContainer;
