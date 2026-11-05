"use client";

import React, { useState } from "react";
import { LayoutDashboard, PlusCircle, ShieldAlert } from "lucide-react";

const TABS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "Discover the power at your fingertips with ADYOUNEED's vibrant, user-friendly dashboard! Dive into real-time insights, easily manage your ads and optimize with confidence.",
    image:
      "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba2f6c4b673648260fa549_Mask%20Group%20169.avif",
  },
  {
    id: "create",
    label: "Ad Creation",
    icon: PlusCircle,
    title: "Create an ad",
    description:
      "Experience intuitive ad creation tailored to all skill levels. Seamlessly launch cross-platform campaigns with AI-crafted texts and high-converting creatives.",
    image:
      "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba2ee7686d49059e73b3e8_Mask%20Group%20167.avif",
  },
  {
    id: "clickfraud",
    label: "Click Fraud",
    icon: ShieldAlert,
    title: "Clickfraud Protection",
    description:
      "Protect your ad budget with our automated clickfraud detection engine. Shield your campaigns from competitor clicks, bots, and suspicious IP clusters.",
    image:
      "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba2ee78f85a030df434f95_Mask%20Group%20168.avif",
  },
];

export default function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const current = TABS[activeTab];

  return (
    <section className="relative w-full bg-[#eef0ff] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-[#141824] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Subtle ambient light glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#6437fc]/20 blur-[100px] pointer-events-none" />

          {/* Tab Button Selector */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-white/5">
            {TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#6437fc] text-white shadow-lg shadow-[#6437fc]/30"
                      : "bg-[#1c2233] text-slate-400 hover:text-white hover:bg-[#252c42]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#6437fc]/20 text-[#6437fc] flex items-center justify-center border border-[#6437fc]/30">
                <current.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div>
                <a
                  href="https://suite.adyouneed.com/authentication/register"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#6437fc] hover:bg-[#5229db] text-white text-xs font-semibold tracking-wide shadow-lg shadow-[#6437fc]/30 transition-transform active:scale-95"
                >
                  Start Your Free Trial
                </a>
              </div>
            </div>

            {/* Right Screenshot Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-[#0b0d17] p-2 shadow-2xl overflow-hidden transition-all duration-300">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-auto rounded-xl object-cover select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
