"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setOverLight(window.scrollY > window.innerHeight * 2.65);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop floating navigation */}
      <header className="pointer-events-none fixed left-0 right-0 top-[51px] z-40 hidden justify-center px-5 lg:flex">
        <nav
          className={`pointer-events-auto flex h-[78px] w-[min(1000px,calc(100vw-40px))] items-center justify-between rounded-[25px] border px-8 transition-[background-color,border-color,box-shadow] duration-300 ${
            overLight
              ? "border-[#667083]/80 bg-[#515865]/95 shadow-[0_18px_48px_rgba(30,35,51,.25)] backdrop-blur-xl"
              : scrolled
                ? "border-[#4a5469]/80 bg-[#252b37]/95 shadow-[0_18px_48px_rgba(10,12,20,.28)] backdrop-blur-xl"
                : "border-[#465169]/85 bg-[#232935]/96 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <img
              src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/655ce23542ba6981a253de77_adyouneed-light.svg"
              alt="ADYOUNEED Logo"
              className="h-auto w-[182px] transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-[66px] text-[16px] font-normal text-[#f1f2f5]">
            <Link
              href="#home"
              className="hover:text-white transition-colors"
            >
              Home Page
            </Link>
            <Link
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <a
              href="https://app.adyouneed.com/authentication/login"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Login
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://suite.adyouneed.com/authentication/register"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[51px] w-[151px] items-center justify-center rounded-[25px] border border-[#202532] bg-[#1b1e28] text-[16px] font-normal text-white shadow-[0_8px_20px_rgba(8,10,18,.24)] transition-colors duration-200 hover:bg-[#262b38]"
          >
            Get Started
          </a>
        </nav>
      </header>

      {/* Mobile Top Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4 bg-[#080911]/90 backdrop-blur-lg border-b border-white/10">
        <Link href="#home" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/646bbfada4cd02769bcbe828_ayn-v3.svg"
            alt="ADYOUNEED Logo"
            className="h-5 w-auto"
          />
        </Link>

        {/* 4-dot Grid Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-xl bg-[#171b26] border border-white/10 text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div className="grid grid-cols-2 gap-1 w-4 h-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          </div>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 pt-20 px-6 bg-[#080911]/95 backdrop-blur-2xl flex flex-col justify-between pb-10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6 text-lg font-medium text-slate-200 pt-6">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-white"
            >
              Home Page
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-white"
            >
              Pricing
            </Link>
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <a
              href="https://app.adyouneed.com/authentication/login"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 rounded-full text-sm font-medium text-[#00b1ff] bg-[#171b26] border border-white/10"
            >
              Login
            </a>
            <a
              href="https://suite.adyouneed.com/authentication/register"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 rounded-full text-sm font-semibold text-white bg-[#6437fc] hover:bg-[#5229db] shadow-lg shadow-[#6437fc]/30"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
