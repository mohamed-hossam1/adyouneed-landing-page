"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

const rows = [
  ["Adspend Limit", "$1,000", "$5,000", "Unlimited"],
  ["Account Limit", "Unlimited", "Unlimited", "Unlimited"],
  ["Instant Ads", true, true, true],
  ["Smart Campaign", true, true, true],
  ["All Platforms", true, true, true],
  ["Text Generator", true, true, true],
  ["Click Fraud", false, true, true],
  ["Sub Accounts", false, "2", "5"],
  ["Custom Branding", false, true, true],
] as const;

const monthly = [
  { name: "Starter", old: "$29", whole: "21", decimal: "75" },
  { name: "Premium", old: "$59", whole: "44", decimal: "25" },
  { name: "Ultimate", old: "$99", whole: "74", decimal: "25" },
];

const yearly = [
  { name: "Starter", old: "$21.75", whole: "17", decimal: "40" },
  { name: "Premium", old: "$44.25", whole: "35", decimal: "40" },
  { name: "Ultimate", old: "$74.25", whole: "59", decimal: "40" },
];

function Value({ value, ultimate = false }: { value: boolean | string; ultimate?: boolean }) {
  if (typeof value === "string") return <span>{value}</span>;
  return value ? (
    <span className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${ultimate ? "bg-[#6437fc]/25" : "bg-white/[.07]"}`}><Check className="h-4 w-4" /></span>
  ) : (
    <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10"><X className="h-4 w-4 text-orange-500" /></span>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearly : monthly;

  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-[#1a1a28] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-[clamp(3rem,5vw,5.3rem)] font-normal leading-[1.02] tracking-[-.045em]">
            Great ad performance.<br />Unbelievable Pricing.
          </h2>
          <p className="mt-5 text-base text-[#b8bdd2] sm:text-xl">Whether you are a startup, an enterprise, or an agency, we have a plan to suit your needs.</p>
          <div className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-t-xl bg-[#34266c] px-7 py-3.5 text-sm">
            <button onClick={() => setIsYearly(false)} className={`transition ${!isYearly ? "text-white" : "text-white/55"}`}>Monthly Plan</button>
            <button
              role="switch"
              aria-checked={isYearly}
              aria-label="Toggle yearly pricing"
              onClick={() => setIsYearly((value) => !value)}
              className={`relative h-7 w-12 rounded-full border border-white/10 transition ${isYearly ? "bg-[#6437fc]" : "bg-[#777398]"}`}
            >
              <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${isYearly ? "left-6" : "left-1"}`} />
            </button>
            <button onClick={() => setIsYearly(true)} className={`transition ${isYearly ? "text-white" : "text-white/55"}`}>Yearly Plan</button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/[.06] bg-[#252a3b] p-7 shadow-2xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="flex min-h-44 items-center justify-between rounded-2xl bg-[#292b3b] px-8 py-6">
              <div><div className="text-4xl font-semibold">25%<span className="ml-1 text-sm">OFF</span></div><p className="mt-2 max-w-36 text-sm leading-relaxed">Apply <strong>FIRSTYEAR25</strong> after the sign-up!</p></div><div className="text-4xl text-[#41348e]">»</div>
            </div>
            {plans.map((plan, index) => (
              <div key={plan.name} className={`relative flex min-h-44 flex-col items-center justify-center rounded-2xl px-6 py-5 text-center ${index === 2 ? "bg-gradient-to-br from-[#713cff] to-[#5b2ff1] shadow-[0_20px_50px_rgba(100,55,252,.28)]" : "bg-[#202331]"}`}>
                {index === 2 && <span className="absolute -top-10 left-1/2 w-[82%] -translate-x-1/2 rounded-t-xl bg-white py-2.5 text-sm font-bold text-[#171926]">BEST SELLER</span>}
                <div className="text-lg uppercase tracking-wide">{plan.name}</div><div className="mt-1 text-sm text-white/35 line-through">{plan.old}</div>
                <div className="mt-1 flex items-start"><span className="mt-4 text-lg">$</span><span className="text-6xl font-semibold leading-none">{plan.whole}</span><sup className="mt-1 text-lg">,{plan.decimal}</sup></div>
                <div className="text-sm text-white/50">Per month</div>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-x-auto rounded-xl">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={row[0]} className={rowIndex % 2 ? "bg-[#262938]" : "bg-[#20222f]"}>
                    <th className="w-1/4 px-8 py-4 text-left font-normal underline decoration-dotted underline-offset-4">{row[0]}</th>
                    <td className="w-1/4 px-6 py-3 text-center"><Value value={row[1]} /></td>
                    <td className="w-1/4 px-6 py-3 text-center"><Value value={row[2]} /></td>
                    <td className="w-1/4 px-6 py-3 text-center"><Value value={row[3]} ultimate /></td>
                  </tr>
                ))}
                <tr className="bg-[#292e40]">
                  <td />
                  {[0, 1, 2].map((index) => <td key={index} className="px-6 py-5 text-center"><a href="https://suite.adyouneed.com/authentication/register" className={`inline-flex rounded-full px-10 py-3 font-semibold transition hover:-translate-y-0.5 ${index === 2 ? "bg-[#6437fc] shadow-[0_10px_30px_rgba(100,55,252,.3)]" : "bg-[#6238e8]"}`}>Get Started</a></td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
