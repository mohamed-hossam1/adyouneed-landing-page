"use client";

import React from "react";
import { motion } from "framer-motion";

const AD_IMAGES = [
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0bea4ae9342452d70d2b_Group%2029663.avif",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0bea3bd7f8e72a51eb56_Group%2029664.avif",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0beae2a311df03be5447_Group%2029666.avif",
  "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0bea4a2b95f15f43076c_Group%2029041.avif",
];

const AUDIENCES = [
  "Business Owners",
  "Business Owners",
  "Professional",
  "Special discounts for th...",
];

const REVEAL = {
  initial: { opacity: 0, y: 64, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.15 },
};

export default function FeaturesInstantAds() {
  return (
    <section className="relative w-full bg-transparent px-[clamp(24px,3.125vw,59.625px)] py-20 text-[#171926]">
      <div className="mx-auto max-w-[859px] text-center">
        <div className="mb-[15.9px] text-[15.9px] font-medium uppercase leading-[19.08px] tracking-[2.385px] text-[#6437fc]">
          new feature
        </div>
        <h2 className="text-[clamp(3rem,4.166vw,79.5px)] font-semibold leading-[1] tracking-[-0.045em] text-[#171926]">
          One Click
          <br />
          Instant Ads
        </h2>
        <p className="mx-auto mt-[15.9px] max-w-[859px] text-[clamp(16px,1.146vw,21.8625px)] leading-[1.5] text-[#171926]">
          Generate all your ad creatives, texts, and audiences, and publish result bringing ads with a single click. The fastest end-to-end ad creation on the planet.
        </p>
      </div>

      <div className="mx-auto mt-[47.7px] grid max-w-[1193px] grid-cols-1 gap-[27.825px] pt-[47.7px] lg:grid-cols-2">
        <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-[24.8438px] border border-white bg-[radial-gradient(circle_at_50%_100%,rgba(250,251,253,0.6),rgba(250,251,253,0.28))] py-[31.8px] pl-0 pr-0 lg:col-span-2 lg:min-h-[344px] lg:flex-row lg:pl-[47.7px]">
          <div className="w-full shrink-0 px-[15.9px] lg:w-[514px] lg:shrink lg:px-0 lg:pl-[15.9px]">
            <div className="inline-flex h-[39px] w-[96px] flex-col items-center justify-center rounded-[8px] bg-white text-[#170c45]">
              <span className="text-[6.5px] leading-[1.1]">Powered by</span>
              <span className="text-[9.5px] font-bold leading-[1.15]">AdCreative.ai</span>
            </div>
            <h3 className="mt-[15.9px] text-[clamp(26px,1.667vw,31.8px)] font-semibold leading-[1.4] text-[#171926]">
              Instant AI-Driven Campaigns
            </h3>
            <p className="mt-[15.9px] text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
              Provide your website URL, and let our advanced AI powered by AdCreative.ai generate all the visuals, texts, and audiences in a matter of seconds. Select the ones you like and click publish.
              <br />
              The world&apos;s fastest high-conversion rate ad publishing workflow.
            </p>
          </div>

          <div className="mt-[31.8px] flex w-full items-center gap-[14.31px] overflow-hidden lg:mt-0 lg:w-[588px] lg:shrink-0">
            {AD_IMAGES.map((src, idx) => (
              <motion.img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="h-[200px] w-[118px] shrink-0 object-cover sm:h-[240px] sm:w-[142px] lg:h-[278px] lg:w-[164px]"
                initial={REVEAL.initial}
                whileInView={REVEAL.whileInView}
                viewport={REVEAL.viewport}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              />
            ))}
          </div>
        </div>

        <div className="relative flex w-full flex-col overflow-hidden rounded-[24.8438px] border border-white bg-[radial-gradient(circle_at_100%_100%,#fafbfd,rgba(255,255,255,0))] pb-[50.88px] pt-[47.7px]">
          <div className="px-[33.7875px]">
            <div className="flex items-center justify-between rounded-[15.9px] bg-white px-[22.26px] py-[19.08px]">
              <span className="text-[13.9125px] font-semibold text-[#42516b]">
                URL&nbsp;&nbsp;&nbsp;&nbsp;https://www.adyouneed.com
              </span>
              <span className="text-[13.9125px] font-semibold text-[#6437fc]">Scanned!</span>
            </div>
            <div className="mb-[22.26px] mt-[12.72px] grid grid-cols-2 gap-x-[12.72px] gap-y-[14.31px]">
              {AUDIENCES.map((audience, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center rounded-[15.9px] bg-white/40 px-[22.26px] py-[19.08px]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.08 * idx }}
                >
                  <span className="text-[13.9125px] font-semibold text-[#42516b]">{audience}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <img
            src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba0f13979d4f272794fabe_ai-features-wrap.avif"
            alt=""
            loading="lazy"
            className="mt-[21.3px] h-[100px] w-full object-fill"
          />

          <div className="mt-[31.8px] px-[15.9px]">
            <h3 className="text-[clamp(26px,1.667vw,31.8px)] font-semibold leading-[1.4] text-[#171926]">
              AI Website Scanner
            </h3>
            <p className="mt-[7.95px] text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
              Provide your product/service URL, and let us fine-tune your AI model that knows everything about your product.
            </p>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center overflow-hidden rounded-[24.8438px] border border-white bg-[radial-gradient(circle_at_100%_100%,#fafbfd,rgba(255,255,255,0))] px-[19.875px] pb-[50.88px]">
          <img
            src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66ba10e890528ae9e52e1ee1_4-images.avif"
            alt=""
            loading="lazy"
            className="-mt-[47.7px] h-[109px] w-[473px] max-w-full object-contain"
          />

          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 367.596 41" className="h-[41px] w-[364px] max-w-full overflow-hidden">
            <g transform="translate(-1083.203 -3274)">
              <path d="M174.1,31h0V20.5a7.5,7.5,0,0,0-7.5-7.5H8A7.5,7.5,0,0,1,.5,5.5V-10" transform="translate(1083.203 3284)" fill="none" stroke="#fff" strokeWidth="1" />
              <path d="M.5,31h0V20.5A7.5,7.5,0,0,1,8,13H166.6a7.5,7.5,0,0,0,7.5-7.5V-10" transform="translate(1276.203 3284)" fill="none" stroke="#fff" strokeWidth="1" />
              <path d="M55.1,31h0V14.5A7.5,7.5,0,0,0,47.6,7H6A7.5,7.5,0,0,1-1.5-.5V-10" transform="translate(1208.203 3284)" fill="none" stroke="#fff" strokeWidth="1" />
              <path d="M.5,31h0V14.5A7.5,7.5,0,0,1,8,7H49.6A7.5,7.5,0,0,0,57.1-.5V-10" transform="translate(1270.203 3284)" fill="none" stroke="#fff" strokeWidth="1" />
            </g>
            <g transform="translate(-1083.203 -3274)">
              <path d="M174.1,31h0V20.5a7.5,7.5,0,0,0-7.5-7.5H8A7.5,7.5,0,0,1,.5,5.5V-10" transform="translate(1083.203 3284)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" />
              <path d="M.5,31h0V20.5A7.5,7.5,0,0,1,8,13H166.6a7.5,7.5,0,0,0,7.5-7.5V-10" transform="translate(1276.203 3284)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" style={{ animationDelay: "0.4s" }} />
              <path d="M55.1,31h0V14.5A7.5,7.5,0,0,0,47.6,7H6A7.5,7.5,0,0,1-1.5-.5V-10" transform="translate(1208.203 3284)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" style={{ animationDelay: "0.8s" }} />
              <path d="M.5,31h0V14.5A7.5,7.5,0,0,1,8,7H49.6A7.5,7.5,0,0,0,57.1-.5V-10" transform="translate(1270.203 3284)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" style={{ animationDelay: "1.2s" }} />
            </g>
          </svg>

          <div className="relative flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-[15.9px] p-px">
            <div className="flex h-full w-full items-center justify-center rounded-[15.9px] bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 22.13 21.017">
                <g transform="translate(-0.002 0)">
                  <path d="M582.35,393.628l-1.736-.848-7.578,3.99a2.808,2.808,0,0,1-2.616,0l-7.578-3.989-1.736.848a.789.789,0,0,0-.021,1.407l9.335,4.915a2.808,2.808,0,0,0,2.616,0l9.335-4.915a.789.789,0,0,0-.021-1.407Z" transform="translate(-560.661 -379.256)" fill="#170c45" opacity="0.4" />
                  <path d="M582.352,308.459l-1.719-.839-7.6,4a2.808,2.808,0,0,1-2.616,0l-7.6-4-1.718.839a.789.789,0,0,0-.021,1.407l9.335,4.915a2.808,2.808,0,0,0,2.616,0l9.335-4.915a.789.789,0,0,0-.021-1.407Z" transform="translate(-560.664 -297.266)" fill="#170c45" opacity="0.6" />
                  <path d="M582.394,35.747l-9.335,4.915a2.808,2.808,0,0,1-2.616,0l-9.335-4.915a.789.789,0,0,1,.022-1.407l9.389-4.585a2.807,2.807,0,0,1,2.464,0l9.39,4.585a.789.789,0,0,1,.022,1.407Z" transform="translate(-560.683 -29.47)" fill="#170c45" />
                  <path d="M582.35,223.518l-1.717-.838-7.6,4a2.808,2.808,0,0,1-2.616,0l-7.6-4-1.717.838a.789.789,0,0,0-.021,1.407l9.335,4.914a2.808,2.808,0,0,0,2.616,0l9.335-4.914a.789.789,0,0,0-.021-1.407Z" transform="translate(-560.662 -215.488)" fill="#170c45" opacity="0.8" />
                </g>
              </svg>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 468.596 41" className="h-[41px] w-[464px] max-w-full overflow-hidden">
            <g transform="translate(51)">
              <path d="M.5-10h0V.5A7.5,7.5,0,0,0,8,8H212.6a7.5,7.5,0,0,1,7.5,7.5V31" transform="translate(197 10)" fill="none" stroke="#fff" strokeWidth="1" />
              <path d="M220.1-10h0V.5A7.5,7.5,0,0,1,212.6,8H8A7.5,7.5,0,0,0,.5,15.5V31" transform="translate(-51 10)" fill="none" stroke="#fff" strokeWidth="1" />
              <path d="M55.1-10h0V30.5" transform="translate(128.404 10)" fill="none" stroke="#fff" strokeWidth="1" />
              <path d="M.5-10h0V6.5A7.5,7.5,0,0,0,8,14h93.6a7.5,7.5,0,0,1,7.5,7.5V31" transform="translate(190 10)" fill="none" stroke="#fff" strokeWidth="1" />
              <path d="M109.1-10h0V6.5a7.5,7.5,0,0,1-7.5,7.5H8A7.5,7.5,0,0,0,.5,21.5V31" transform="translate(67 10)" fill="none" stroke="#fff" strokeWidth="1" />
            </g>
            <g transform="translate(51)">
              <path d="M.5-10h0V.5A7.5,7.5,0,0,0,8,8H212.6a7.5,7.5,0,0,1,7.5,7.5V31" transform="translate(197 10)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" />
              <path d="M220.1-10h0V.5A7.5,7.5,0,0,1,212.6,8H8A7.5,7.5,0,0,0,.5,15.5V31" transform="translate(-51 10)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" style={{ animationDelay: "0.3s" }} />
              <path d="M55.1-10h0V30.5" transform="translate(128.404 10)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" style={{ animationDelay: "0.6s" }} />
              <path d="M.5-10h0V6.5A7.5,7.5,0,0,0,8,14h93.6a7.5,7.5,0,0,1,7.5,7.5V31" transform="translate(190 10)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" style={{ animationDelay: "0.9s" }} />
              <path d="M109.1-10h0V6.5a7.5,7.5,0,0,1-7.5,7.5H8A7.5,7.5,0,0,0,.5,21.5V31" transform="translate(67 10)" fill="none" stroke="#6437fc" strokeWidth="1" pathLength={100} strokeDasharray="4 100" className="connector-travel" style={{ animationDelay: "1.2s" }} />
            </g>
          </svg>

          <div className="relative flex h-[171px] w-[541px] max-w-full items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/66bc92f88b3bc7302e96c4fa_ayn-5img.avif"
              alt=""
              loading="lazy"
              className="h-[171px] w-[541px] max-w-full object-contain"
            />
            <a
              href="#"
              className="absolute z-[2] inline-flex items-center justify-center rounded-[31.8px] bg-[#6437fc] px-[19.08px] py-[15.9px] text-[15.9px] text-white shadow-[0_10px_30px_rgba(100,55,252,0.35)] transition-colors hover:bg-[#5229db]"
            >
              Publish Campaign
            </a>
          </div>

          <div className="mt-[15.9px] w-full px-[15.9px]">
            <h3 className="text-[clamp(26px,1.667vw,31.8px)] font-semibold leading-[1.4] text-[#171926]">
              One Click Publish!
            </h3>
            <p className="mt-[7.95px] text-[15.9px] leading-[1.5] tracking-[-0.02em] text-[#42516b]">
              Select the AI-generated creatives you like and click to publish your result-bringing ads with a single click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
