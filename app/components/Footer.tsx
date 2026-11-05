import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#080911] text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Brand Icon Spinner */}
        <div className="relative p-[1.5px] rounded-xl overflow-hidden mb-8">
          <span className="absolute inset-[-100%] border-gradient" />
          <div className="relative z-10 w-11 h-11 bg-[#121522] rounded-xl flex items-center justify-center">
            {/* Logo vector icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 35.053 19.781"
              className="fill-[#6437fc]"
            >
              <path d="M253.9,6.39a.72.72,0,0,0-.543-.23H237.969a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V6.947A.828.828,0,0,0,253.9,6.39Z" transform="translate(-219.064 -6.16)" />
              <path d="M227.831,6.39a.72.72,0,0,0-.543-.23H211.9a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V6.947A.766.766,0,0,0,227.831,6.39Z" transform="translate(-211.14 -6.16)" />
              <path d="M253.9,27.3a.72.72,0,0,0-.543-.23H237.969a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V27.857A.828.828,0,0,0,253.9,27.3Z" transform="translate(-219.064 -12.516)" />
              <path d="M227.831,27.3a.72.72,0,0,0-.543-.23H211.9a.7.7,0,0,0-.543.23.766.766,0,0,0-.216.557v3.682a.736.736,0,0,0,.216.529.7.7,0,0,0,.543.23h15.389a.72.72,0,0,0,.543-.23.736.736,0,0,0,.216-.529V27.857A.766.766,0,0,0,227.831,27.3Z" transform="translate(-211.14 -12.516)" />
              <path d="M242.7,16.79a.723.723,0,0,0-.529-.23H220.219a.786.786,0,0,0-.759.759v3.633a.751.751,0,0,0,.23.557.723.723,0,0,0,.529.23h21.953a.723.723,0,0,0,.529-.23.751.751,0,0,0,.23-.557V17.319A.723.723,0,0,0,242.7,16.79Z" transform="translate(-213.668 -9.321)" />
            </svg>
          </div>
        </div>

        {/* Footer Navigation Link Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <Link
            href="/privacy-policy"
            className="px-4 py-2 rounded-full bg-[#121522] border border-white/5 text-xs text-slate-300 hover:text-white hover:border-white/20 transition-all"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="px-4 py-2 rounded-full bg-[#121522] border border-white/5 text-xs text-slate-300 hover:text-white hover:border-white/20 transition-all"
          >
            Terms Of Service
          </Link>
          <Link
            href="#home"
            className="px-4 py-2 rounded-full bg-[#121522] border border-white/5 text-xs text-slate-300 hover:text-white hover:border-white/20 transition-all"
          >
            Home Page
          </Link>
          <Link
            href="#features"
            className="px-4 py-2 rounded-full bg-[#121522] border border-white/5 text-xs text-slate-300 hover:text-white hover:border-white/20 transition-all"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="px-4 py-2 rounded-full bg-[#121522] border border-white/5 text-xs text-slate-300 hover:text-white hover:border-white/20 transition-all"
          >
            Pricing
          </Link>
        </div>

        {/* Legal Text & Copyright */}
        <div className="space-y-1.5 text-xs text-slate-500">
          <p>ADYOUNEED, 40 Rue Des Blancs Manteaux 75004 Paris</p>
          <p>Registered S.A.S. Company in France</p>
          <p className="pt-2 text-slate-600">
            &copy; 2026 | Made with &hearts; in Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
