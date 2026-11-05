"use client";

import React from "react";
import { Sparkles, ArrowDownRight, RefreshCw } from "lucide-react";

export default function FeaturesInfiniteReach() {
  return (
    <section className="relative w-full bg-[#eef0ff] text-[#0b0d17] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0b0d17] mb-4">
            One Button <br className="hidden sm:inline" />
            Infinite Reach
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Publish to all platforms, automate A/B testing, and invest your money where it yields results - all automated with a single click.
          </p>
        </div>

        {/* Card 1: Multi-channel journey */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-6 flex flex-col lg:flex-row items-center gap-8 hover:shadow-md transition-shadow">
          <div className="lg:w-1/2 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0d17]">
              Your effortless multi-channel journey starts here.
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Advertise across multiple platforms with a single click and let our advanced AI handle the rest.
            </p>
          </div>

          {/* Platform Matrix with Central Smart Campaign Button */}
          <div className="lg:w-1/2 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center w-full">
            <div className="grid grid-cols-5 gap-3 max-w-sm w-full mb-4 items-center justify-items-center">
              {[
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63eb80_meta-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf04b9ba2fb3d7c21e8_google-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63ea11_bing-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf0ece704eafd789062_linkedin-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf003a5a1acb4583ed0_tiktok-icon.svg",
              ].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  <img src={icon} alt="" className="w-4 h-4 object-contain" />
                </div>
              ))}
            </div>

            {/* Central Smart Campaign Button */}
            <div className="relative group my-2">
              <div className="absolute -inset-1 rounded-full bg-[#6437fc]/30 blur-md group-hover:bg-[#6437fc]/50 transition-all" />
              <div className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6437fc] text-white text-xs font-semibold shadow-md shadow-[#6437fc]/25">
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Smart Campaign</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3 max-w-sm w-full mt-4 items-center justify-items-center">
              {[
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf08e35d58f973dde12_pinterest-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf1d64f4718de137ec0_display-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/6474c817fc70e96d0a846d05_select-a-platform-9.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/6474c816f2545c98933ae1b2_select-a-platform-2.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64afd18d1a3105ba087e594a_TIKTOK.svg",
              ].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  <img src={icon} alt="" className="w-4 h-4 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Daily AI Optimizations & Real-Time Budget Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 2: Daily AI optimizations */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-medium text-slate-800">Your first headline is here!</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                  CPA: $150
                  <ArrowDownRight className="w-3 h-3 text-rose-500" />
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-medium text-slate-800">Your second headline is here!</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                  CPA: $150
                  <ArrowDownRight className="w-3 h-3 text-rose-500" />
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#6437fc]/30 shadow-2xs">
                <span className="text-xs font-medium text-slate-800">Your third headline is here!</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6437fc]">
                  <RefreshCw className="w-3 h-3 animate-spin text-[#6437fc]" />
                  Preparing a new headline with AI
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0b0d17] mb-1">
                Daily AI optimizations, <br />
                great ad results.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Testing is key to great ad results. Automate this process with our AI, let it create and test ads in the background to deliver maximum impact.
              </p>
            </div>
          </div>

          {/* Card 3: Real time budget allocation */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6 flex flex-col items-center">
              {/* Dynamic flow SVG */}
              <div className="w-full relative h-28 flex items-center justify-around">
                {/* Platform pills on top */}
                {["Meta", "Google", "Bing", "TikTok", "LinkedIn"].map((name, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[11px] font-bold text-slate-800 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-2xs">
                      +$45
                    </span>
                    <span className="text-[9px] text-slate-400 mt-0.5">$150</span>
                  </div>
                ))}
              </div>

              {/* Animated Dashed Circuit Line */}
              <svg viewBox="0 0 300 40" className="w-full h-8 stroke-slate-300 fill-none stroke-[2]">
                <path d="M20,5 Q75,35 150,35 Q225,35 280,5" className="path-dash stroke-[#6437fc]" />
              </svg>

              {/* Central Budget Hub */}
              <div className="mt-2 text-center">
                <span className="px-4 py-1.5 rounded-full bg-[#6437fc]/10 text-[#6437fc] text-xs font-bold border border-[#6437fc]/20">
                  Total Budget: $1000
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0b0d17] mb-1">
                Real time budget allocation, <br />
                for real time savings.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                It’s like having your own personal team of media buyers, vigilantly adjusting your budget for optimal ROI, all in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
