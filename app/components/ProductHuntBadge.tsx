"use client";

import React from "react";

export default function ProductHuntBadge() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-transparent px-4 py-16 text-center">
      <div className="flex flex-col items-center">
        <img
          src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646f39b06c97c1e35fd5974d_product-of-the-day.svg"
          alt="Product of the day 1st"
          className="mb-5 h-[120px] w-auto"
        />
        <p className="text-[16px] font-medium tracking-wide text-slate-500">
          ADYOUNEED proudly holds the title of
        </p>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[16px] font-bold text-slate-800">#1 Product of the Day on</span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#da552f] text-white text-[10px] font-bold">
            P
          </span>
          <span className="text-[16px] font-bold text-slate-800">Product Hunt</span>
        </div>
      </div>
    </div>
  );
}
