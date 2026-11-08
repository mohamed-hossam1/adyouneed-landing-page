"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress";

const CDN = "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/";

export default function BottomCTA() {
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const scrollYProgress = useScrollProgress(root, "top bottom", "bottom top");
  const panelY = useTransform(scrollYProgress, [0, 0.55, 1], [130, 0, -35]);
  const screenY = useTransform(scrollYProgress, [0, 0.65, 1], [220, 25, -15]);
  const screenRotate = useTransform(scrollYProgress, [0, 0.65, 1], [18, 8, 3]);
  const outlineOpacity = useTransform(scrollYProgress, [0, 0.35, 0.8], [0, 0.52, 0.18]);

  return (
    <section ref={root} className="relative w-full overflow-hidden bg-[#11131d] px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
      <motion.img
        src={`${CDN}647b1c692ac1af6cccf3b918_time-to-start.svg`}
        alt=""
        style={reduceMotion ? undefined : { opacity: outlineOpacity }}
        className="pointer-events-none absolute left-1/2 top-6 w-[min(92vw,1500px)] -translate-x-1/2"
      />
      <motion.div
        style={reduceMotion ? undefined : { y: panelY }}
        className="relative mx-auto h-[760px] max-w-[1500px] overflow-hidden rounded-[38px] border border-[#7583c1]/20 bg-[radial-gradient(circle_at_50%_20%,rgba(103,56,252,.62),transparent_34%),linear-gradient(145deg,#171b36_4%,#30256f_50%,#182d55_100%)] px-5 pt-20 shadow-[0_40px_100px_rgba(0,0,0,.45)] sm:rounded-[50px]"
      >
        <div className="relative z-20 mx-auto max-w-4xl">
          <h2 className="text-[clamp(2.5rem,4.7vw,5.1rem)] font-normal leading-[1.02] tracking-[-.045em] text-white">
            Experience the future of<br />effortless ad creation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#c5cae1] sm:text-base">
            Get started for free, create and manage ads in minutes so you can focus on what really matters — your business.
          </p>
          <a href="https://suite.adyouneed.com/authentication/register" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full border border-[#7558e9]/70 bg-[#171a2a] px-9 py-3.5 text-sm font-medium shadow-[0_14px_42px_rgba(100,55,252,.36)] transition hover:-translate-y-0.5 hover:border-white/35">
            Start Your Free Trial
          </a>
        </div>
        <div className="pointer-events-none absolute inset-x-[8%] bottom-[-3%] h-[47%] [perspective:1300px]">
          <motion.div style={reduceMotion ? undefined : { y: screenY, rotateX: screenRotate }} className="h-full origin-bottom overflow-hidden rounded-[28px] border border-white/15 bg-[#0f1220] p-2 shadow-[0_-20px_80px_rgba(84,41,224,.38)] [transform-style:preserve-3d]">
            <img src={`${CDN}66bb2500c020bf4626780426_Group%2029751.avif`} alt="ADYOUNEED dashboard in perspective" className="h-auto w-full rounded-[20px]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
