"use client"; // so we can use useRouter for navigation
import React from "react";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.oversizedFeatureProduct,
    title: "Oversized Tees",
    category: "OverSized T-shirt",
    description:
      "Stay warm and comfortable with our breathable, oversized hoodies designed for intense workouts and casual wear.",
  },
  {
    id: 2,
    image: assets.tankTopFeatureProduct,
    title: "Breathable Tank Tops",
    category: "Tank Tops",
    description:
      "Keep cool and stay focused with our ventilated tank tops built for high-intensity sports.",
  },
  {
    id: 3,
    image: assets.hoodieFeatureProduct,
    title: "Powerflex Gym Hoodie",
    category: "Hoodies",
    description:
      "Engineered for mobility and durability, this hoodie supports your toughest training days.",
  },
  {
    id: 4,
    image: assets.TshirtFeatureProduct,
    title: "Athletic Performance T-Shirt",
    category: "Performance T-shirt",
    description:
      "Lightweight and moisture-wicking tees perfect for gym sessions and outdoor training.",
  },
];

const FeaturedProduct = () => {
  const router = useRouter();

  const handleBuyNow = (category) => {
    router.push(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description, category }) => (
          <div
            key={id}
            className="rounded-md overflow-hidden shadow-lg flex flex-col"
          >
            {/* Image clickable wrapper */}
            <div className="relative w-full h-64">
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority={id === 1}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text and button */}
            <div className="mt-4 px-4 text-center text-gray-900 flex flex-col items-center space-y-3 bg-gray-100 bg-opacity-70 rounded-md p-4">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-[90%]">
                {description}
              </p>
              <button
                onClick={() => handleBuyNow(category)}
                className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded text-white hover:bg-orange-700 transition mb-6"
              >
                Buy now{" "}
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;