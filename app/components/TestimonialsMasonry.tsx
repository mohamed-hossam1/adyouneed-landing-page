"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import {
  CDN,
  CENTER_REVIEWS,
  G2_LOGO,
  LEFT_REVIEWS,
  LINKEDIN_LOGO,
  RIGHT_REVIEWS,
  type Review,
} from "../data/testimonials";

type CardProps = {
  review: Review;
  className?: string;
  align?: "left" | "right";
};

function ReviewCard({ review, className = "", align }: CardProps) {
  const logo = review.source === "linkedin" ? LINKEDIN_LOGO : G2_LOGO;
  return (
    <article
      data-reveal
      className={`testimonial-card-reveal relative w-full shrink-0 overflow-hidden rounded-[24.8438px] border border-[rgba(66,81,107,0.4)] bg-[radial-gradient(circle_at_10%_10%,rgba(66,81,107,0.4),rgba(47,58,77,0.4))] ${
        align === "left" ? "xl:mr-auto" : align === "right" ? "xl:ml-auto" : ""
      } ${className}`}
    >
      <div className="flex items-start justify-between p-[26.4338px]">
        <div className="flex items-center gap-[11.925px]">
          <img
            src={review.avatar}
            alt={review.name}
            loading="lazy"
            className="h-[50.9px] w-[50.9px] rounded-full object-cover"
          />
          <div>
            <div className="text-[19.875px] font-semibold leading-[21.8625px] text-white">
              {review.name}
            </div>
            <div className="text-[15.9px] leading-[20px] text-[#bdc5e6]">
              {review.handle}
            </div>
          </div>
        </div>
        <img
          src={logo}
          alt={review.source === "linkedin" ? "Linkedin Logo" : "G2 Logo"}
          loading="lazy"
          className="h-[50.9px] w-auto shrink-0"
        />
      </div>

      <div className="px-[19.08px] pb-[31.8px] pl-[31.8px] pt-[23.85px]">
        <div className="text-[19.875px] font-semibold leading-[21.8625px] tracking-[-0.01em] text-white">
          {review.title}
        </div>
        <div className="h-[15.9px]" />
        <p className="text-[16.695px] leading-[25.0425px] text-[#bdc5e6]">
          {review.content}
        </p>
      </div>
    </article>
  );
}

export default function TestimonialsMasonry() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    if (!section || !leftCol || !rightCol) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px) and (prefers-reduced-motion: no-preference)", () => {
      let sectionHeight = section.offsetHeight;

      const update = () => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, (vh * 1.07 - rect.top) / (vh + sectionHeight)),
        );
        const eased = 1 - Math.pow(1 - progress, 2);
        const em = window.innerWidth / 120;
        leftCol.style.transform = `translate3d(0, ${(5 - 12 * eased) * em}px, 0)`;
        rightCol.style.transform = `translate3d(0, ${(-7 + 12 * eased) * em}px, 0)`;
      };

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: update,
        onRefresh: () => {
          sectionHeight = section.offsetHeight;
          update();
        },
      });

      update();

      return () => {
        trigger.kill();
        leftCol.style.transform = "";
        rightCol.style.transform = "";
      };
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent text-white"
    >
      <div className="mx-auto w-full px-6 md:px-12 xl:px-[200.737px]">
        <div className="text-center">
          <h2 className="text-balance text-[42px] font-medium leading-[1.1] tracking-[-0.01em] sm:text-[56px] md:text-[64px] xl:text-[79.5px] xl:leading-[87.45px]">
            Our clients love us!
          </h2>
          <p className="mx-auto mt-[23.85px] max-w-[784.3px] text-[18px] leading-[1.5] text-[#bdc5e6] xl:text-[21.8625px] xl:leading-[32.7938px]">
            Simplified ad creation, AI-first approach and affordable pricing -
            just a few things our clients love!
          </p>
          <div className="mt-[23.85px] flex justify-center">
            <a
              href="http://suite.adyouneed.com"
              className="relative inline-flex items-center justify-center rounded-full border border-[#6437fc]/30 bg-[#1b1d30] px-8 py-[18px] text-[15px] font-medium text-white shadow-[0_18px_45px_-12px_rgba(100,55,252,0.55)] transition hover:border-[#7b5cff] xl:px-[45.1659px] xl:py-[23.9245px] xl:text-[17.8875px]"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
        <div className="h-[31.8px]" />
      </div>

      <div className="relative z-10 mt-12 flex flex-col gap-[29.8125px] px-6 md:px-12 xl:-mt-[174.9px] xl:flex-row xl:items-stretch xl:justify-between xl:gap-0 xl:px-[49.6875px]">
        <div
          ref={leftColRef}
          data-testimonials-column="left"
          className="flex w-full flex-col gap-[29.8125px] xl:w-[397.5px] xl:items-end"
        >
          {LEFT_REVIEWS.map((review, idx) => (
            <ReviewCard
              key={review.name}
              review={review}
              align="right"
              className={idx === 0 ? "xl:w-[298.1px]" : "xl:w-[397.5px]"}
            />
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-x-[29.8125px] gap-y-[34.98px] sm:grid-cols-2 xl:w-[954px] xl:grid-cols-6 xl:content-center xl:pt-[63.6px]">
          <ReviewCard
            review={CENTER_REVIEWS[0]}
            className="sm:col-span-1 xl:col-span-2 xl:w-[298.1px] xl:self-end"
          />
          <ReviewCard
            review={CENTER_REVIEWS[1]}
            className="sm:col-span-1 xl:col-span-2 xl:w-[298.1px] xl:self-end"
          />
          <ReviewCard
            review={CENTER_REVIEWS[2]}
            className="sm:col-span-1 xl:col-span-2 xl:w-[298.1px] xl:self-end"
          />
          <ReviewCard
            review={CENTER_REVIEWS[3]}
            className="sm:col-span-2 xl:col-span-3"
          />
          <ReviewCard
            review={CENTER_REVIEWS[4]}
            className="sm:col-span-2 xl:col-span-3"
          />
        </div>

        <div
          ref={rightColRef}
          data-testimonials-column="right"
          className="flex w-full flex-col gap-[29.8125px] xl:w-[397.5px] xl:items-start"
        >
          {RIGHT_REVIEWS.map((review, idx) => (
            <ReviewCard
              key={review.name}
              review={review}
              align="left"
              className={idx === 0 ? "xl:w-[298.1px]" : "xl:w-[397.5px]"}
            />
          ))}
        </div>
      </div>

      <img
        src={`${CDN}/6479fe71499f9e90e810f014_testimonials-bg.svg`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute left-0 top-[79.5px] z-0 w-full"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[549.5px] bg-[linear-gradient(to_top,#171926,rgba(23,25,38,0.8)_79%,rgba(23,25,38,0))]" />
    </section>
  );
}
