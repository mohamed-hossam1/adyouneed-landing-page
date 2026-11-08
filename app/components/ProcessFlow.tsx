"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Brain } from "lucide-react";
import { useScrollProgress, useSectionPin } from "../hooks/useScrollProgress";
import {
  AD_TYPES_LEFT,
  AD_TYPES_RIGHT,
  CDN,
  OBJECTIVES,
  PLATFORM_COLUMNS,
} from "../data/process-flow";
import { Arrow, CardHeader, CardShell, Chevron, CloseIcon, RocketIcon } from "./process-flow/ui";

const CARD_COUNT = 5;
const CARD_HEIGHT = 430;
const HIDDEN_Y = CARD_HEIGHT * 1.3;

function useCardMotion(progress: MotionValue<number>, index: number) {
  const land = index / (CARD_COUNT - 1);
  const start = index === 0 ? -1 : Math.max(0, land - 0.25);
  const recoilY = -(CARD_COUNT - 1 - index) * 8.6;
  const recoilScale = 1 - (CARD_COUNT - 1 - index) * 0.05;

  const y = useTransform(progress, (p) => {
    if (p <= start) return HIDDEN_Y;
    if (p < land) {
      const t = (p - start) / (land - start);
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      return HIDDEN_Y * (1 - eased);
    }
    const denom = Math.max(1 - land, 1e-6);
    return recoilY * Math.min(1, Math.max(0, (p - land) / denom));
  });

  const scale = useTransform(progress, (p) => {
    if (p <= start) return 1;
    if (p < land) return 1;
    const denom = Math.max(1 - land, 1e-6);
    const t = Math.min(1, Math.max(0, (p - land) / denom));
    return 1 + (recoilScale - 1) * t;
  });

  return { y, scale };
}

function StepMotion({ progress, index, children }: { progress: MotionValue<number>; index: number; children: React.ReactNode }) {
  const { y, scale } = useCardMotion(progress, index);
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div style={{ y, scale, zIndex: index + 1 }} className="pointer-events-auto">
        {children}
      </motion.div>
    </div>
  );
}

export default function ProcessFlow() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollProgress(root, "top top", "bottom bottom");
  useSectionPin(root, stage);

  return (
    <section ref={root} id="workflow" className="relative h-[250svh] bg-transparent text-[#111321]">
      <div ref={stage} className="relative flex h-[100svh] items-center justify-center overflow-hidden px-3 sm:px-6">
        <div className="w-full max-w-[1193px]">
          <h2 className="text-center text-[39.75px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#171926]">
            Creating the ad you need <br />has never been easier or more beautiful.
          </h2>
          <div className="h-[31.8px]" />

          <div className="rounded-[15.9px] border border-white bg-[rgba(250,251,253,0.3)] p-[13.9125px]">
            <div className="rounded-[13.9125px] border border-white">
              <div className="flex items-center gap-[11.925px] border-b border-white px-[31.8px] py-[26.8312px] text-[#42516b]">
                <RocketIcon />
                <div className="text-[21.8625px] font-bold leading-[1.2] text-[#42516b]">Create an Ad</div>
                <div className="text-[17.8875px] leading-[1.2] text-[#42516b]">You are creating a new ad.</div>
              </div>

              <div className="relative flex h-[558.4px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_0,rgba(216,223,255,0.8),rgba(255,255,255,0.4))]">
                <img src={`${CDN}646f473912e13b067016e3c1_bg-process.svg`} alt="" className="pointer-events-none absolute left-1/2 top-0 w-[801px] max-w-none -translate-x-1/2" />

                <StepMotion progress={scrollYProgress} index={0}>
                  <CardShell>
                    <CardHeader step={1} title="Select a platform!" subtitle="Choose the platform on which to advertise" />
                    <div className="h-[23.85px]" />
                    <div className="flex justify-between">
                      {PLATFORM_COLUMNS.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex w-[304.09px] flex-col gap-[19.875px]">
                          {column.map((item, itemIndex) =>
                            item ? (
                              <div key={itemIndex} className="flex h-[51px] items-center justify-between rounded-[11.925px] border border-white bg-white py-[6.36px] pl-[19.08px] pr-[6.36px]">
                                <img src={`${CDN}${item.icon}`} alt={`${item.name} Logo`} className="h-9 w-[62px] object-contain object-left" />
                                {item.select ? (
                                  <div className="flex h-9 w-[129px] items-center justify-between rounded-[9.9375px] bg-[#6437fc] px-[15.9px] text-[13.9125px] leading-none text-white">
                                    <span>Select</span>
                                    <Chevron />
                                  </div>
                                ) : (
                                  <img src={`${CDN}6474c9233375044a6d4a29e2_soon-button.svg`} alt="Soon" className="h-9 w-[129px]" />
                                )}
                              </div>
                            ) : (
                              <div key={itemIndex} className="h-[51px] rounded-[11.925px] border border-white/60 bg-white/35" />
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </CardShell>
                </StepMotion>

                <StepMotion progress={scrollYProgress} index={1}>
                  <CardShell>
                    <CardHeader step={2} title="Select an objective" subtitle="Select your ad objective based on your goals." />
                    <div className="h-[23.85px]" />
                    <div className="flex justify-between">
                      {OBJECTIVES.map((objective) => (
                        <div key={objective.label} className="flex h-[83px] w-[304.09px] items-center gap-[11.925px] rounded-[11.925px] border border-white bg-white p-[12.9187px]">
                          <img src={`${CDN}${objective.icon}`} alt="" className="h-[56px] w-12 object-contain" />
                          <div className="flex flex-col gap-[7.95px]">
                            <div className="text-[12.72px] leading-[1.2] text-[#171926]">{objective.label}</div>
                            <div className="h-2 w-[101px] rounded-full bg-[#eaeeff]" />
                            <div className="h-2 w-[64px] rounded-full bg-[#eaeeff]" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-[27.825px] flex justify-between">
                      {[
                        ["What are you advertising?", "Example: ADYOUNEED is a software to create ads in a matter of seconds"],
                        ["What is your target audience?", "Example: Business owners who advertise"],
                      ].map(([label, placeholder]) => (
                        <div key={label} className="relative w-[467px] rounded-[11.925px] border border-white bg-[rgba(250,251,253,0.5)] p-[19.875px]">
                          <img src={`${CDN}6474cfa338dfb06968c91afa_left-upper-dec.svg`} alt="" className="absolute left-[19px] top-[14px] h-[31px] w-5" />
                          <div className="flex items-center justify-between pl-[15.9px] text-[12.72px] leading-[1.2] text-[#171926]">
                            <span>{label}</span>
                            <span className="text-[#bdc5e6]">Recommended</span>
                          </div>
                          <div className="h-[23.85px]" />
                          <div className="rounded-[11.925px] border border-white bg-white px-[19.08px] py-[15.9px] text-[12.72px] leading-[1.5] text-[#bdc5e6]">
                            {placeholder}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardShell>
                </StepMotion>

                <StepMotion progress={scrollYProgress} index={2}>
                  <CardShell>
                    <CardHeader step={3} title="Setup your Target Audience" subtitle="Setup the target audience for this ad." />
                    <div className="h-[23.85px]" />
                    <div className="flex flex-col gap-[23.85px]">
                      <div className="flex h-[49px] items-center justify-end rounded-[11.925px] border border-white bg-[rgba(253,254,255,0.5)] p-[4.96875px]">
                        <div className="flex items-center gap-[15.9px] rounded-[11.925px] bg-white px-[15.9px] py-[11.13px] text-[12.72px] font-bold text-[#171926]">
                          Autofill Audience with AI
                          <Brain className="h-[19px] w-[19px] text-[#42516b]" strokeWidth={1.6} />
                        </div>
                      </div>

                      <div className="flex h-[49px] items-center rounded-[11.925px] border border-white bg-[rgba(253,254,255,0.5)] p-[4.96875px]">
                        <div className="flex w-[139px] items-center gap-[15.9px] pl-[15.9px] text-[12.72px] text-[#171926]">
                          Location
                          <span className="h-[22px] w-px bg-[rgba(189,197,230,0.4)]" />
                        </div>
                        <div className="ml-auto flex items-center gap-[7.95px]">
                          {["New York", "Paris", "Istanbul"].map((city) => (
                            <div key={city} className="flex h-8 items-center gap-[11.925px] rounded-[9.54px] bg-[#6437fc] px-[9.54px] text-[12.72px] text-white">
                              {city}
                              <CloseIcon />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex h-[49px] items-center rounded-[11.925px] border border-white bg-[rgba(253,254,255,0.5)] p-[4.96875px]">
                        <div className="flex w-[139px] items-center gap-[15.9px] pl-[15.9px] text-[12.72px] text-[#171926]">
                          Age Range
                          <span className="h-[22px] w-px bg-[rgba(189,197,230,0.4)]" />
                        </div>
                        <div className="ml-auto flex w-[501px] items-center gap-[15.9px]">
                          <span className="text-[14.31px] leading-none text-[#171926]">13</span>
                          <div className="relative h-[3px] flex-1 rounded-full bg-[#171926]">
                            <span className="absolute -top-[5px] left-0 h-[13px] w-[13px] rounded-full border-2 border-white bg-[#171926] shadow-sm" />
                            <span className="absolute -top-[5px] right-0 h-[13px] w-[13px] rounded-full border-2 border-white bg-[#171926] shadow-sm" />
                          </div>
                          <span className="text-[14.31px] leading-none text-[#171926]">65+</span>
                        </div>
                      </div>

                      <div className="flex h-[49px] items-center rounded-[11.925px] border border-white bg-[rgba(253,254,255,0.5)] p-[4.96875px]">
                        <div className="flex w-[139px] items-center gap-[15.9px] pl-[15.9px] text-[12.72px] text-[#171926]">
                          Interests
                          <span className="h-[22px] w-px bg-[rgba(189,197,230,0.4)]" />
                        </div>
                        <div className="ml-auto flex items-center">
                          <div className="flex h-8 items-center gap-[11.925px] rounded-[9.54px] bg-[#6437fc] px-[9.54px] text-[12.72px] text-white">
                            Marketing (business &amp; finance)
                            <CloseIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardShell>
                </StepMotion>

                <StepMotion progress={scrollYProgress} index={3}>
                  <CardShell>
                    <CardHeader step={4} title="Select an ad type" subtitle="Select the type of this ad." />
                    <div className="h-[23.85px]" />
                    <div className="relative flex items-center justify-between">
                      <div className="flex w-[315px] flex-col gap-[14.9062px] pt-[9px]">
                        {AD_TYPES_LEFT.map((item) => (
                          <div key={item.label} className="flex items-center gap-[3.18px]">
                            <div className="flex h-[83px] flex-1 items-center gap-[11.925px] rounded-[11.925px] border border-white bg-white p-[12.9187px]">
                              <img src={`${CDN}${item.icon}`} alt="" className="h-[56px] w-12 object-contain" />
                              <div className="flex flex-col gap-[7.95px]">
                                <div className="text-[12.72px] leading-[1.2] text-[#171926]">{item.label}</div>
                                <div className="h-2 w-[101px] rounded-full bg-[#eaeeff]" />
                                <div className="h-2 w-[64px] rounded-full bg-[#eaeeff]" />
                              </div>
                            </div>
                            <Arrow />
                          </div>
                        ))}
                      </div>

                      <img src={`${CDN}66b9fe141d3d9ff1c572b6e3_ayn-bg.svg`} alt="" className="relative -mt-[167px] h-[445px] w-[301px] shrink-0 drop-shadow-2xl" />

                      <div className="flex w-[315px] flex-col gap-[14.9062px]">
                        {AD_TYPES_RIGHT.map((item) => (
                          <div key={item.label} className="flex items-center gap-[3.18px]">
                            <Arrow flip />
                            <div className="flex h-[83px] flex-1 items-center gap-[11.925px] rounded-[11.925px] border border-white bg-white p-[12.9187px]">
                              <img src={`${CDN}${item.icon}`} alt="" className="h-[56px] w-12 object-contain" />
                              <div className="flex flex-col gap-[7.95px]">
                                <div className="text-[12.72px] leading-[1.2] text-[#171926]">{item.label}</div>
                                <div className="h-2 w-[101px] rounded-full bg-[#eaeeff]" />
                                <div className="h-2 w-[64px] rounded-full bg-[#eaeeff]" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardShell>
                </StepMotion>

                <StepMotion progress={scrollYProgress} index={4}>
                  <CardShell>
                    <CardHeader step={5} title="Set a Budget & Review" subtitle="Set up your ad budget and review your setup." />
                    <div className="h-[23.85px]" />
                    <div className="relative flex items-end justify-between">
                      <div className="flex w-[315px] flex-col">
                        <div className="relative mb-[20px] w-[177px]">
                          <svg viewBox="0 0 177 98" className="h-[92px] w-[177px]" aria-hidden>
                            <defs>
                              <linearGradient id="budget-arc" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0" stopColor="#6437fc" />
                                <stop offset="0.72" stopColor="#7b5cf5" />
                                <stop offset="1" stopColor="#e9ecf8" />
                              </linearGradient>
                            </defs>
                            <path d="M12 92a76.5 76.5 0 0 1 153 0" fill="none" stroke="#e9ecf8" strokeWidth="15" />
                            <path d="M12 92a76.5 76.5 0 0 1 153 0" fill="none" stroke="url(#budget-arc)" strokeWidth="15" strokeDasharray="240" strokeDashoffset="72" />
                          </svg>
                          <div className="absolute inset-x-0 bottom-[6px] text-center">
                            <div className="text-[12.72px] leading-none text-[#bdc5e6]">Budget Score</div>
                            <div className="mt-[4px] text-[23.85px] font-medium leading-none text-[#171926]">$250</div>
                          </div>
                        </div>
                        {[0, 1].map((i) => (
                          <div key={i} className="mb-[15px] flex h-[51px] items-center justify-between rounded-[11.925px] border border-white bg-white py-[6.36px] pl-[19.08px] pr-[6.36px] last:mb-0">
                            <span className="text-[12.72px] text-[#171926]">End Date</span>
                            <img src={`${CDN}64750ca727fba3a484f30fcd_step-5-end-date.svg`} alt="" className="h-9 w-[129px]" />
                          </div>
                        ))}
                      </div>

                      <img src={`${CDN}64750c4e8d04f0a1b00b7925_step-5-phone.webp`} alt="Campaign review phone preview" className="relative -mt-[167px] h-[445px] w-auto shrink-0 drop-shadow-2xl" />

                      <div className="flex w-[315px] flex-col justify-end gap-[15px] pb-[3px]">
                        {[0, 1].map((i) => (
                          <div key={i} className="flex h-[51px] items-center justify-between rounded-[11.925px] border border-white bg-white py-[6.36px] pl-[19.08px] pr-[6.36px]">
                            <span className="text-[12.72px] text-[#171926]">End Date</span>
                            <img src={`${CDN}64750ca727fba3a484f30fcd_step-5-end-date.svg`} alt="" className="h-9 w-[129px]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardShell>
                </StepMotion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
