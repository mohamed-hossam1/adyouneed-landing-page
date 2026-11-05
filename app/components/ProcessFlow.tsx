"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Check, Rocket, Sparkles } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/";

function StepLayer({ index, progress, children }: { index: number; progress: MotionValue<number>; children: React.ReactNode }) {
  const start = index * 0.19;
  const enter = index === 0 ? 0 : start - 0.14;
  const settle = index === 0 ? 0.02 : start;
  const hold = Math.min(0.96, start + 0.16);
  const exit = Math.min(0.995, start + 0.23);
  const motionRange = index === 0 ? [0, hold, exit] : [enter, settle, hold, exit];
  const y = useTransform(progress, motionRange, index === 0 ? [0, 0, -150] : [170, 0, 0, index === 4 ? 0 : -150]);
  const opacity = useTransform(progress, motionRange, index === 0 ? [1, 1, 0.36] : [0, 1, 1, index === 4 ? 1 : 0.36]);
  const scale = useTransform(progress, index === 0 ? [0, exit] : [enter, settle, exit], index === 0 ? [1, 0.93] : [0.965, 1, index === 4 ? 1 : 0.93]);
  return <motion.div style={{ y, opacity, scale, zIndex: index + 2 }} className="absolute inset-x-[4%] top-[9%] h-[82%] origin-top">{children}</motion.div>;
}

function Panel({ step, title, description, children }: { step: number; title: string; description: string; children: React.ReactNode }) {
  return (
    <article className="relative h-full overflow-hidden rounded-[22px] border border-white bg-white/95 p-5 shadow-[0_24px_64px_rgba(101,84,177,.14)] sm:p-7">
      <div className="absolute right-6 top-4 text-[clamp(2.6rem,5vw,5rem)] font-light tracking-tight text-[#d7d9e8]">Step {step}</div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-[#6437fc] sm:text-2xl">{title}</h3>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">{description}</p>
      </div>
      <div className="relative z-10 mt-6 h-[calc(100%-5.5rem)]">{children}</div>
    </article>
  );
}

function Confetti({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.84, 0.92], [0, 1]);
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    left: `${7 + ((i * 29) % 88)}%`,
    top: `${5 + ((i * 37) % 86)}%`,
    rotate: `${(i * 47) % 180}deg`,
    color: ["#6437fc", "#29a6df", "#0f172a", "#8b93a8"][i % 4],
  }));
  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 z-30">
      {pieces.map((piece, index) => <span key={index} className="absolute h-1.5 w-1 rounded-sm" style={{ left: piece.left, top: piece.top, rotate: piece.rotate, background: piece.color }} />)}
    </motion.div>
  );
}

const platformItems = [
  ["Meta", "6474c8161e87c6abc3dba577_select-a-platform-1.svg"],
  ["LinkedIn", "6474c816f2545c98933ae1b2_select-a-platform-2.svg"],
  ["Google", "6474c8173a9ba2d9e2850525_select-a-platform-4.svg"],
  ["Bing Ads", "6474c8171eeb231dac07f6ca_select-a-platform-7.svg"],
  ["TikTok", "64afd18d1a3105ba087e594a_TIKTOK.svg"],
  ["Pinterest", "6474c8174b2780cdcbc1e979_select-a-platform-6.svg"],
  ["Spotify", "6474c817476077e17c9443bc_select-a-platform-3.svg"],
  ["Display", "6474c817fc70e96d0a846d05_select-a-platform-9.svg"],
];

export default function ProcessFlow() {
  const root = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end end"] });
  const activeProgress = scrollYProgress;

  return (
    <section ref={root} id="workflow" className="relative h-[590vh] bg-[#eef0ff] text-[#111321]">
      <div className="sticky top-0 flex h-screen flex-col items-center overflow-hidden px-3 pt-[13vh] sm:px-6">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="text-[clamp(1.8rem,3.15vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
            Creating the ad you need<br />has never been easier or more beautiful.
          </h2>
        </div>

        <div className="relative h-[min(63vh,650px)] w-full max-w-[1190px] overflow-hidden rounded-[24px] border border-white/80 bg-[#f4f4ff] shadow-[0_26px_75px_rgba(73,64,118,.08)] sm:rounded-[30px]">
          <img src={`${CDN}646f473912e13b067016e3c1_bg-process.svg`} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-75" />
          <div className="relative z-20 flex h-[74px] items-center gap-3 border-b border-[#dfe2f0] bg-white/40 px-5 text-[#51586e] backdrop-blur-sm sm:px-8">
            <Rocket className="h-5 w-5" /><strong className="text-base sm:text-lg">Create an Ad</strong><span className="text-xs sm:text-sm">You are creating a new ad.</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 top-[74px]">
            <StepLayer index={0} progress={activeProgress}>
              <Panel step={1} title="Select a platform!" description="Choose the platform on which to advertise.">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {platformItems.map(([name, icon], index) => (
                    <div key={name} className="flex items-center justify-between rounded-xl border border-[#e7e8f0] bg-[#fafaff] p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#33384a]">
                        <img src={`${CDN}${icon}`} alt="" className="h-7 w-7 object-contain" /><span>{name}</span>
                      </div>
                      <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${index < 4 ? "bg-[#6437fc] text-white" : "bg-[#eef0f7] text-slate-400"}`}>{index < 4 ? "Select" : "Soon"}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            </StepLayer>

            <StepLayer index={1} progress={activeProgress}>
              <Panel step={2} title="Select an objective" description="Select your ad objective based on your goals.">
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Conversions on my website", "Traffic to my website", "Likes and Comments on my posts"].map((label, index) => (
                    <div key={label} className="rounded-xl border border-[#e4e6ef] bg-[#fafaff] p-4 text-sm font-medium">
                      <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#6437fc]/10 text-[#6437fc]">{index + 1}</span>{label}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["What are you advertising?", "Example: ADYOUNEED is a software to create ads in seconds"],
                    ["What is your target audience?", "Example: Business owners who advertise"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-[#e4e6ef] bg-[#fafaff] p-4">
                      <div className="text-xs font-semibold">{label}</div><div className="mt-3 rounded-lg border border-[#e7e8f0] bg-white p-3 text-xs text-slate-400">{value}</div>
                    </div>
                  ))}
                </div>
              </Panel>
            </StepLayer>

            <StepLayer index={2} progress={activeProgress}>
              <Panel step={3} title="Setup your Target Audience" description="Setup the target audience for this ad.">
                <div className="flex justify-end"><span className="inline-flex items-center gap-2 rounded-lg border border-[#e5e7ef] px-3 py-2 text-xs font-semibold">Autofill Audience with AI <Sparkles className="h-3.5 w-3.5" /></span></div>
                <div className="mt-3 space-y-3 rounded-2xl border border-[#e4e6ef] bg-[#fafaff] p-5">
                  <div className="flex items-center justify-between border-b border-[#e5e7ef] pb-4 text-sm">
                    <span>Location</span><div className="flex gap-2">{["New York", "Paris", "Istanbul"].map((city) => <span key={city} className="rounded-lg bg-[#6437fc] px-3 py-1.5 text-xs text-white">{city} ×</span>)}</div>
                  </div>
                  <div className="py-2 text-sm"><div className="flex justify-between"><span>Age Range</span><span>13 — 65+</span></div><div className="mt-4 h-1 rounded-full bg-[#dddff0]"><div className="h-1 w-3/4 rounded-full bg-[#6437fc]" /></div></div>
                  <div className="flex items-center justify-between border-t border-[#e5e7ef] pt-4 text-sm"><span>Interests</span><span className="rounded-lg bg-[#6437fc] px-3 py-1.5 text-xs text-white">Marketing (business &amp; finance)</span></div>
                </div>
              </Panel>
            </StepLayer>

            <StepLayer index={3} progress={activeProgress}>
              <Panel step={4} title="Select an ad type" description="Select the type of this ad.">
                <div className="grid h-full grid-cols-[1fr_.78fr_1fr] gap-4">
                  <div className="space-y-3">{["Dynamic Creative Ads", "Carousel", "Existing Post"].map((label) => <div key={label} className="rounded-xl border border-[#e4e6ef] bg-[#fafaff] p-4 text-sm">{label}</div>)}</div>
                  <div className="relative overflow-hidden rounded-[30px] border-[6px] border-[#e8e9f1] bg-white p-3 shadow-xl"><div className="text-center text-xs font-semibold">ADYOUNEED</div><div className="mt-4 rounded-lg bg-[#f2f3fa] p-3 text-[10px] text-slate-400">Write a headline...</div><div className="mt-3 flex h-28 items-center justify-center rounded-xl border border-dashed border-[#ccd0df] text-center text-[10px] text-slate-400">Click this area to UPLOAD</div></div>
                  <div className="space-y-3">{["Performance Max Ads", "Search Ads", "Single Image / Video"].map((label) => <div key={label} className="rounded-xl border border-[#e4e6ef] bg-[#fafaff] p-4 text-sm">{label}</div>)}</div>
                </div>
              </Panel>
            </StepLayer>

            <StepLayer index={4} progress={activeProgress}>
              <Panel step={5} title="Set a Budget & Review" description="Set up your ad budget and review your setup.">
                <div className="grid h-full grid-cols-[1fr_.8fr_1fr] items-center gap-4">
                  <div className="space-y-4"><div className="rounded-2xl border border-[#e4e6ef] bg-[#fafaff] p-5"><div className="text-xs text-slate-500">Budget Score</div><div className="mt-2 text-4xl font-semibold">$250</div><div className="mt-4 h-2 rounded-full bg-[#dcdfee]"><div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-[#6437fc] to-[#2aa8df]" /></div></div><div className="rounded-xl border border-[#e4e6ef] bg-white p-4 text-sm">End Date <span className="float-right text-slate-400">31 / 12 / 2026</span></div></div>
                  <img src={`${CDN}64750c4e8d04f0a1b00b7925_step-5-phone.webp`} alt="Campaign review phone preview" className="mx-auto max-h-[310px] w-auto drop-shadow-2xl" />
                  <div className="space-y-3">{["Platform selected", "Audience ready", "Creative approved", "Budget optimized"].map((label) => <div key={label} className="flex items-center justify-between rounded-xl border border-[#e4e6ef] bg-[#fafaff] p-4 text-sm">{label}<Check className="h-4 w-4 text-[#6437fc]" /></div>)}</div>
                </div>
              </Panel>
            </StepLayer>
            <Confetti progress={activeProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
