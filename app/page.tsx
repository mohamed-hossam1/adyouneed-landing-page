import React from "react";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/providers/SmoothScroll";
import Hero from "./components/Hero";
import FeaturesOneTool from "./components/FeaturesOneTool";
import FeaturesInstantAds from "./components/FeaturesInstantAds";
import FeaturesInfiniteReach from "./components/FeaturesInfiniteReach";
import ProductHuntBadge from "./components/ProductHuntBadge";
import ProcessFlow from "./components/ProcessFlow";
import ExecutiveQuote from "./components/ExecutiveQuote";
import InteractiveTabs from "./components/InteractiveTabs";
import Pricing from "./components/Pricing";
import PricingFAQ from "./components/PricingFAQ";
import TestimonialsMasonry from "./components/TestimonialsMasonry";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#171926] text-white selection:bg-[#6437fc] selection:text-white">
      {/* Floating Header (outside the smooth content so it stays viewport-fixed) */}
      <Navbar />

      <SmoothScroll>
        {/* Scroll-linked hero and product takeover */}
        <Hero />

        {/* Unified Light Feature Surface with continuous side borders */}
        <div className="relative z-20 -mt-12 mx-[3.125vw] rounded-t-[47.7px] rounded-b-[47.7px] border-x border-t border-b border-[#42516b]/40 bg-[#edf0fe] max-sm:mx-0 max-sm:rounded-none max-sm:border-x-0">
          {/* "One Tool To Rule Them All" Feature Grid */}
          <FeaturesOneTool />

          {/* "One Click Instant Ads" with AdCreative.ai Stack */}
          <FeaturesInstantAds />

          {/* "One Button Infinite Reach" with Smart Multi-channel Journey */}
          <FeaturesInfiniteReach />

          {/* Product Hunt Award Social Proof */}
          <ProductHuntBadge />

          {/* 5-Step Interactive Process Flow Stack */}
          <ProcessFlow />

          {/* Executive Testimonial */}
          <ExecutiveQuote />

          {/* Interactive Tabs (Dashboard, Ad Creation, Click Fraud) */}
          <InteractiveTabs />
        </div>

        {/* Pricing Section (Monthly/Yearly, 4 Tiers, Comparison Matrix, Slider) */}
        <Pricing />

        {/* Pricing FAQ Accordion */}
        <PricingFAQ />

        {/* Testimonials Masonry (11 Customer Reviews) */}
        <TestimonialsMasonry />

        {/* Bottom CTA Banner with 3D Mockup */}
        <BottomCTA />

        {/* Footer */}
        <Footer />
      </SmoothScroll>
    </main>
  );
}
