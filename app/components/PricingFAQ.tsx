"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How is my first month’s fee calculated?",
    a: "Your first month’s fee is based on your last seven days of ad spend, multiplied by four. This gives us a projected monthly ad spend to determine your initial tier.",
  },
  {
    q: "If I reduce my ad spend, does my cost go down too?",
    a: "Yes, with the Pay-as-you-Grow Plan, your cost automatically adjusts downward if your monthly ad spend decreases.",
  },
  {
    q: "Are there any hidden fees in the Pay-as-you-Grow Plan?",
    a: "No, there are absolutely no hidden fees. You pay strictly based on your tier and ad spend.",
  },
  {
    q: "With the Pay-as-you-Grow Plan, do I get all ADYOUNEED features?",
    a: "Yes! All users get full access to all features, including instant ads, clickfraud protection, and automated multi-channel budget allocation.",
  },
  {
    q: "Can I save with a yearly package if my ad spend is consistent?",
    a: "Absolutely! The annual plan saves you 25% across all tiers. Connect unlimited ad accounts and invite as many users as you need.",
  },
];

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-4 w-[9.59px] shrink-0 items-center justify-center lg:h-[15.89px] lg:w-[9.53px]">
      <span className="absolute h-px w-[9.59px] bg-[#42516b] lg:w-[9.53px]" />
      <span
        className={`absolute h-[9.59px] w-px bg-[#42516b] transition-opacity duration-200 lg:h-[9.53px] ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

export default function PricingFAQ() {
  const [open, setOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-transparent px-8 pb-20 [font-family:var(--font-inter)] lg:px-0">
      <div className="mx-auto w-full max-w-[890.4px]">
        <div className="w-full overflow-hidden rounded-b-[8.258px] bg-[rgba(33,41,54,0.4)] lg:rounded-b-[15.9px]">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative flex w-full items-center px-[16.52px] py-[11.56px] text-left lg:px-[31.8px] lg:py-[22.26px]"
          >
            <span className="text-[11.2px] font-medium leading-[13.44px] text-white lg:text-[17.8875px] lg:leading-[21.465px]">
              Frequently asked questions about our pricing
            </span>
            <ChevronDown
              className={`absolute right-5 h-[8.25px] w-[8.25px] text-[#bdc5e6] transition-transform duration-200 lg:h-[15.89px] lg:w-[15.89px] ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="px-4 pb-4 pt-2 lg:px-[31.8px] lg:pb-[15.9px] lg:pt-[7.95px]">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={item.q}
                    className={`border-b border-[rgba(66,81,107,0.4)] px-[1.65px] lg:px-[3.18px] ${
                      isOpen ? "pb-[12.8px] lg:pb-[11.925px]" : "pb-[6.19px] lg:pb-[5.56px]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="flex w-full items-start justify-between gap-3 pt-[9.91px] text-left lg:pt-[19.08px]"
                    >
                      <span
                        className={`text-[11.2px] leading-[16.8px] lg:text-[17.49px] lg:leading-[26.235px] ${
                          isOpen ? "text-white" : "text-[#bdc5e6]"
                        }`}
                      >
                        Q:&nbsp;&nbsp; {item.q}
                      </span>
                      <PlusMinus open={isOpen} />
                    </button>

                    {isOpen && (
                      <p className="mt-[6.18px] text-[11.2px] leading-[16.8px] text-white lg:mt-[11.925px] lg:text-[15.9px] lg:leading-[23.85px]">
                        A:&nbsp;&nbsp;&nbsp; {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
