"use client";

import { useState } from "react";
import Image from "next/image";

const PLACEHOLDER_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f8fafc;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23e2e8f0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23cbd5e1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)' /%3E%3Crect x='40' y='40' width='320' height='320' rx='8' fill='none' stroke='%23475569' stroke-width='2' stroke-dasharray='8,4' opacity='0.4'/%3E%3Crect x='100' y='110' width='200' height='140' rx='6' fill='%23475569' opacity='0.25'/%3E%3Crect x='80' y='290' width='240' height='32' rx='6' fill='%23475569' opacity='0.2'/%3E%3C/svg%3E`;

interface ProductImagesProps {
  images: string[];
  productName: string;
  fallbackImage?: string; // image z url product
}

const ProductImages = ({
  images,
  productName,
  fallbackImage = PLACEHOLDER_IMAGE,
}: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // fallback logic
  const imageList = images && images.length > 0 ? images : [fallbackImage];

  const displayImages = [...imageList];
  while (displayImages.length < 4) {
    displayImages.push(PLACEHOLDER_IMAGE);
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-white-two rounded-xl p-2 flex items-center justify-center h-100">
        <Image
          src={displayImages[selectedImage]}
          alt={productName}
          width={500}
          height={500}
          className="max-w-full max-h-full object-contain"
          priority
        />
      </div>

      {/* Thumbnail galery */}
      <div className="flex justify-center gap-2">
        {displayImages.slice(0, 3).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`
              relative w-36 h-28 rounded-lg p-1 transition-all bg-white-two
              border
              ${
                selectedImage === index
                  ? "border-orange-one"
                  : "border-grey-one hover:border-gray-500"
              }
            `}
          >
            <Image
              src={image}
              alt={`${productName} view ${index + 1}`}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
