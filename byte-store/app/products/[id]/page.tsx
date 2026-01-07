import { notFound } from "next/navigation";
import { mockProducts } from "@/components/products/mockData";
import ProductDetail from "@/components/products/detail/ProductDetail";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
};

export default ProductDetailPage;
