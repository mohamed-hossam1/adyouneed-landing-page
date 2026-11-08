"use client";

import { useEffect } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";
import { ScrollTrigger } from "../lib/gsap";

export function useScrollProgress(
  target: React.RefObject<HTMLElement | null>,
  start = "top top",
  end = "bottom bottom",
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    const element = target.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      onUpdate: (self) => progress.set(self.progress),
      onRefresh: (self) => progress.set(self.progress),
    });

    progress.set(trigger.progress);

    return () => trigger.kill();
  }, [target, start, end, progress]);

  return progress;
}

export function useSectionPin(
  section: React.RefObject<HTMLElement | null>,
  pinned: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const sectionElement = section.current;
    const pinnedElement = pinned.current;
    if (!sectionElement || !pinnedElement) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top top",
      end: "bottom bottom",
      pin: pinnedElement,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    return () => trigger.kill();
  }, [section, pinned]);
}
