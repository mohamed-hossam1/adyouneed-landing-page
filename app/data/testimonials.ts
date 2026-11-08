export const CDN = "https://cdn.prod.website-files.com/646bbbfbff79188751a8200e";

export type Source = "linkedin" | "g2";

export type Review = {
  name: string;
  handle: string;
  source: Source;
  title: string;
  content: string;
  avatar: string;
};

export const LINKEDIN_LOGO = `${CDN}/64ba29da4a0de66a335188f2_linkedin.svg`;
export const G2_LOGO = `${CDN}/6479feb92e0297d81e7c87ad_g2-logo.svg`;

export const LEFT_REVIEWS: Review[] = [
  {
    name: "Sasha M.",
    handle: "@sashamrejen",
    source: "linkedin",
    title: "Replaced our agency! 🤯",
    content:
      "ADYOUNEED’s automation platform completely replaced our agency. We were so impressed that we shifted our entire budget to the platform.",
    avatar: `${CDN}/64ba29db4ea0e4d87bf6e3cf_Sasha.webp`,
  },
  {
    name: "Sarah R.",
    handle: "@sarahreedy",
    source: "g2",
    title: "All your ads in one place! Great!",
    content:
      "Having AdYouNeed is helpful because it’s ALL your ads in one place, and it’s a lot more intuitive than just logging into Facebook or Google having to check each individual ad you have created. Review collected by and hosted on G2.com.",
    avatar: `${CDN}/64ba29db4ea0e4d87bf6e412_rarah.svg`,
  },
  {
    name: "Omær B.",
    handle: "@omærbay",
    source: "g2",
    title: "Finallly found ADYOUNEED!",
    content:
      "Our agency launches a ton of ads per month for agile testing. With AdYouNeed we are able to do this much faster.",
    avatar: `${CDN}/64ba29da8fe384c6dc2b96bc_omar.webp`,
  },
];

export const CENTER_REVIEWS: Review[] = [
  {
    name: "Redon G.",
    handle: "@redongjika",
    source: "g2",
    title: "This is fantastic!",
    content:
      "This is fantastic. Just signed up to test on my 2 products and definitely impressed. Easy setup and ad creation. Can’t wait to scale this.",
    avatar: `${CDN}/64ba2aac192f7a51adc0e1c3_redon2.webp`,
  },
  {
    name: "Shane B.",
    handle: "@shaneblevins",
    source: "g2",
    title: "Simple and effective!",
    content:
      "It allows you to easily manage your ads from multiple platforms (and still growing) as well as truly fine-tune your ad objectives and budgeting. It really is a great all-in-one solution. The customer service is also amazing",
    avatar: `${CDN}/64ba29db6beddb56d467769b_shane.webp`,
  },
  {
    name: "Max",
    handle: "@mxcrbn",
    source: "g2",
    title: "Literally game changing!",
    content:
      "Love the product, it’s been literally game changing for us! Also, the whole ADYOUNEED team are amazing : keep killing it guys 👏",
    avatar: `${CDN}/64ba2b3e7e77798c552610e2_max2.webp`,
  },
  {
    name: "Alecia M.",
    handle: "@aleciaminster",
    source: "g2",
    title: "Running Ads Simplified",
    content:
      "It’s super sleek easy to use interface. I have seen a few of these platforms and non has come close to the simplisicty that’s in adyouneed. All in all I love the support and training.If this is where they start then there’s only great thing instore ahead for this company.",
    avatar: `${CDN}/64ba29da4ea0e4d87bf6e39e_alecia.webp`,
  },
  {
    name: "Michael D.",
    handle: "@michaeldigiovanni",
    source: "g2",
    title: "Incredible User Experience and Support",
    content:
      "Organisations that don’t use ADYOUNEED are really missing out on this expert knowledge!",
    avatar: `${CDN}/64ba29da8fe384c6dc2b968d_michael.webp`,
  },
];

export const RIGHT_REVIEWS: Review[] = [
  {
    name: "Ifoma P.",
    handle: "@ifomapierre",
    source: "g2",
    title: "A breath of fresh air",
    content:
      "It’s Super sleek easy to use interface. I have seen a few of these platforms and non has come close to the simplisicty that’s in ADYOUNEED.",
    avatar: `${CDN}/64ba29daa6e0ed80048c8182_ifoma.webp`,
  },
  {
    name: "Elodie B.",
    handle: "@elodiebonnamy",
    source: "linkedin",
    title: "Our agency’s secret weapon!",
    content:
      "We’ve found our agency’s secret weapon. By automating tasks, we achieve better results, take on more clients, and reduce our workload. It’s a game-changer!",
    avatar: `${CDN}/64ba29dcb03f44e6bd4f73b9_elodie.webp`,
  },
  {
    name: "Patricia A.",
    handle: "@patriciaanaya",
    source: "g2",
    title: "Newbie to expert in a week",
    content:
      "The truth is, I always hired this ad creation service, now I can not believe that without knowing anything I can create my own campaigns in a short time and on several platforms at the same time, really impressed",
    avatar: `${CDN}/64ba29db3b619fe50e21f851_patricia.webp`,
  },
];
