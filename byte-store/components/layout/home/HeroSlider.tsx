"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/lib/db.js";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    // <section className="max-w-[1360px] bg-[var(--color-black-one)] flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 lg:px-10">
    <section className="max-w-[1360px] bg-[var(--color-black-one)] flex flex-col gap-4 sm:gap-8 px-4">
      <div className="relative bg-gradient-to-r from-[var(--color-black-two)] to-[var(--color-black-three)] border border-[var(--color-grey-one)] rounded-md ">
        {/* Layout z strzałkami po bokach */}
        <div className="flex items-center justify-center sm:justify-between w-full px-4 sm:px-8 py-6 sm:py-10 gap-2 sm:gap-4">
          {/* Strzałka w lewo */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--color-orange-one)] text-black p-1 sm:p-2 rounded shadow-md hover:bg-[var(--color-orange-two)] transition cursor-pointer"
          >
            <ChevronLeft className="w-3 h-8 sm:w-4 sm:h-10" />
          </button>

          {/* Zawartość hero */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 px-6 sm:px-10 py-6 sm:py-10">
            {/* Tekst */}
            <div className="flex flex-col justify-center gap-3 sm:gap-4 text-center sm:text-left max-w-xs sm:max-w-md">
              <h1 className="text-[var(--color-white-one)] leading-tight text-4xl lg:text-5xl font-bold mb-4">
                {slides[current].title}
              </h1>
              <p className="text-xs sm:text-base items-center sm:items-start text-[var(--color-white-one)] opacity-90 leading-relaxed mb-1.5">
                {slides[current].description}
              </p>
              <Link
                href="/category"
                className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded bg-[var(--color-black-two)] text-[var(--color-orange-one)] border-2 border-[var(--color-orange-one)] hover:bg-[var(--color-orange-two)] hover:text-[var(--color-white-one)] transition w-fit mx-auto sm:mx-0"
              >
                Explore Category
              </Link>
            </div>

            {/* Obrazek */}
            {/* <div className="flex justify-center w-[30vw] sm:w-[40%] max-w-[400px] h-auto"> */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none">
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                width={300}
                height={300}
                priority
                className="w-48 h-48 object-contain transform rotate-[-15deg] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Strzałka w prawo */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--color-orange-one)] text-black p-1 sm:p-2 rounded shadow-md hover:bg-[var(--color-orange-two)] transition cursor-pointer"
          >
            <ChevronRight className="w-3 h-8 sm:w-4 sm:h-10" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mb-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === current
                ? "bg-[var(--color-orange-one)] scale-110"
                : "bg-[var(--color-grey-two)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
