"use client";

import React, { useState } from "react";
import { Check, Edit3, Compass, BarChart3, ArrowRight } from "lucide-react";

export default function FeaturesOneTool() {
  const [campaignName, setCampaignName] = useState("Campaign Name Here");
  const [budget, setBudget] = useState("0.86");

  return (
    <section id="features" className="relative z-20 -mt-12 w-full rounded-t-[38px] bg-[#eef0ff] px-4 pb-20 pt-28 text-[#0b0d17] sm:rounded-t-[52px] sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0b0d17] mb-4 leading-tight">
            One tool <br />
            to rule them all
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            Create winning ads in minutes across top platforms, even if it’s your first time.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Create */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 space-y-2">
                {[
                  { step: "Step 1/5", label: "Platform", active: false, done: true },
                  { step: "Step 2/5", label: "Objective", active: false, done: true },
                  { step: "Step 3/5", label: "Audience", active: false, done: true },
                  { step: "Step 4/5", label: "Ad", active: true, done: true },
                  { step: "Step 5/5", label: "Publish", active: false, done: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      item.active
                        ? "bg-[#6437fc] text-white shadow-sm"
                        : "bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.active ? "bg-white" : "bg-slate-300"}`} />
                      {item.label}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] opacity-90">
                      {item.step}
                      {item.done && <Check className="w-3 h-3" />}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-24 shrink-0">
                <img
                  src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66b9fe141d3d9ff1c572b6e3_ayn-bg.svg"
                  alt="Phone preview"
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b0d17] mb-1">Create</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Effortlessly create ads in just 5 simple steps, with the help of AI.
              </p>
            </div>
          </div>

          {/* Card 2: Manage */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>Campaign Edit</span>
                <Edit3 className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#6437fc]"
              />
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">Budget</span>
                  <span className="text-slate-400 text-[11px]">Daily</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-slate-400">€</span>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-12 text-right font-semibold text-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b0d17] mb-1">Manage</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Take control, manage your campaigns effortlessly.
              </p>
            </div>
          </div>

          {/* Card 3: Diversify */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
              <div className="grid grid-cols-4 gap-2 mb-3">
                {[
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63eb80_meta-icon.svg",
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf04b9ba2fb3d7c21e8_google-icon.svg",
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63ea11_bing-icon.svg",
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf0ece704eafd789062_linkedin-icon.svg",
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf003a5a1acb4583ed0_tiktok-icon.svg",
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf08e35d58f973dde12_pinterest-icon.svg",
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf1d64f4718de137ec0_display-icon.svg",
                  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/6474c817fc70e96d0a846d05_select-a-platform-9.svg",
                ].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-white rounded-lg border border-slate-200/80 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform"
                  >
                    <img src={icon} alt="" className="w-5 h-5 object-contain" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-1">
                <span>Advertising platforms</span>
                <Compass className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b0d17] mb-1">Diversify</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Master multichannel advertising in minutes.
              </p>
            </div>
          </div>

          {/* Card 4: Protect */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-3">
                <span>Campaign Edit</span>
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 font-medium block">Scanned Clicks</span>
                  <span className="text-xs font-bold text-slate-800">14 534</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 font-medium block">Fraudulent Clicks</span>
                  <span className="text-xs font-bold text-slate-800">1 451</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 font-medium block">Blocked IPs</span>
                  <span className="text-xs font-bold text-slate-800">491</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 font-medium block">Fraudulent Clicks</span>
                  <span className="text-xs font-bold text-emerald-600">$748</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b0d17] mb-1">Protect</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Protect your ads from competitors and bots.
              </p>
            </div>
          </div>

          {/* Card 5: Understand */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6 flex flex-col justify-end h-[140px] relative overflow-hidden">
              {/* Wave SVG */}
              <svg
                viewBox="0 0 200 60"
                className="absolute inset-x-0 top-3 w-full h-12 stroke-[#6437fc] fill-none stroke-[2]"
              >
                <path d="M0,35 Q30,10 60,30 T120,20 T180,40 T200,25" />
              </svg>
              {/* Bar Chart Columns */}
              <div className="flex items-end justify-between gap-1.5 h-16 pt-4">
                {[40, 65, 30, 85, 55, 95, 70, 80].map((h, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${h}%` }}
                    className="w-full bg-[#6437fc]/20 hover:bg-[#6437fc] rounded-t transition-colors"
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b0d17] mb-1">Understand</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Identify what works, save time with insights.
              </p>
            </div>
          </div>

          {/* Card 6: Try it for free! (Dark CTA Card) */}
          <div className="bg-[#171b26] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#6437fc]/20 text-[#6437fc] flex items-center justify-center mb-6">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Try it for free!</h3>
              <p className="text-sm text-[#bdc5e6] leading-relaxed">
                Create and manage the ad you need, absolutely free during the trial period.
              </p>
            </div>
            <a
              href="https://suite.adyouneed.com/authentication/register"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#6437fc] hover:bg-[#5229db] text-white font-medium text-sm transition-colors shadow-md shadow-[#6437fc]/25"
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
