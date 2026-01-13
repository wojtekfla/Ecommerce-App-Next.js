"use client";

import { useState, useEffect, useMemo } from "react";
import { Product, Category } from "@/lib/types";

import ProductSidebar from "@/components/product/sidebar/ProductSidebar";
import ProductContainer from "@/components/product/container/ProductContainer";

const ProductLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  // filter states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("latest");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  // fetch all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching all products: ", error);
      }
    };
    fetchAllProducts();
  }, []);

  // fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        console.log("Categories API response:", data, "type:", typeof data);
        setCategories(Array.isArray(data) ? data : []);
        // setCategories(data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };
    fetchCategories();
  }, []);

  // client-side filtering and sorting
  const filteredProducts = useMemo(() => {
    let filtered = Array.isArray(allProducts) ? allProducts : [];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.categoryId === selectedCategory
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

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
        filtered.sort((a, b) => {
          const aStock = a.stock.reduce((sum, s) => sum + s.amount, 0);
          const bStock = b.stock.reduce((sum, s) => sum + s.amount, 0);
          return bStock - aStock;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [allProducts, selectedCategory, selectedSort, priceRange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 border-t-2 border-grey-one">
      <div className="lg:col-span-3 p-4">
        <ProductSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
        />
      </div>
      <div className="lg:col-span-9 p-4 pl-10 border-l-2 border-grey-one">
        <ProductContainer
          filteredProducts={filteredProducts}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default ProductLayout;
