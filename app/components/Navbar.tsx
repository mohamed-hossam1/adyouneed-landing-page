"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Glass Pill Navbar */}
      <header className="hidden lg:flex fixed top-5 left-0 right-0 z-40 justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between px-6 py-2.5 rounded-full border border-white/10 transition-all duration-300 ${
            scrolled
              ? "bg-[#0b0d17]/85 backdrop-blur-xl shadow-2xl shadow-black/60 w-[840px]"
              : "bg-[#0b0d17]/70 backdrop-blur-md w-[860px]"
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <img
              src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/655ce23542ba6981a253de77_adyouneed-light.svg"
              alt="ADYOUNEED Logo"
              className="h-6 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-7 text-sm font-medium text-slate-300">
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
            className="px-5 py-2 rounded-full text-xs font-semibold bg-[#1a1f2e] hover:bg-[#252c40] text-white border border-white/10 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-black/40"
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
