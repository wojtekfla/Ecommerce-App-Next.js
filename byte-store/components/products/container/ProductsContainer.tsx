"use client";

import { useState, useEffect, useMemo } from "react";
import { mockProducts, mockCategories, sortOptions } from "../mockData";
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

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    // sort products
    switch (selectedSort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "stock":
        filtered.sort((a, b) => b.stock - a.stock);
        break;
      default:
        // keeporiginal order for "latest"
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSort, priceRange]);

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
  }, [selectedCategory, selectedSort, priceRange, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);

    // tu bedzie fetch np: fetch (`/api/products?page=${page}`)

    // scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  return (
    <div className="flex flex-col gap-6">
      <ProductsHeader
        sortValue={selectedSort}
        onSortChange={handleSortChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        // totalProducts={filteredProducts.length}
        // currentPage={currentPage}
        // loading={loading}
      />
      <ProductsCardList products={paginatedProducts} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsContainer;
