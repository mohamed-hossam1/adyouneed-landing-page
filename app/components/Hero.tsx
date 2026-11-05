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

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });

  const copyY = useTransform(scrollYProgress, [0, 0.46, 1], ["0vh", "-64vh", "-82vh"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.38, 0.54], [1, 1, 0]);
  const raysY = useTransform(scrollYProgress, [0, 1], ["0vh", "-14vh"]);
  const dashboardY = useTransform(scrollYProgress, [0, 0.62, 1], ["0vh", "-58vh", "-112vh"]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.58, 1], [0.9, 1, 0.96]);
  const outlineOpacity = useTransform(scrollYProgress, [0.1, 0.42, 0.84], [0, 0.48, 0.18]);
  const marqueesOpacity = useTransform(scrollYProgress, [0.34, 0.57, 0.9], [0, 1, 0.25]);
  const marqueesY = useTransform(scrollYProgress, [0.34, 0.92], ["18vh", "-38vh"]);

  return (
    <section ref={root} id="home" className="relative h-[260vh] bg-[#11131d] sm:h-[285vh]">
      <div className="sticky top-0 h-screen overflow-hidden rounded-b-[38px] bg-[#11131d] sm:rounded-b-[52px]">
        <motion.div
          style={reduceMotion ? undefined : { y: raysY }}
          className="pointer-events-none absolute inset-0 flex items-center justify-between opacity-75"
        >
          <img src={`${CDN}6526b7e7e4b568ed611375b3_left.svg`} alt="" className="w-[37vw] -translate-x-[7vw]" />
          <img src={`${CDN}6526b7e77542c17c5fd421db_right.svg`} alt="" className="w-[37vw] translate-x-[7vw]" />
        </motion.div>

        <div className="pointer-events-none absolute left-1/2 top-[28%] h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#6437fc]/10 blur-[150px]" />

        <motion.div
          style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
          className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center px-5 pt-[16vh] text-center sm:pt-[16.5vh]"
        >
          <h1 className="text-[clamp(3.15rem,5.75vw,6.9rem)] font-normal leading-[0.98] tracking-[-0.055em] text-white">
            Powerful Ads
            <br />
            Made Effortlessly
          </h1>
          <p className="mt-5 max-w-2xl text-[clamp(.92rem,1.15vw,1.35rem)] leading-relaxed text-[#d5d8e5]">
            Create winning ads in minutes across top platforms, even if it’s your first time.
          </p>
          <a
            href="https://suite.adyouneed.com/authentication/register"
            target="_blank"
            rel="noreferrer"
            className="group relative mt-7 inline-flex rounded-full border border-[#4a396f]/60 bg-[#171a2a] px-8 py-3.5 text-sm font-medium text-white shadow-[0_16px_42px_rgba(100,55,252,.25)] transition duration-300 hover:-translate-y-0.5 hover:border-[#6e4adf] hover:shadow-[0_18px_48px_rgba(100,55,252,.42)]"
          >
            Start Your Free Trial
          </a>
          <div className="mt-14 flex max-w-xl flex-col items-center">
            <p className="text-xs leading-relaxed tracking-[.01em] text-[#aeb5ce] sm:text-sm">
              &quot;ADYOUNEED, as a distinguished Google Premier Partner, proudly stands among the elite top 3% of global companies.&quot;
            </p>
            <img
              src={`${CDN}646bcc95214cf139626be9c3_google-premiere-partner-logo.svg`}
              alt="Google Premier Partner"
              className="mt-3 h-6 w-auto opacity-75"
            />
          </div>
        </motion.div>

        <motion.img
          src={`${CDN}646c7135dd0ef57c214649a1_create-an-ad.svg`}
          alt=""
          style={reduceMotion ? undefined : { opacity: outlineOpacity }}
          className="pointer-events-none absolute left-1/2 top-[42vh] w-[80vw] max-w-[1450px] -translate-x-1/2"
        />

        <motion.div
          style={reduceMotion ? undefined : { y: dashboardY, scale: dashboardScale }}
          className="absolute left-1/2 top-[79vh] z-20 w-[min(83vw,1510px)] -translate-x-1/2 origin-top"
        >
          <div className="rounded-[22px] border border-[#7285bf]/60 bg-[#0f1220] p-[9px] shadow-[0_32px_110px_rgba(0,0,0,.68),0_0_70px_rgba(100,55,252,.12)] sm:rounded-[30px] sm:p-[13px]">
            <div className="overflow-hidden rounded-[15px] sm:rounded-[20px]">
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

        <motion.div
          style={reduceMotion ? undefined : { opacity: marqueesOpacity, y: marqueesY }}
          className="absolute inset-x-0 top-[108vh] z-10 space-y-4 overflow-hidden"
        >
          <PlatformRow />
          <PlatformRow reverse />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#11131d] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#11131d] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
