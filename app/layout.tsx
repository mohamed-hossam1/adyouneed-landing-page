import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADYOUNEED - The smartest way to create the ad you need",
  description:
    "Get more results and conversion from Facebook, Instagram and LinkedIn Ads, creating and optimizing ads in minutes. Discover what easier, more powerful online advertising looks like with ADYOUNEED!",
  icons: {
    icon: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64b8eb4f24a0d8fc832a463d_32.png",
    apple: "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e/64b8eb54cef32c7425c5f3f0_256.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#080911] text-white font-sans antialiased selection:bg-[#6437fc] selection:text-white">
        {children}
      </body>
    </html>
  );
}
