import { FooterLinkType } from '@metaviralswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.metaviralswap.com/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.metaviralswap.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/metaviralswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.metaviralswap.com/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.metaviralswap.com/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://metaviralswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.metaviralswap.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.metaviralswap.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.metaviralswap.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.metaviralswap.com',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.metaviralswap.com/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.metaviralswap.com/help/faq',
      },
      {
        label: t('Careers'),
        href: 'https://docs.metaviralswap.com/hiring/become-a-chef',
      },
    ],
  },
]
