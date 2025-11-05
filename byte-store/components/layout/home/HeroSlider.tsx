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
    <section className="w-full bg-[var(--color-black-one)] flex flex-col gap-4 sm:gap-6 px-10 sm:px-10">
      <div className="relative w-full bg-gradient-to-r from-[var(--color-black-two)] to-[var(--color-black-three)] border border-[var(--color-grey-one)] sm:border sm:rounded-md overflow-hidden">
        {/* Strzałka w lewo */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--color-orange-one)] text-black p-1 rounded shadow-md hover:bg-[var(--color-orange-one)] transition cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-10 cursor-pointer" />
        </button>


        {/* sm-640px, md-768px, lg-1024px, xl-1280px, 2xl-1536px */}
        {/* Zawartość hero */}
        <div id="div0" className="flex flex-wrap sm:flex-row sm:px-8 justify-center items-center gap-4 md:mx-6 sm:mx-12 md:max-w-[80%] sm:max-w-[70%]">
          {/* Tekst */}
          <div id="div1" className="flex flex-col justify-between gap-4 z-10 text-left sm:max-w-[40%]">
            <h1 className="text-[var(--color-white-one)] leading-tight text-2xl font-bold">
              {slides[current].title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg  text-[var(--color-white-one)] opacity-90 leading-relaxed">
              {slides[current].description}
            </p>
            <Link
              href="/category"
              className="inline-flex rounded bg-[var(--color-black-two)] text-[var(--color-orange-one)] border-2 border-[var(--color-orange-one)] hover:bg-[var(--color-orange-two)] hover:text-[var(--color-white-one)] transition w-fit"
            >
              Explore Category
            </Link>
          </div>

          {/* Obrazek */}
          <div className="order-2 sm:order-none flex-shrink-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              width={400}
              height={400}
              priority
              className="w-full h-full object-contain transform rotate-[-15deg] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Strzałka w prawo */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--color-orange-one)] text-black p-1 rounded shadow-md hover:bg-[var(--color-orange-one)] transition cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-10 cursor-pointer" />
        </button>
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
