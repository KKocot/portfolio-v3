// Shared portrait image params — used by Hero.astro (<Image>) and
// Layout.astro (LCP preload via getImage). Keeping them in one place
// guarantees the preload srcset URLs match the rendered <img> srcset.
// Rendered widths: w-72 (288px) -> sm:w-80 (320px) -> lg:w-[380px], x2 for DPR
export const PORTRAIT_WIDTHS = [288, 320, 380, 576, 640, 760];
export const PORTRAIT_SIZES = '(min-width: 1024px) 380px, (min-width: 640px) 320px, 288px';
export const PORTRAIT_FORMAT = 'webp' as const;
export const PORTRAIT_QUALITY = 80;
