"use client";

import React, { useLayoutEffect } from "react";
import { ScrollSmoother } from "../../lib/gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const smoother = ScrollSmoother.create({
      smooth: 1.15,
      smoothTouch: 0,
      effects: false,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
