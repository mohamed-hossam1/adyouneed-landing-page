"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    budget: "",
    needs: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#121520] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">We Have Received Your Request.</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Our team reviews over 100 projects a day and gets back to those we believe we can serve best. You will hear from us within the next 3 days.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#6437fc] hover:bg-[#5229db] text-white font-medium rounded-full text-sm transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/6523eaef7b6bf61fde46dcd1_ayn-signature-pop.svg"
                alt="Signature logo"
                className="h-7 w-auto"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">Work with the Best</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Fill in the details below to get a chance to work with the team behind ADYOUNEED. ADYOUNEED Signature is a complete, hands-off solution where our team manages all your campaigns, strategy, and creatives.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1c2233] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#6437fc] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1c2233] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#6437fc] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#1c2233] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#6437fc] transition-colors"
                />
                <input
                  type="text"
                  required
                  placeholder="Website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full bg-[#1c2233] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#6437fc] transition-colors"
                />
              </div>

              <div>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#1c2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-[#6437fc] transition-colors"
                >
                  <option value="">What is your monthly marketing budget?</option>
                  <option value="0 - 4 000€">0 - 4 000€</option>
                  <option value="4 000€ - 8 000€">4 000€ - 8 000€</option>
                  <option value="8 000€ - 12 000€">8 000€ - 12 000€</option>
                  <option value="12 000€ - 20 000€">12 000€ - 20 000€</option>
                  <option value="20 000€ - 25 000€">20 000€ - 25 000€</option>
                  <option value="25 000€ - 50 000€">25 000€ - 50 000€</option>
                  <option value="50 000€ +">50 000€ +</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={3}
                  required
                  placeholder="How can we help you?"
                  value={formData.needs}
                  onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                  className="w-full bg-[#1c2233] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#6437fc] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#e5b869] to-[#d89f4b] hover:opacity-95 text-black font-semibold rounded-xl text-sm transition-all shadow-lg shadow-[#e5b869]/20"
              >
                Request a Quote
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
