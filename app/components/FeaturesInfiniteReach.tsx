"use client";

import React from "react";
import { Sparkles, ArrowDownRight, RefreshCw } from "lucide-react";

const WAVE = "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/648acc21e116506857d82308_wave-effect.svg";

const PLATFORM_ICONS = {
  meta: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63eb80_meta-icon.svg",
  google: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf04b9ba2fb3d7c21e8_google-icon.svg",
  bing: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63ea11_bing-icon.svg",
  linkedin: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf0ece704eafd789062_linkedin-icon.svg",
  tiktok: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf003a5a1acb4583ed0_tiktok-icon.svg",
};

const BUDGET_PLATFORMS = [
  { name: "Google", icon: PLATFORM_ICONS.google, x: 32 },
  { name: "Meta", icon: PLATFORM_ICONS.meta, x: 141 },
  { name: "Bing", icon: PLATFORM_ICONS.bing, x: 250 },
  { name: "TikTok", icon: PLATFORM_ICONS.tiktok, x: 359 },
  { name: "LinkedIn", icon: PLATFORM_ICONS.linkedin, x: 468 },
];

export default function FeaturesInfiniteReach() {
  return (
    <section className="relative w-full bg-transparent px-4 py-[150px] text-[#0b0d17] sm:px-6">
      <div className="mx-auto max-w-[1192.5px]">
        <div className="mx-auto mb-[100px] max-w-[859px] text-center">
          <h2 className="mb-5 text-[clamp(3.5rem,4.166vw,79.5px)] font-semibold leading-[1] tracking-[-0.045em] text-[#171926]">
            One Button <br className="hidden sm:inline" />
            Infinite Reach
          </h2>
          <p className="mx-auto max-w-[859px] text-[clamp(1rem,1.146vw,21.8625px)] leading-[1.5] text-[#171926]">
            Publish to all platforms, automate A/B testing, and invest your money where it yields results - all automated with a single click.
          </p>
        </div>

        <div className="mb-7 flex min-h-[345px] flex-col items-center gap-10 rounded-[24.8438px] border border-white bg-[radial-gradient(circle_at_50%_100%,rgba(250,251,253,0.6),rgba(250,251,253,0.28))] p-10 transition-shadow hover:shadow-md lg:flex-row lg:rounded-[24.8438px] lg:p-[52px]">
          <div className="space-y-4 lg:w-1/2">
            <h3 className="max-w-[480px] text-[34px] font-semibold leading-[1.18] tracking-[-0.035em] text-[#11131d]">
              Your effortless multi-channel journey starts here.
            </h3>
            <p className="max-w-[470px] text-[17px] leading-[1.48] text-[#344669]">
              Advertise across multiple platforms with a single click and let our advanced AI handle the rest.
            </p>
          </div>

          <div className="relative flex min-h-[240px] w-full flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white bg-white/40 p-6 lg:w-1/2">
            <img src={WAVE} alt="" aria-hidden className="pond-ripple h-[320px] w-[320px]" />
            <img src={WAVE} alt="" aria-hidden className="pond-ripple h-[320px] w-[320px]" style={{ animationDelay: "2.1s" }} />
            <span aria-hidden className="pond-ring h-[300px] w-[300px]" />
            <span aria-hidden className="pond-ring h-[300px] w-[300px]" style={{ animationDelay: "1.4s" }} />
            <span aria-hidden className="pond-ring h-[300px] w-[300px]" style={{ animationDelay: "2.8s" }} />

            <div className="relative z-10 mb-4 grid w-full max-w-sm grid-cols-5 items-center justify-items-center gap-3">
              {[PLATFORM_ICONS.meta, PLATFORM_ICONS.google, PLATFORM_ICONS.bing, PLATFORM_ICONS.linkedin, PLATFORM_ICONS.tiktok].map((icon, i) => (
                <div key={i} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-2xs">
                  <img src={icon} alt="" className="h-4 w-4 object-contain" />
                </div>
              ))}
            </div>

            <div className="group relative z-10 my-2">
              <div className="absolute -inset-1 rounded-full bg-[#6437fc]/30 blur-md transition-all group-hover:bg-[#6437fc]/50" />
              <div className="relative flex items-center gap-2 rounded-full bg-[#6437fc] px-6 py-2.5 text-xs font-semibold text-white shadow-[0_2px_40px_rgba(100,55,252,0.4)]">
                <Sparkles className="h-4 w-4 text-purple-200" />
                <span>Smart Campaign</span>
              </div>
            </div>

            <div className="relative z-10 mt-4 grid w-full max-w-sm grid-cols-5 items-center justify-items-center gap-3">
              {[
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf08e35d58f973dde12_pinterest-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf1d64f4718de137ec0_display-icon.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/6474c817fc70e96d0a846d05_select-a-platform-9.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/6474c816f2545c98933ae1b2_select-a-platform-2.svg",
                "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64afd18d1a3105ba087e594a_TIKTOK.svg",
              ].map((icon, i) => (
                <div key={i} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-2xs">
                  <img src={icon} alt="" className="h-4 w-4 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <div className="flex min-h-[478px] flex-col justify-between rounded-[24.8438px] border border-white bg-[radial-gradient(circle_at_100%_100%,#fafbfd,rgba(255,255,255,0))] p-10 transition-shadow hover:shadow-md lg:p-[47.7px]">
            <div className="mb-8 space-y-3 rounded-[18px] border border-white bg-white/40 p-6">
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                <span className="text-xs font-medium text-slate-800">Your first headline is here!</span>
                <span className="inline-flex items-center gap-1 rounded bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-600">
                  CPA: $150
                  <ArrowDownRight className="h-3 w-3 text-rose-500" />
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                <span className="text-xs font-medium text-slate-800">Your second headline is here!</span>
                <span className="inline-flex items-center gap-1 rounded bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-600">
                  CPA: $150
                  <ArrowDownRight className="h-3 w-3 text-rose-500" />
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#6437fc]/30 shadow-2xs">
                <span className="px-3 py-3 text-xs font-medium text-slate-800">Your third headline is here!</span>
                <span className="inline-flex items-center gap-1 pr-3 text-[11px] font-medium text-[#6437fc]">
                  <RefreshCw className="h-3 w-3 animate-spin text-[#6437fc]" />
                  Preparing a new headline with AI
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-[34px] font-semibold leading-[1.18] tracking-[-0.035em] text-[#11131d]">
                Daily AI optimizations, <br />
                great ad results.
              </h3>
              <p className="text-[17px] leading-[1.48] text-[#344669]">
                Testing is key to great ad results. Automate this process with our AI, let it create and test ads in the background to deliver maximum impact.
              </p>
            </div>
          </div>

          <div className="flex min-h-[478px] flex-col justify-between rounded-[24.8438px] border border-white bg-[radial-gradient(circle_at_100%_100%,#fafbfd,rgba(255,255,255,0))] p-10 transition-shadow hover:shadow-md lg:p-[47.7px]">
            <div className="mb-8 overflow-hidden rounded-[18px] border border-white bg-white/40 p-6">
              <div className="relative mx-auto h-[240px] w-full max-w-[500px]">
                <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between px-1">
                  {BUDGET_PLATFORMS.map((platform) => (
                    <div key={platform.name} className="flex items-center gap-2 rounded-[10px] border border-white bg-white px-2.5 py-2 shadow-[0_3px_10px_rgba(66,81,107,0.06)]">
                      <img src={platform.icon} alt="" className="h-4 w-4 object-contain" />
                      <div className="leading-tight">
                        <div className="text-[9px] font-semibold text-[#171926]">+$45</div>
                        <div className="text-[8px] text-[#a6afd5]">$150</div>
                      </div>
                    </div>
                  ))}
                </div>

                <svg viewBox="0 0 500 240" preserveAspectRatio="none" className="absolute inset-0 z-0 h-full w-full overflow-visible">
                  <g fill="none" stroke="#fff" strokeWidth="16" opacity="0.55">
                    <path d="M32,50 C32,128 250,96 250,150" />
                    <path d="M141,50 C141,128 250,96 250,150" />
                    <path d="M250,50 L250,150" />
                    <path d="M359,50 C359,128 250,96 250,150" />
                    <path d="M468,50 C468,128 250,96 250,150" />
                  </g>
                  <g fill="none" stroke="#BDC5E6" strokeWidth="4">
                    <path d="M32,50 C32,128 250,96 250,150" className="path-dash" />
                    <path d="M141,50 C141,128 250,96 250,150" className="path-dash" />
                    <path d="M250,50 L250,150" className="path-dash" />
                    <path d="M359,50 C359,128 250,96 250,150" className="path-dash" />
                    <path d="M468,50 C468,128 250,96 250,150" className="path-dash" />
                  </g>
                </svg>

                <div className="absolute left-1/2 top-[150px] z-10 flex -translate-x-1/2 flex-col items-center">
                  <div className="relative flex h-[56px] w-[56px] items-center justify-center">
                    <img src={WAVE} alt="" aria-hidden className="pond-ripple h-[210px] w-[210px]" />
                    <img src={WAVE} alt="" aria-hidden className="pond-ripple h-[210px] w-[210px]" style={{ animationDelay: "2.1s" }} />
                    <span aria-hidden className="pond-ring h-[190px] w-[190px]" />
                    <span aria-hidden className="pond-ring h-[190px] w-[190px]" style={{ animationDelay: "1.4s" }} />
                    <span aria-hidden className="pond-ring h-[190px] w-[190px]" style={{ animationDelay: "2.8s" }} />
                    <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] bg-white shadow-[0_6px_18px_rgba(66,81,107,0.14)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 35.053 19.781">
                        <path d="M253.9,6.39a.72.72,0,0,0-.543-.23H237.969a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V6.947A.828.828,0,0,0,253.9,6.39Z" transform="translate(-219.064 -6.16)" fill="#6437fc" />
                        <path d="M227.831,6.39a.72.72,0,0,0-.543-.23H211.9a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V6.947A.766.766,0,0,0,227.831,6.39Z" transform="translate(-211.14 -6.16)" fill="#6437fc" />
                        <path d="M253.9,27.3a.72.72,0,0,0-.543-.23H237.969a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V27.857A.828.828,0,0,0,253.9,27.3Z" transform="translate(-219.064 -12.516)" fill="#6437fc" />
                        <path d="M227.831,27.3a.72.72,0,0,0-.543-.23H211.9a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V27.857A.766.766,0,0,0,227.831,27.3Z" transform="translate(-211.14 -12.516)" fill="#6437fc" />
                        <path d="M242.7,16.79a.723.723,0,0,0-.529-.23H220.219a.786.786,0,0,0-.759.759v3.633a.751.751,0,0,0,.23.557.723.723,0,0,0,.529.23h21.953a.723.723,0,0,0,.529-.23.751.751,0,0,0,.23-.557V17.319A.723.723,0,0,0,242.7,16.79Z" transform="translate(-213.668 -9.321)" fill="#6437fc" />
                      </svg>
                    </div>
                  </div>
                  <span className="mt-3 text-[15.9px] font-medium text-[#6437fc]">Total Budget: $1000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-[34px] font-semibold leading-[1.18] tracking-[-0.035em] text-[#11131d]">
                Real time budget allocation, <br />
                for real time savings.
              </h3>
              <p className="text-[17px] leading-[1.48] text-[#344669]">
                It&apos;s like having your own personal team of media buyers, vigilantly adjusting your budget for optimal ROI, all in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
