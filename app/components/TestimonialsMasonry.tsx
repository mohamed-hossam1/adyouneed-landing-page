"use client";

import React from "react";

const REVIEWS = [
  {
    name: "Sasha M.",
    handle: "@sashamrejen",
    source: "linkedin",
    title: "Replaced our agency! 🤯",
    content:
      "ADYOUNEED's automation platform completely replaced our agency. We were so impressed that we shifted our entire budget to the platform.",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba29db4ea0e4d87bf6e3cf_Sasha.webp",
  },
  {
    name: "Redon G.",
    handle: "@redongjika",
    source: "g2",
    title: "This is fantastic!",
    content:
      "This is fantastic. Just signed up to test on my 2 products and definitely impressed. Easy setup and ad creation. Can't wait to scale this.",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba2aac192f7a51adc0e1c3_redon2.webp",
  },
  {
    name: "Shane B.",
    handle: "@shaneblevins",
    source: "g2",
    title: "Simple and effective!",
    content:
      "It allows you to easily manage your ads from multiple platforms (and still growing) as well as truly fine-tune your ad objectives and budgeting. It really is a great all-in-one solution. The customer service is also amazing.",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba29db6beddb56d467769b_shane.webp",
  },
  {
    name: "Sarah R.",
    handle: "@sarahreedy",
    source: "g2",
    title: "All your ads in one place! Great!",
    content:
      "Having AdYouNeed is helpful because it's ALL your ads in one place, and it's a lot more intuitive than just logging into Facebook or Google having to check each individual ad you have created.",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba29db4ea0e4d87bf6e412_rarah.svg",
  },
  {
    name: "Max",
    handle: "@mxcrbn",
    source: "g2",
    title: "Literally game changing!",
    content:
      "Love the product, it's been literally game changing for us! Also, the whole ADYOUNEED team are amazing : keep killing it guys 👏",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba2b3e7e77798c552610e2_max2.webp",
  },
  {
    name: "Ifoma P.",
    handle: "@ifomapierre",
    source: "g2",
    title: "A breath of fresh air",
    content:
      "It's Super sleek easy to use interface. I have seen a few of these platforms and non has come close to the simplicity that's in ADYOUNEED.",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba29daa6e0ed80048c8182_ifoma.webp",
  },
  {
    name: "Elodie B.",
    handle: "@elodiebonnamy",
    source: "linkedin",
    title: "Our agency's secret weapon!",
    content:
      "We've found our agency's secret weapon. By automating tasks, we achieve better results, take on more clients, and reduce our workload. It's a game-changer!",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba29dcb03f44e6bd4f73b9_elodie.webp",
  },
  {
    name: "Alecia M.",
    handle: "@aleciaminster",
    source: "g2",
    title: "Running Ads Simplified",
    content:
      "It's super sleek easy to use interface. I have seen a few of these platforms and none has come close to the simplicity that's in ADYOUNEED. All in all I love the support and training.",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba29da4ea0e4d87bf6e39e_alecia.webp",
  },
  {
    name: "Michael D.",
    handle: "@michaeldigiovanni",
    source: "g2",
    title: "Incredible UX and Support",
    content:
      "Organisations that don't use ADYOUNEED are really missing out on this expert knowledge! Truly remarkable support and results.",
    avatar: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64ba29da8fe384c6dc2b968d_michael.webp",
  },
];

export default function TestimonialsMasonry() {
  return (
    <section className="relative w-full bg-[#080911] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-5xl sm:text-7xl font-normal tracking-[-.04em] mb-4">
            Our clients love us!
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Simplified ad creation, AI-first approach and affordable pricing — just a few things our clients love!
          </p>
          <a href="https://suite.adyouneed.com/authentication/register" className="mt-7 inline-flex rounded-full border border-[#6437fc]/55 bg-[#171926] px-8 py-3 text-sm font-medium text-white shadow-[0_12px_35px_rgba(100,55,252,.2)] transition hover:-translate-y-0.5 hover:border-[#7b5cff]">Start Your Free Trial</a>
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3 [column-fill:balance]">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className={`break-inside-avoid rounded-2xl p-6 bg-[#252839] border border-white/[.07] shadow-[0_18px_50px_rgba(0,0,0,.25)] hover:border-[#6437fc]/25 transition-all hover:-translate-y-1 duration-200 ${idx % 3 === 1 ? "lg:translate-y-12" : idx % 3 === 2 ? "lg:-translate-y-5" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{review.name}</h4>
                    <span className="text-xs text-slate-400">{review.handle}</span>
                  </div>
                </div>

                {review.source === "linkedin" ? (
                  <div className="w-6 h-6 rounded bg-[#0077b5]/20 text-[#0077b5] flex items-center justify-center font-bold text-xs">
                    in
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#ff492c]/20 text-[#ff492c] flex items-center justify-center font-black text-[10px]">
                    G2
                  </div>
                )}
              </div>

              <h5 className="text-sm font-bold text-white mb-2 leading-snug">{review.title}</h5>
              <p className="text-xs text-slate-400 leading-relaxed">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
