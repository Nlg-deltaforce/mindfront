import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.metaviralswap.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/metaviralswap",
      },
      {
        label: "Community",
        href: "https://docs.metaviralswap.com/contact-us/telegram",
      },
      {
        label: "MTN",
        href: "https://docs.metaviralswap.com/tokenomics/mtn",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://metaviralswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.metaviralswap.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.metaviralswap.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.metaviralswap.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/metaviralswap",
      },
      {
        label: "Documentation",
        href: "https://docs.metaviralswap.com",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@metaviralswap-1/s/metaviralswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.metaviralswap.com/help/faq#is-metaviralswap-safe-has-metaviralswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.metaviralswap.com/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/profile.php?id=100085537847049"
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/Meta_Viral",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/MetaViralDNA",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/MetaViral_official",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/channel/UCE4Th8KfKLXw5okS3Lu2fMA/",
  }
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
