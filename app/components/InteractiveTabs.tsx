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
    <section className="relative w-full bg-[#eef0ff] px-4 pb-[150px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative min-h-[890px] overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(115deg,#2b2648_0%,#24213d_36%,#1a1e29_72%)] px-6 pb-20 pt-20 shadow-[0_34px_90px_rgba(34,30,58,.18)] sm:px-10 lg:px-[158px] lg:pt-[120px]">
          {/* Subtle ambient light glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#6437fc]/20 blur-[100px] pointer-events-none" />

          {/* Tab Button Selector */}
          <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-white/5 pb-4 sm:gap-3">
            {TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "border-[#6f4cff] bg-[#242b39] text-white shadow-[0_0_0_5px_rgba(100,55,252,.12)]"
                      : "bg-[#1c2233] text-slate-400 hover:text-white hover:bg-[#252c42]"
                  } h-[59px] rounded-full border border-white/[.07] px-7 text-[18px] font-medium`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 items-start gap-10 lg:-mt-[100px] lg:grid-cols-[500px_850px] lg:gap-[76px]">
            {/* Left Info Column */}
            <div className="space-y-7 lg:pt-[270px]">
              <div className="flex h-[78px] w-[78px] items-center justify-center rounded-[22px] border border-[#6437fc]/30 bg-[#6437fc]/10 text-[#6437fc]">
                <current.icon className="h-9 w-9 text-[#6437fc]" />
              </div>

              <h3 className="text-[clamp(3.4rem,4.2vw,5rem)] font-normal leading-none tracking-[-0.045em] text-white">
                {current.title}
              </h3>

              <p className="max-w-[560px] text-[20px] leading-[1.42] text-[#c3c9e0]">
                {current.description}
              </p>

              <div>
                <a
                  href="https://suite.adyouneed.com/authentication/register"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[72px] w-[264px] items-center justify-center rounded-full border border-[#6742d1]/80 bg-[#202330] text-[17px] font-semibold text-white shadow-[0_18px_44px_rgba(100,55,252,.24)] transition-transform active:scale-95"
                >
                  Start Your Free Trial
                </a>
              </div>
            </div>

            {/* Right Screenshot Column */}
            <div className="w-full lg:w-[850px]">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0d17] p-2.5 shadow-2xl transition-all duration-300">
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
