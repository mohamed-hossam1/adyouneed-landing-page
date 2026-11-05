"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const PLATFORMS = [
  ["Meta Ads", "646bdaf03212642b3d63eb80_meta-icon.svg"],
  ["Google Ads", "646bdaf04b9ba2fb3d7c21e8_google-icon.svg"],
  ["Bing Ads", "646bdaf03212642b3d63ea11_bing-icon.svg"],
  ["LinkedIn Ads", "646bdaf0ece704eafd789062_linkedin-icon.svg"],
  ["TikTok Ads", "646bdaf003a5a1acb4583ed0_tiktok-icon.svg"],
  ["Pinterest Ads", "646bdaf08e35d58f973dde12_pinterest-icon.svg"],
  ["Twitter Ads", "646bdaf1d64f4718de137ec0_display-icon.svg"],
] as const;

const CURVES = [
  "M0 92 C124 164 254 251 366 278 C476 305 590 291 786 291",
  "M0 153 C130 213 258 278 370 302 C481 326 600 309 786 309",
  "M0 214 C135 255 268 311 374 324 C492 339 606 327 786 327",
  "M0 274 C145 303 278 333 379 343 C500 355 612 345 786 345",
  "M0 334 C151 342 283 355 386 358 C507 361 620 362 786 363",
  "M0 393 C151 382 283 367 386 373 C507 379 620 378 786 380",
  "M0 453 C143 423 275 394 379 390 C498 386 613 395 786 397",
  "M0 513 C134 465 266 420 374 406 C490 390 608 407 786 415",
  "M0 574 C124 509 257 445 366 423 C478 401 596 419 786 433",
] as const;

const CDN = "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/";

function PlatformRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`flex w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}>
      {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map(([name, asset], index) => (
        <div
          key={`${name}-${index}`}
          className="mx-2 flex items-center gap-2.5 rounded-full border border-white/[0.055] bg-[#151827]/90 px-5 py-2.5 text-sm font-medium text-[#8d94ad]"
        >
          <img src={`${CDN}${asset}`} alt="" className="h-4 w-4 object-contain opacity-70" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

function CurveSet({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <g transform={mirrored ? "translate(1908 0) scale(-1 1)" : undefined}>
      {CURVES.map((path, index) => (
        <path
          key={`base-${index}`}
          d={path}
          fill="none"
          stroke="#536078"
          strokeOpacity={index === 4 ? 0.34 : 0.28}
          strokeWidth="0.85"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {CURVES.map((path, index) => {
        if (index === 1 || index === 4 || index === 7) return null;

        const animationStyle = {
          animationDelay: `${-(index * 1.19 + (mirrored ? 2.7 : 0))}s`,
          animationDuration: `${6.2 + (index % 3) * 0.75}s`,
        };

        return (
          <g key={`pulse-${index}`}>
            <path
              d={path}
              pathLength="100"
              fill="none"
              stroke="url(#hero-led-gradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="13 87"
              vectorEffect="non-scaling-stroke"
              className="hero-led-pulse hero-led-pulse-glow"
              style={animationStyle}
            />
            <path
              d={path}
              pathLength="100"
              fill="none"
              stroke="url(#hero-led-gradient)"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeDasharray="13 87"
              vectorEffect="non-scaling-stroke"
              className="hero-led-pulse"
              style={animationStyle}
            />
          </g>
        );
      })}
    </g>
  );
}

function HeroCurves() {
  return (
    <svg viewBox="0 0 1908 936" preserveAspectRatio="none" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id="hero-led-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7153ff" stopOpacity="0" />
          <stop offset="0.35" stopColor="#7153ff" stopOpacity="0.62" />
          <stop offset="0.72" stopColor="#8d72ff" stopOpacity="0.98" />
          <stop offset="1" stopColor="#79a9ff" stopOpacity="0" />
        </linearGradient>
        <filter id="hero-led-glow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="4.5" />
        </filter>
      </defs>
      <CurveSet />
      <CurveSet mirrored />
    </svg>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end end"] });

  const copyY = useTransform(scrollYProgress, [0, 0.42, 1], ["0vh", "-61vh", "-84vh"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.44, 0.62], [1, 1, 0]);
  const curvesY = useTransform(scrollYProgress, [0, 1], ["0vh", "-14vh"]);
  const dashboardY = useTransform(scrollYProgress, [0, 0.62, 1], ["0vh", "-61vh", "-114vh"]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.56, 1], [1, 1.045, 0.98]);
  const outlineOpacity = useTransform(scrollYProgress, [0.08, 0.42, 0.84], [0, 0.48, 0.18]);
  const marqueesOpacity = useTransform(scrollYProgress, [0.34, 0.57, 0.9], [0, 1, 0.25]);
  const marqueesY = useTransform(scrollYProgress, [0.34, 0.92], ["18vh", "-38vh"]);

  return (
    <section ref={root} id="home" className="relative h-[270vh] bg-[#1d202b] sm:h-[295vh]">
      <div className="sticky top-0 mx-[2.75vw] h-screen overflow-hidden rounded-b-[52px] border-x border-b border-[#2d3443] bg-[#181a23] max-sm:mx-0 max-sm:rounded-b-[34px] max-sm:border-x-0">
        <motion.div
          style={reduceMotion ? undefined : { y: curvesY }}
          className="pointer-events-none absolute inset-0 z-0 opacity-90"
        >
          <HeroCurves />
        </motion.div>

        <motion.div
          style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
          className="relative z-10 mx-auto flex max-w-[1420px] flex-col items-center px-5 pt-[25.2vh] text-center max-lg:pt-[22vh] max-sm:pt-[19vh]"
        >
          <h1 className="text-[clamp(4.8rem,6.5vw,7.75rem)] font-normal leading-[0.9] tracking-[-0.052em] text-[#fbfbfc] max-sm:text-[clamp(3.2rem,14vw,4.6rem)] max-sm:leading-[.96]">
            Powerful Ads
            <br />
            Made Effortlessly
          </h1>
          <p className="mt-[18px] max-w-none whitespace-nowrap text-[clamp(1rem,1.13vw,1.35rem)] font-normal leading-[1.35] text-[#f0f1f4] max-md:max-w-[34rem] max-md:whitespace-normal">
            Create winning ads in minutes across top platforms, even if it’s your first time.
          </p>
          <a
            href="https://suite.adyouneed.com/authentication/register"
            target="_blank"
            rel="noreferrer"
            className="hero-primary-cta relative mt-[33px] inline-flex h-[72px] w-[264px] items-center justify-center rounded-full border border-[#6742d1]/80 bg-[#202330] text-[17px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#8a68ef]"
          >
            Start Your Free Trial
          </a>
          <div className="mt-[96px] flex max-w-[690px] flex-col items-center">
            <p className="text-[clamp(.88rem,.94vw,1.12rem)] leading-[1.45] tracking-[.006em] text-[#b8c0dd]">
              &quot;ADYOUNEED, as a distinguished Google Premier Partner, proudly
              <br className="hidden sm:block" /> stands among the elite top 3% of global companies.&quot;
            </p>
            <img
              src={`${CDN}646bcc95214cf139626be9c3_google-premiere-partner-logo.svg`}
              alt="Google Premier Partner"
              className="mt-[13px] h-[25px] w-auto opacity-70"
            />
          </div>
        </motion.div>

        <motion.img
          src={`${CDN}646c7135dd0ef57c214649a1_create-an-ad.svg`}
          alt=""
          style={reduceMotion ? undefined : { opacity: outlineOpacity }}
          className="pointer-events-none absolute left-1/2 top-[44vh] z-[1] w-[80vw] max-w-[1450px] -translate-x-1/2"
        />

        <div className="absolute left-1/2 top-[88.4vh] z-20 w-[min(67vw,1280px)] -translate-x-1/2 max-lg:w-[86vw] max-sm:top-[86vh] max-sm:w-[94vw]">
          <motion.div style={reduceMotion ? undefined : { y: dashboardY, scale: dashboardScale }} className="origin-top">
            <div className="rounded-[24px] border border-[#7990c0]/75 bg-[#111520] p-[11px] shadow-[0_34px_105px_rgba(0,0,0,.7),0_0_46px_rgba(100,55,252,.1)] sm:rounded-[29px] sm:p-[13px]">
              <div className="overflow-hidden rounded-[17px] sm:rounded-[20px]">
                <img
                  src={`${CDN}66b9fd18f5836d3a9c0168f7_ayn-hero.avif`}
                  alt="ADYOUNEED ad creation dashboard"
                  className="block h-auto w-full"
                  loading="eager"
                />
              </div>
            </div>
            <img
              src={`${CDN}646c73bc4ceb1cb290beb679_screen-bottom-mask_line.svg`}
              alt=""
              className="pointer-events-none absolute -bottom-5 left-1/2 w-3/4 -translate-x-1/2 opacity-70"
            />
          </motion.div>
        </div>

        <motion.div
          style={reduceMotion ? undefined : { opacity: marqueesOpacity, y: marqueesY }}
          className="absolute inset-x-0 top-[108vh] z-10 space-y-4 overflow-hidden"
        >
          <PlatformRow />
          <PlatformRow reverse />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#181a23] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#181a23] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
