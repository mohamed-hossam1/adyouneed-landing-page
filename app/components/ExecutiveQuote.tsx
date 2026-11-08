"use client";

import React from "react";

export default function ExecutiveQuote() {
  return (
    <section className="relative w-full bg-transparent py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* AdCreative.ai Logo */}
        <img
          src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64760e4131337d3beb65a59f_adc-logo-black.svg"
          alt="AdCreative.ai Logo"
          className="h-8 w-auto mb-8 opacity-90"
        />

        {/* Quote */}
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0b0d17] leading-relaxed tracking-tight mb-8">
          &ldquo;ADYOUNEED is the only tool we recommend for ad creation and management. Its user-friendly interface and unmatched number of integrations make it our favorite tool for any business.&rdquo;
        </blockquote>

        {/* Speaker Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64760e425356edf41155b6ec_tufan-img.webp"
            alt="Tufan Gok"
            className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
          />
          <div className="text-left">
            <span className="text-sm font-bold text-[#0b0d17] block">Tufan Gok</span>
            <span className="text-xs text-slate-500 font-medium">CEO @ AdCreative.ai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
