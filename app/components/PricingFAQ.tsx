"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How is my first month’s fee calculated?",
    a: "Your first month’s fee is based on your last seven days of ad spend, multiplied by four. This gives us a projected monthly ad spend to determine your initial tier.",
  },
  {
    q: "If I reduce my ad spend, does my cost go down too?",
    a: "Yes, with the Pay-as-you-Grow Plan, your cost automatically adjusts downward if your monthly ad spend decreases.",
  },
  {
    q: "Are there any hidden fees in the Pay-as-you-Grow Plan?",
    a: "No, there are absolutely no hidden fees. You pay strictly based on your tier and ad spend.",
  },
  {
    q: "With the Pay-as-you-Grow Plan, do I get all ADYOUNEED features?",
    a: "Yes! All users get full access to all features, including instant ads, clickfraud protection, and automated multi-channel budget allocation.",
  },
  {
    q: "Can I save with a yearly package if my ad spend is consistent?",
    a: "Absolutely! The annual plan saves you 25% across all tiers. Connect unlimited ad accounts and invite as many users as you need.",
  },
];

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#080911] text-white pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 tracking-tight">
          Frequently asked questions about our pricing
        </h3>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#121522] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-200">
                    {item.q}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#bdc5e6]">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
