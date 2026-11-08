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

function Value({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span>{value}</span>;
  return value ? (
    <span className="mx-auto flex h-[30.2px] w-[30.2px] items-center justify-center rounded-full bg-white/10"><Check className="h-[15px] w-[15px] text-[#8b6ff7]" /></span>
  ) : (
    <span className="mx-auto flex h-[30.2px] w-[30.2px] items-center justify-center rounded-full bg-white/10"><X className="h-[15px] w-[15px] text-[#ff7a2f]" /></span>
  );
}

function MetaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.812 12.5" width="17.875" height="11.875" fill="#fff" className="shrink-0" aria-hidden="true">
      <path d="M13.5,85.881c-1.543,0-2.748,1.162-3.84,2.637-1.5-1.91-2.754-2.637-4.256-2.637C2.345,85.881,0,89.864,0,94.079c0,2.638,1.276,4.3,3.414,4.3,1.539,0,2.645-.725,4.612-4.164l1.384-2.446q.3.479.625,1.032l.922,1.552c1.8,3.007,2.8,4.026,4.612,4.026,2.083,0,3.242-1.687,3.242-4.379C18.812,89.588,16.414,85.881,13.5,85.881ZM6.526,93.286c-1.595,2.5-2.147,3.06-3.035,3.06-.914,0-1.457-.8-1.457-2.233,0-3.06,1.526-6.19,3.345-6.19.985,0,1.808.569,3.069,2.374C7.252,92.135,6.526,93.286,6.526,93.286Zm6.02-.315-1.1-1.839q-.448-.728-.861-1.34c.994-1.534,1.814-2.3,2.789-2.3,2.026,0,3.647,2.983,3.647,6.647,0,1.4-.457,2.207-1.405,2.207-.908,0-1.342-.6-3.067-3.375Z" transform="translate(0 -85.881)" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.218 15.192" width="15.89" height="15.86" className="shrink-0" aria-hidden="true">
      <path d="M3.373,143.346l-.53,1.974-1.936.041a7.6,7.6,0,0,1-.056-7.093h0l1.724.315.755,1.71a4.526,4.526,0,0,0,.043,3.052Z" transform="translate(0 -134.165)" fill="#fff" />
      <path d="M268.937,208.176a7.585,7.585,0,0,1-2.713,7.343h0l-2.171-.111-.307-1.915a4.529,4.529,0,0,0,1.951-2.312h-4.069v-3.005h7.309Z" transform="translate(-253.852 -201.999)" fill="#fff" />
      <path d="M41.975,313.748h0a7.619,7.619,0,0,1-11.466-2.324l2.466-2.015a4.529,4.529,0,0,0,6.521,2.313Z" transform="translate(-29.602 -300.228)" fill="#fff" />
      <path d="M40.239,1.749,37.774,3.763A4.529,4.529,0,0,0,31.1,6.129L28.624,4.1h0A7.618,7.618,0,0,1,40.239,1.749Z" transform="translate(-27.773)" fill="#fff" />
    </svg>
  );
}

function BingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.978 15.682" width="9.9375" height="14.1875" className="shrink-0" aria-hidden="true">
      <path d="M19.391,19.731l1.361,3.394,2.171,1.012L18.505,26.68V15.658l-3.136-1.1V28.485l3.137,1.757,7.841-4.511V22.166Z" transform="translate(-15.369 -14.56)" fill="#fff" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.017 15.016" width="15.89" height="15.875" className="shrink-0" aria-hidden="true">
      <path d="M13.515,0H1.5A1.506,1.506,0,0,0,0,1.5V13.514a1.506,1.506,0,0,0,1.5,1.5H13.515a1.506,1.506,0,0,0,1.5-1.5V1.5A1.506,1.506,0,0,0,13.515,0ZM4.505,12.764H2.253V6.006H4.505ZM3.379,4.73A1.351,1.351,0,1,1,4.73,3.379,1.346,1.346,0,0,1,3.379,4.73Zm9.385,8.034H10.512V8.784a1.126,1.126,0,0,0-2.253,0v3.979H6.007V6.006H8.259v.9a2.425,2.425,0,0,1,1.877-1.051,2.66,2.66,0,0,1,2.628,2.628Z" fill="#fff" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.407 15.287" width="15.89" height="18.11" className="shrink-0" aria-hidden="true">
      <path d="M275.678,83.042a5.914,5.914,0,0,0,3.471,1.12V81.651a3.488,3.488,0,0,1-.729-.077v1.977a5.914,5.914,0,0,1-3.47-1.12v5.125a4.623,4.623,0,0,1-4.6,4.642,4.553,4.553,0,0,1-2.563-.785,4.57,4.57,0,0,0,3.291,1.4,4.623,4.623,0,0,0,4.6-4.642Zm.9-2.534a3.515,3.515,0,0,1-.9-2.049v-.323h-.691a3.517,3.517,0,0,0,1.59,2.372Zm-7.186,8.937a2.127,2.127,0,0,1,1.676-3.409,2.1,2.1,0,0,1,.639.1V83.568a4.607,4.607,0,0,0-.728-.042v2a2.092,2.092,0,0,0-.639-.1,2.127,2.127,0,0,0-.947,4.02Z" transform="translate(-268.042 -74.975)" fill="#fff" opacity="0.4" />
      <path d="M263.543,82.431a5.915,5.915,0,0,0,3.47,1.12V81.574a3.476,3.476,0,0,1-1.843-1.065,3.517,3.517,0,0,1-1.59-2.372h-1.814v10.03a2.979,2.979,0,1,1-2.2-2.642v-2a4.651,4.651,0,0,0-3.194,7.887,4.554,4.554,0,0,0,2.563.785,4.623,4.623,0,0,0,4.6-4.642V82.431Z" transform="translate(-255.551 -74.975)" fill="#fff" />
      <path d="M260.677,76.311v-.534a3.448,3.448,0,0,1-1.843-.531,3.472,3.472,0,0,0,1.843,1.065Zm-3.432-3.438q-.025-.143-.038-.288v-.323h-2.5V82.293a2.115,2.115,0,0,1-2.106,2.116,2.083,2.083,0,0,1-.947-.226A2.1,2.1,0,0,0,255.43,82.9V72.873Zm-4.01,5.39v-.569a4.646,4.646,0,0,0-3.194,8.456,4.651,4.651,0,0,1,3.194-7.886Z" transform="translate(-249.215 -70.689)" fill="#fff" opacity="0.4" />
    </svg>
  );
}

function AllPlatformsLabel() {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap">
      <span className="underline decoration-dotted underline-offset-4">All Platforms</span>
      <span className="flex items-center gap-2" aria-hidden="true">
        <MetaIcon />
        <GoogleIcon />
        <BingIcon />
        <LinkedInIcon />
        <TikTokIcon />
      </span>
    </span>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearly : monthly;

  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-transparent px-8 pt-28 pb-0 text-white [font-family:var(--font-inter)]">
      <div className="mx-auto max-w-[1506.5px]">
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
            <table className="w-full min-w-[760px] border-collapse text-[15.9px] leading-[20.67px]">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={row[0]} className={rowIndex % 2 ? "bg-[#262938]" : "bg-[#20222f]"}>
                    <th className="w-1/4 px-8 py-4 text-left font-medium">
                      {row[0] === "All Platforms" ? (
                        <AllPlatformsLabel />
                      ) : (
                        <span className="underline decoration-dotted underline-offset-4">{row[0]}</span>
                      )}
                    </th>
                    <td className="w-1/4 px-6 py-3 text-center"><Value value={row[1]} /></td>
                    <td className="w-1/4 px-6 py-3 text-center"><Value value={row[2]} /></td>
                    <td className="w-1/4 px-6 py-3 text-center"><Value value={row[3]} /></td>
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
