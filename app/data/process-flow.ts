export const CDN = "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e";

export type Platform = {
  name: string;
  icon: string;
  select?: boolean;
};

export type ProcessItem = {
  label: string;
  icon: string;
};

export const PLATFORM_COLUMNS: (Platform | null)[][] = [
  [
    { name: "Meta", icon: "6474c8161e87c6abc3dba577_select-a-platform-1.svg", select: true },
    { name: "LinkedIn", icon: "6474c816f2545c98933ae1b2_select-a-platform-2.svg", select: true },
    { name: "Spotify", icon: "6474c817476077e17c9443bc_select-a-platform-3.svg" },
    null,
  ],
  [
    { name: "Google", icon: "6474c8173a9ba2d9e2850525_select-a-platform-4.svg", select: true },
    { name: "TikTok", icon: "64afd18d1a3105ba087e594a_TIKTOK.svg" },
    { name: "Pinterest Ads", icon: "6474c8174b2780cdcbc1e979_select-a-platform-6.svg" },
    null,
  ],
  [
    { name: "Bing Ads", icon: "6474c8171eeb231dac07f6ca_select-a-platform-7.svg", select: true },
    { name: "Twitter", icon: "6474c8173375044a6d492621_select-a-platform-8.svg" },
    { name: "Display Networks", icon: "6474c817fc70e96d0a846d05_select-a-platform-9.svg" },
    null,
  ],
];

export const OBJECTIVES: ProcessItem[] = [
  { label: "Conversions on my website", icon: "6474ccbacb8c5f94d80f193a_objective-1.svg" },
  { label: "Traffic to my website", icon: "6474ccba71ac3e2d252ab774_objective-2.svg" },
  { label: "Likes and Comments on my posts", icon: "6474ccbaa492e20907578d20_objective-3.svg" },
];

export const AD_TYPES_LEFT: ProcessItem[] = [
  { label: "Dynamic Creative Ads", icon: "6474ccbacb8c5f94d80f193a_objective-1.svg" },
  { label: "Carousel", icon: "6474ccba71ac3e2d252ab774_objective-2.svg" },
  { label: "Existing Post", icon: "6475096e78d8cf253979c483_step-4-3.svg" },
];

export const AD_TYPES_RIGHT: ProcessItem[] = [
  { label: "Performance Max Ads", icon: "6475096e94e6d473cb9cbf42_step-4-4.svg" },
  { label: "Search Ads", icon: "6474ccbacb8c5f94d80f193a_objective-1.svg" },
  { label: "Single Image / Video", icon: "6474ccbacb8c5f94d80f193a_objective-1.svg" },
];
