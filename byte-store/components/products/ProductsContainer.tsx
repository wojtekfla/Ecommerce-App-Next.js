"use client";

import { useState, useEffect, useMemo } from "react";
import { mockProducts, mockCategories, sortOptions } from "./mockData";
import ProductsHeader from "./ProductsHeader";
import ProductsCardList from "./ProductsCardList";
import Pagination from "./Pagination";

const ProductsContainer = () => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  // filter
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("latest");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  // loading
  const [loading, setLoading] = useState(false);
  // filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;
    // filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.categoryId === selectedCategory
      );
    }
    return filtered;
  }, [selectedCategory]);

  const totalPages = 22; // przerobic na przeliczenie z bazy produktow

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    // tu bedzie fetch np:
    // fetch (`/api/products?page=${page}`)
  };

  return (
    <div className="flex flex-col gap-6">
      <ProductsHeader />
      <ProductsCardList />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsContainer;
