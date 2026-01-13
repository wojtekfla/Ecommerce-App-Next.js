import { notFound } from "next/navigation";
import { Product } from "@/lib/types";
import ProductDetail from "@/components/product/detail/ProductDetail";

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching product: ", error);
    return null;
  }
}

async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export default ProductDetailPage;
