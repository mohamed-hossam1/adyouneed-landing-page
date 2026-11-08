"use client";

import React, { useState } from "react";
import {
  ScanLine,
  Bug,
  Ban,
  BadgeDollarSign,
  Pencil,
  Compass,
} from "lucide-react";

function Tick({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="6" fill="currentColor" />
      <path
        d="M3.55 6.05 5.05 7.55 8.4 4.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cardBase =
  "relative flex flex-col rounded-[24.8438px] border border-white";
const cardGradient =
  "radial-gradient(circle at 100% 100%, #fafbfd, rgba(255,255,255,0))";

const steps = [
  { step: "Step 1/5", label: "Platform", active: false, last: false },
  { step: "Step 2/5", label: "Objective", active: false, last: false },
  { step: "Step 3/5", label: "Audience", active: false, last: false },
  { step: "Step 4/5", label: "Ad", active: true, last: false },
  { step: "Step 5/5", label: "Publish", active: false, last: true },
];

const platforms = [
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63eb80_meta-icon.svg",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf04b9ba2fb3d7c21e8_google-icon.svg",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf03212642b3d63ea11_bing-icon.svg",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf0ece704eafd789062_linkedin-icon.svg",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf003a5a1acb4583ed0_tiktok-icon.svg",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf08e35d58f973dde12_pinterest-icon.svg",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bdaf1d64f4718de137ec0_display-icon.svg",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/6474c817fc70e96d0a846d05_select-a-platform-9.svg",
];

const stats = [
  {
    label: "Scanned Clicks",
    value: "14 534",
    icon: ScanLine,
    color: "#6437fc",
  },
  {
    label: "Fraudulent Clicks",
    value: "1 451",
    icon: Bug,
    color: "#42516b",
  },
  {
    label: "Blocked IPs",
    value: "491",
    icon: Ban,
    color: "#42516b",
  },
  {
    label: "Fraudulent Clicks",
    value: "$748",
    icon: BadgeDollarSign,
    color: "#6437fc",
  },
];

const bars = [95, 32, 64, 111, 51, 80, 127, 95];

export default function FeaturesOneTool() {
  const [campaignName, setCampaignName] = useState("Campaign Name Here");
  const [budget, setBudget] = useState("0.86");

  return (
    <section
      id="features"
      className="w-full px-4 pb-20 pt-[159px] text-[#171926] sm:px-6"
    >
      <div className="mx-auto w-full max-w-[1192.5px]">
        {/* Header */}
        <div className="mx-auto mb-[96px] w-full max-w-[588px] text-center">
          <h2 className="mb-4 text-[clamp(3.5rem,4.17vw,5rem)] font-semibold leading-none tracking-normal text-[#171926]">
            One tool <br />
            to rule them all
          </h2>
          <p className="mx-auto text-[clamp(1rem,1.146vw,1.375rem)] leading-[1.5] text-[#171926]">
            Create winning ads in minutes across top platforms, even if it’s your
            first time.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-x-[28.82px] gap-y-[47.7px] md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Create */}
          <div
            className={`${cardBase} justify-between bg-[#edf0fd] pt-[22.26px] pb-0 pl-[19.875px] pr-[9.54px] md:col-span-2 lg:col-span-2 lg:h-[363px]`}
            style={{ backgroundImage: cardGradient }}
          >
            <div className="flex w-full items-start justify-between">
              <div className="w-[295px] shrink-0 pb-[31.8px]">
                <div className="space-y-[7px]">
                  {steps.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex h-8 items-center justify-between rounded-[7.95px] border-[0.5px] border-white pr-[7.95px] transition-transform hover:scale-[1.02] ${
                        item.active ? "text-white" : "text-[#42516b]"
                      } ${item.last ? "opacity-60" : ""}`}
                      style={
                        item.active
                          ? {
                              backgroundImage:
                                "linear-gradient(90deg, #6437fc, #6437fc99)",
                            }
                          : { backgroundColor: "#f4f6fd" }
                      }
                    >
                      <span className="flex items-center gap-[9.54px]">
                        <span className="h-[19px] w-[5px] rounded-r-[3px] bg-white" />
                        <span className="text-[11.925px] font-semibold leading-none">
                          {item.label}
                        </span>
                      </span>
                      <span
                        className={`flex h-[20.7px] w-[65px] items-center justify-center gap-1 rounded-full px-[7.95px] ${
                          item.active ? "bg-[#6437fc]" : "bg-white"
                        }`}
                      >
                        <span className="text-[7.95px] font-semibold leading-none">
                          {item.step}
                        </span>
                        <Tick
                          className={`h-3 w-3 ${
                            item.last ? "text-[#eaeeff]" : "text-[#6437fc]"
                          }`}
                        />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pl-4">
                  <h3 className="text-[31.8px] font-semibold leading-[1.4] text-[#171926]">
                    Create
                  </h3>
                  <p className="mt-2 text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
                    Effortlessly create ads in just
                    <br />
                    5 simple steps, with the help of AI.
                  </p>
                </div>
              </div>

              <div className="flex-1 text-right">
                <img
                  src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66b9fe141d3d9ff1c572b6e3_ayn-bg.svg"
                  alt="Phone preview"
                  className="ml-auto -mt-[47.7px] w-[238.5px] max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Manage */}
          <div
            className={`${cardBase} p-[22.26px_19.875px_31.8px] lg:col-span-1 lg:h-[363px]`}
            style={{ backgroundImage: cardGradient }}
          >
            <div className="flex flex-col items-center">
              <div className="h-[9px] w-[191px] rounded-t-[15.9px] border-[0.5px] border-white bg-[#bdc5e6]/40" />
              <div className="w-full overflow-hidden rounded-[15.9px] border border-white">
                <div className="flex h-12 items-center justify-between border-b-[0.5px] border-white bg-white/40 px-4">
                  <span className="text-[11.925px] font-semibold leading-none text-[#42516b]">
                    Campaign Edit
                  </span>
                  <Pencil className="h-[18px] w-4 text-[#6437fc]" />
                </div>
                <div className="px-4 pb-4">
                  <div className="h-[19px]" />
                  <input
                    type="text"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    className="h-10 w-full rounded-[8.94px] border-[0.5px] border-white bg-white pl-4 text-[11.925px] leading-[1.2] text-[#bdc5e6] outline-none focus:ring-1 focus:ring-[#6437fc]/40"
                  />
                  <div className="h-4" />
                  <div className="flex h-10 items-center rounded-[8.94px] border-[0.5px] border-white bg-white pl-4 text-[11.925px] text-[#bdc5e6]">
                    <div className="flex items-center gap-[6.4px]">
                      <span className="font-semibold text-[#171926]">Budget</span>
                      <span>Daily</span>
                    </div>
                    <span className="mx-4 h-5 w-px bg-[#eaeeff]" />
                    <div className="flex items-center gap-[6.4px]">
                      <span className="font-semibold text-[#171926]">€</span>
                      <input
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-10 bg-transparent text-[11.925px] text-[#bdc5e6] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pl-4">
              <h3 className="text-[31.8px] font-semibold leading-[1.4] text-[#171926]">
                Manage
              </h3>
              <p className="mt-2 text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
                Take control, manage your campaigns effortlessly.
              </p>
            </div>
          </div>

          {/* Card 3: Diversify */}
          <div
            className={`${cardBase} overflow-hidden p-[22.26px_19.08px_31.8px] lg:col-span-1 lg:h-[363px]`}
            style={{ backgroundImage: cardGradient }}
          >
            <img
              src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64750ca727fba3a484f30fcd_step-5-end-date.svg"
              alt=""
              className="pointer-events-none absolute left-0 top-0 w-[320px] max-w-none"
            />
            <div className="relative overflow-hidden rounded-[15.9px] border border-white">
              <div className="h-[135px] overflow-hidden bg-[linear-gradient(#f5f7fe,#eceffe)] px-[19.08px]">
                <div className="grid grid-cols-4 gap-x-[1.125px] gap-y-[13.9px] pt-[19.08px]">
                  {platforms.map((icon, idx) => (
                    <div
                      key={idx}
                      className="flex h-9 w-9 items-center justify-center rounded-[9.94px] bg-white p-2 shadow-2xs transition-transform hover:scale-105"
                    >
                      <img src={icon} alt="" className="h-5 w-5 object-contain" />
                    </div>
                  ))}
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={`blank-${idx}`}
                      className="h-9 w-9 rounded-[9.94px] bg-white"
                    />
                  ))}
                </div>
              </div>
              <div className="flex h-12 items-center justify-between border-t-[0.5px] border-white bg-white/40 px-4">
                <span className="text-[11.925px] font-semibold leading-none text-[#42516b]">
                  Advertising platforms
                </span>
                <Compass className="h-[22px] w-[22px] text-[#6437fc]" />
              </div>
            </div>

            <div className="mt-4 pl-4">
              <h3 className="text-[31.8px] font-semibold leading-[1.4] text-[#171926]">
                Diversify
              </h3>
              <p className="mt-2 text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
                Master multichannel advertising in minutes.
              </p>
            </div>
          </div>

          {/* Card 4: Protect */}
          <div
            className={`${cardBase} p-[22.26px_19.875px_31.8px] lg:col-span-1 lg:h-[363px]`}
            style={{ backgroundImage: cardGradient }}
          >
            <div className="grid grid-cols-2 gap-[9.94px]">
              <div className="col-span-2 flex h-12 items-center justify-between rounded-[15.9px] bg-white px-4">
                <span className="text-[11.925px] font-semibold leading-none text-[#42516b]">
                  Campaign Edit
                </span>
                <img
                  src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646e4ca16449a5d25461f8d0_tick.svg"
                  alt=""
                  className="h-8 w-8"
                />
              </div>
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="h-[60px] rounded-[11.925px] border-[0.5px] border-white bg-white/40 px-[14.5px] py-[12.9px]"
                  >
                    <span className="block text-[9.9375px] font-semibold leading-none text-[#a6afd5]">
                      {stat.label}
                    </span>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11.925px] font-semibold leading-none text-[#42516b]">
                        {stat.value}
                      </span>
                      <Icon
                        className="h-3.5 w-3.5"
                        style={{ color: stat.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pl-4">
              <h3 className="text-[31.8px] font-semibold leading-[1.4] text-[#171926]">
                Protect
              </h3>
              <p className="mt-2 text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
                Protect your ads from competitors and bots.
              </p>
            </div>
          </div>

          {/* Card 5: Understand */}
          <div
            className={`${cardBase} p-[22.26px_0px_31.8px] lg:col-span-1 lg:h-[363px]`}
            style={{ backgroundImage: cardGradient }}
          >
            <div className="relative h-[191px] w-full overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646e5591d07523a57df5fdbb_graph-feature-5.svg"
                alt=""
                className="pointer-events-none absolute left-0 top-0 h-auto w-[486px] max-w-none"
              />
              <div className="absolute bottom-0 left-0 right-0 flex h-[127px] items-end justify-between px-4">
                {bars.map((h, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${h}px` }}
                    className="w-[14px] rounded-[4px] bg-[linear-gradient(to_top,rgba(255,255,255,0),#fff)]"
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 pl-[35.775px] pr-[19.875px]">
              <h3 className="text-[31.8px] font-semibold leading-[1.4] text-[#171926]">
                Understand
              </h3>
              <p className="mt-2 text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
                Identify what works, save time with insights.
              </p>
            </div>
          </div>

          {/* Card 6: Try it for free! */}
          <div
            className="flex flex-col justify-between rounded-[24.8438px] border border-white p-[38.76px_19.875px_31.8px] text-white md:col-span-2 lg:col-span-2 lg:h-[363px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 100%, #261f50, #171926)",
            }}
          >
            <div className="pl-4">
              <h3 className="text-[31.8px] font-semibold leading-[1.4] text-white">
                Try it for free!
              </h3>
              <p className="mt-2 text-[15.9px] leading-[1.5] tracking-[-0.02em] text-white">
                Create and manage the ad you need, absolutely free during the
                trial period.
              </p>
            </div>
            <a
              href="https://suite.adyouneed.com/authentication/register"
              target="_blank"
              rel="noreferrer"
              className="flex h-[71px] w-full items-center justify-center rounded-full p-px shadow-[inset_0_0_3px_#42516b,0_15px_50px_rgba(100,55,252,0.2)] transition-shadow hover:shadow-[inset_0_0_3px_#42516b,0_15px_60px_rgba(100,55,252,0.4)]"
            >
              <span className="flex h-full w-full items-center justify-center rounded-full bg-[#1b1d30] text-[17.8875px] font-medium leading-[1.2] text-white">
                Start Your Free Trial
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
