import ProductsSidebar from "./sidebar/ProductsSidebar";
import ProductsContainer from "./container/ProductsContainer";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 border-t-2 border-grey-one">
      <div className="lg:col-span-3 p-4">
        <ProductsSidebar />
      </div>
      <div className="lg:col-span-9 p-4 pl-10 border-l-2 border-grey-one">
        <ProductsContainer />
      </div>
    </div>
  );
};

export default ProductsPage;
