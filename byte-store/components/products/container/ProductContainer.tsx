"use client";

import { useState, useEffect, useMemo } from "react";
import { Product } from "@/components/products/mockData";
import ProductHeader from "./ProductHeader";
import ProductCardList from "./ProductCardList";
import Pagination from "./Pagination";

interface ProductContainerProps {
  filteredProducts: Product[];
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

const ProductContainer = ({
  filteredProducts,
  selectedSort,
  onSortChange,
}: ProductContainerProps) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [loading, setLoading] = useState(false);

  // paginated products for current page
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // calculate total pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / itemsPerPage)
  );

  // reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);

    // tu bedzie fetch np: fetch (`/api/products?page=${page}`)

    // scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
  };

  return (
    <div className="flex flex-col gap-6">
      <ProductHeader
        sortValue={selectedSort}
        onSortChange={onSortChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      <ProductCardList products={paginatedProducts} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductContainer;
