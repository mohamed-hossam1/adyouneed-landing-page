"use client";

import React from "react";

const PLATFORMS = [
  {
    name: "Meta Ads",
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63eb80_meta-icon.svg",
  },
  {
    name: "Google Ads",
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf04b9ba2fb3d7c21e8_google-icon.svg",
  },
  {
    name: "Bing Ads",
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63ea11_bing-icon.svg",
  },
  {
    name: "Linkedin Ads",
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf0ece704eafd789062_linkedin-icon.svg",
  },
  {
    name: "Tiktok Ads",
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf003a5a1acb4583ed0_tiktok-icon.svg",
  },
  {
    name: "Pinterest Ads",
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf08e35d58f973dde12_pinterest-icon.svg",
  },
  {
    name: "Twitter Ads",
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf1d64f4718de137ec0_display-icon.svg",
  },
];

export default function HeroScreenPreview() {
  return (
    <div className="relative w-full pt-8 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background Giant Outline Text "Create an ad" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none select-none opacity-40 -z-10 flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646c7135dd0ef57c214649a1_create-an-ad.svg"
          alt=""
          className="w-[85%] max-w-4xl h-auto"
        />
      </div>

      {/* Hero Screen Container with glow and rounded border */}
      <div className="relative w-full max-w-6xl px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d101d]/90 p-1.5 sm:p-2.5 shadow-[0_20px_80px_-15px_rgba(100,55,252,0.3)]">
          {/* Dashboard screenshot */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-[#080911]">
            <img
              src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66b9fd18f5836d3a9c0168f7_ayn-hero.avif"
              alt="ADYOUNEED Platform Preview"
              className="w-full h-auto object-cover select-none"
              loading="eager"
            />
          </div>

          {/* Bottom baseline glowing mask */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <img
              src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646c73bc4ceb1cb290beb679_screen-bottom-mask_line.svg"
              alt=""
              className="w-3/4 max-w-2xl h-auto opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Dual Continuous Infinite Marquee Tickers */}
      <div className="w-full mt-14 space-y-4 overflow-hidden relative">
        {/* Row 1: Leftward Marquee */}
        <div className="flex w-max animate-marquee-left">
          {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <div
              key={`row1-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 mx-2.5 rounded-full bg-[#121522] border border-white/5 text-sm font-medium text-slate-300 hover:border-[#6437fc]/40 transition-colors select-none shadow-sm"
            >
              <img src={p.icon} alt="" className="w-4 h-4 object-contain" />
              <span>{p.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="flex w-max animate-marquee-right">
          {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <div
              key={`row2-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 mx-2.5 rounded-full bg-[#121522] border border-white/5 text-sm font-medium text-slate-300 hover:border-[#6437fc]/40 transition-colors select-none shadow-sm"
            >
              <img src={p.icon} alt="" className="w-4 h-4 object-contain" />
              <span>{p.name}</span>
            </div>
          ))}
        </div>

        {/* Side fade masks for seamless marquee appearance */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080911] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080911] to-transparent z-10" />
      </div>
    </div>
  );
}
