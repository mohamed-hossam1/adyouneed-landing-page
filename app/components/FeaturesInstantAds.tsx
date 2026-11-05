"use client";

import React, { useState } from "react";
import { Sparkles, Check, Globe, Send } from "lucide-react";

export default function FeaturesInstantAds() {
  const [url, setUrl] = useState("https://www.adyouneed.com");

  return (
    <section className="relative w-full bg-[#eef0ff] px-4 py-[150px] text-[#0b0d17] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1185px]">
        {/* Section Header */}
        <div className="mx-auto mb-[100px] max-w-[920px] text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6437fc]/10 text-[#6437fc] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            New Feature
          </div>
          <h2 className="mb-5 text-[clamp(3.5rem,4.2vw,5rem)] font-bold leading-[.98] tracking-[-0.045em] text-[#141622]">
            One Click <br className="hidden sm:inline" />
            Instant Ads
          </h2>
          <p className="text-[clamp(1rem,1.16vw,1.4rem)] leading-[1.45] text-[#171923]">
            Generate all your ad creatives, texts, and audiences, and publish result bringing ads with a single click. The fastest end-to-end ad creation on the planet.
          </p>
        </div>

        {/* Card 1: Instant AI-Driven Campaigns */}
        <div className="mb-7 flex min-h-[345px] flex-col items-center gap-10 rounded-[25px] border border-white bg-white/75 p-10 shadow-sm transition-shadow hover:shadow-md lg:flex-row lg:p-[52px]">
          <div className="space-y-5 lg:w-[46%]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-700">
              <span className="text-slate-400">Powered by</span>
              <strong className="text-slate-900 font-bold">AdCreative.ai</strong>
            </div>
            <h3 className="text-[34px] font-semibold tracking-[-0.035em] text-[#11131d]">
              Instant AI-Driven Campaigns
            </h3>
            <p className="text-[17px] leading-[1.48] text-[#344669]">
              Provide your website URL, and let our advanced AI powered by AdCreative.ai generate all the visuals, texts, and audiences in a matter of seconds. Select the ones you like and click publish. The world&apos;s fastest high-conversion rate ad publishing workflow.
            </p>
          </div>

          {/* Ad Creative Mockups Display */}
          <div className="flex w-full items-center justify-center gap-3 overflow-x-auto py-2 lg:w-[54%]">
            {[
              {
                score: "98/100",
                title: "DON'T MISS OUT: LIMITED OFFER!",
                bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
                img: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0bea4ae9342452d70d2b_Group%2029663.avif",
              },
              {
                score: "95/100",
                title: "POWERFUL TOOL FOR YOUR BUSINESS",
                bg: "bg-gradient-to-br from-blue-500 to-cyan-600",
                img: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0bea3bd7f8e72a51eb56_Group%2029664.avif",
              },
              {
                score: "92/100",
                title: "CLAIM YOUR SPECIAL DISCOUNT",
                bg: "bg-gradient-to-br from-amber-500 to-orange-600",
                img: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0beae2a311df03be5447_Group%2029666.avif",
              },
            ].map((ad, idx) => (
              <div
                key={idx}
                className="w-40 sm:w-44 shrink-0 rounded-xl bg-white border border-slate-200 shadow-md p-2.5 transition-transform hover:-translate-y-1.5 duration-200"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5">
                  <span className="font-semibold text-[#6437fc]">Score {ad.score}</span>
                  <span className="text-slate-400">Sponsored</span>
                </div>
                <div className="relative h-28 rounded-lg overflow-hidden mb-2 bg-slate-100">
                  <img
                    src={ad.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                    <p className="text-[10px] font-bold text-white leading-tight">
                      {ad.title}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="w-12 h-2 bg-slate-200 rounded"></div>
                  <div className="px-2 py-0.5 rounded bg-[#6437fc] text-[9px] text-white font-medium">
                    Select
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: AI Scanner & One Click Publish */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* Card 2: AI Website Scanner */}
          <div className="flex min-h-[560px] flex-col justify-between rounded-[25px] border border-white bg-white/75 p-10 shadow-sm transition-shadow hover:shadow-md lg:p-[52px]">
            <div className="mb-8 min-h-[260px] space-y-5 rounded-[18px] border border-slate-100 bg-slate-50 p-6">
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs text-slate-700 flex-1 mr-2">
                  <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full font-medium text-slate-800 focus:outline-none"
                  />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-semibold border border-emerald-200/60">
                  <Check className="w-3 h-3" />
                  Scanned!
                </span>
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Business Owners", "Professional", "Marketing Agencies", "Special discounts"].map(
                  (tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6437fc]" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-[34px] font-semibold tracking-[-0.035em] text-[#11131d]">AI Website Scanner</h3>
              <p className="text-[17px] leading-[1.48] text-[#344669]">
                Provide your product/service URL, and let us fine-tune your AI model that knows everything about your product.
              </p>
            </div>
          </div>

          {/* Card 3: One Click Publish! */}
          <div className="flex min-h-[560px] flex-col justify-between rounded-[25px] border border-white bg-white/75 p-10 shadow-sm transition-shadow hover:shadow-md lg:p-[52px]">
            <div className="relative mb-8 flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-slate-100 bg-slate-50 p-6">
              {/* Circuit SVG Lines */}
              <svg
                viewBox="0 0 300 80"
                className="w-full h-16 stroke-slate-300 fill-none stroke-[2] mb-3"
              >
                <path d="M10,40 H100 Q120,40 130,20 H170 Q180,40 200,40 H290" className="path-dash stroke-[#6437fc]" />
              </svg>

              <button
                onClick={() => alert("Campaign published across Meta, Google, and LinkedIn!")}
                className="relative px-7 py-3 rounded-full bg-[#6437fc] hover:bg-[#5229db] text-white font-semibold text-xs tracking-wide shadow-lg shadow-[#6437fc]/30 flex items-center gap-2 transition-transform active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                Publish Campaign
              </button>
            </div>

            <div>
              <h3 className="mb-2 text-[34px] font-semibold tracking-[-0.035em] text-[#11131d]">One Click Publish!</h3>
              <p className="text-[17px] leading-[1.48] text-[#344669]">
                Select the AI-generated creatives you like and click to publish your result-bringing ads with a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
