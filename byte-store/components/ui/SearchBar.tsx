"use client";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full flex items-center mx-10 font-light text-sm"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search for products"
        className="w-full rounded-lg bg-[var(--color-black-two)] text-[var(--color-white-two)] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-one)]"
      />
      <button
        type="submit"
        className="absolute right-3 text-[var(--color-grey-two)] hover:text-[var(--color-orange-one)]"
      >
        <Search size={16} />
      </button>
    </form>
  );
};

export default SearchBar;
