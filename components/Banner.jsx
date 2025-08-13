"use client"; // make it a client component
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation"; // import useRouter

const Banner = () => {
  const router = useRouter(); // initialize router

  const handleBuyNow = () => {
    router.push(`/category/${encodeURIComponent("OverSized T-shirt")}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <Image
        className="max-w-56"
        src={assets.TshirtBanner}
        alt="Tshirt Banner"
      />

      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Gear Up for Your Best Workout
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          Designed for performance, comfort, and style. 
          Move freely and stay cool during every session.
        </p>
        <button
          onClick={handleBuyNow}
          className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white"
        >
          Buy now
          <Image
            className="group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
      </div>

      <Image
        className="max-w-56"
        src={assets.TshirtBlackBanner}
        alt="Tshirt Black Banner"
      />
    </div>
  );
};

export default Banner;
