# ADYOUNEED recreation design system

## Reference and capture context

- Primary source: https://www.adyouneed.com/
- Motion source of truth: `/home/mohamed/Videos/Screencasts/Screencast From 2026-11-05 08-22-55.mp4`
- Reference viewport: 1908 × 936, 64.75 seconds.
- Live page captured on 2026-11-05 with a 1908 × 936 full-page Firecrawl capture and a browser-level visual inspection.
- The implementation uses the original public ADYOUNEED artwork exposed by the live page rather than unrelated substitute imagery.

## Visual tokens

Extracted values from the live page:

- Font family: Inter, sans-serif.
- Dark canvas: `#171926`; deepest surface: `#080911`; raised dark surface: `#1b1d30`.
- Light feature canvas: pale lavender `#eef0ff` (visually sampled from the screencast; the live capture varies slightly by section).
- Primary accent: `#6437fc`.
- Primary text: `#ffffff`; light-mode heading: `#111321`; muted copy: `#bdc5e6`.
- Desktop typography: H1 approximately 110px at the 1908px reference width; H2 approximately 80px; body copy approximately 22px in large presentation moments.
- Primary pill radius: approximately 33px; compact controls use 9–16px radii; large scene panels use 38–52px radii.

## Layout and section order

1. Fixed glass navigation, centered at roughly 1000px wide.
2. Dark hero with radiating line artwork and opposing text/dashboard parallax.
3. Dark dashboard takeover with outlined “Create an ad” art and platform marquees.
4. Pale-lavender rounded feature surface: bento grid, Instant Ads, Infinite Reach, Product Hunt proof.
5. Sticky five-step ad-creation sequence with layered cards.
6. AdCreative.ai recommendation and large dashboard showcase.
7. Dark pricing table with discount column and three plans.
8. Irregular client-review field.
9. Outlined “Time to start” art, gradient CTA panel, perspective dashboard, restrained footer.

## Motion model

- Navigation remains fixed and gains opacity/blur after the first few pixels of scroll.
- Hero copy, credibility block, background rays, and dashboard use independent scroll transforms. Copy exits fastest; the dashboard takes over before leaving upward.
- The light feature surface enters as a rounded panel rather than as an abrupt color switch.
- The workflow section uses a single continuous sticky scroll timeline. Each card rises into the same frame, settles, then moves upward/back as the next card takes focus. Reverse scroll reverses every state.
- The final CTA dashboard uses a scroll-linked `perspective`/`rotateX`/translate composition and remains clipped by the gradient panel.
- Reduced-motion preferences collapse large translations while preserving layout and content.

## Component patterns

- Glass navigation: translucent charcoal, 1px low-opacity border, subtle blur, dark CTA capsule.
- Light cards: white/lavender surfaces, faint gray-violet borders, minimal shadow.
- Dark cards: `#171b26`–`#25283a`, 1px white/8% borders, soft purple ambient glow.
- Product imagery: large, clipped, rounded, and treated as part of the layout rather than a detached illustration.
- Buttons: compact pill geometry, low-amplitude hover lift/glow, no bounce or elastic motion.

## Responsive guidance

- Desktop is the fidelity target.
- Below 1024px, reduce heading size, allow the workflow cards to simplify internally, and keep the same visual order.
- Below 640px, use a compact mobile navigation drawer, single-column feature cards, and a shorter but still scroll-linked hero/workflow timeline.

## Known approximations

- The source Webflow page does not expose its animation timeline as structured data; scroll distances and easing are reconstructed from adjacent screencast frames.
- Some interface controls are rebuilt as semantic HTML while the large product screenshots and branded artwork use the original public assets.
