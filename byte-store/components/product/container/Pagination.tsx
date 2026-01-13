"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  // generate pages with dots
  const generatePages = () => {
    const pages = [];
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    // show current page and neighbors
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex justify-between items-center gap-3 mt-6 p-6 border border-amber-500">
      <div className="flex ">
        {pages.map((page, index) => (
          <button
            key={index}
            disabled={page === "..."}
            onClick={() => handlePageClick(+page)}
            className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-colors ${
              currentPage === page
                ? "bg-orange-one text-black font-medium"
                : "border-grey-two text-white hover:border-orange-one"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="flex items-center gap-1 px-3 py-2 text-grey-two border border-grey-two rounded-lg cursor-pointer hover:border-orange-one disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-5 h-4xl" />
          <span>Previous</span>
        </button>

        <div>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            className="flex items-center gap-1 px-3 py-2 text-grey-two border border-grey-two rounded-lg cursor-pointer hover:border-orange-one disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>Next</span>
            <ArrowRight className="w-5 h-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
