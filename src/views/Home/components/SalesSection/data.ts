import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration, no hassle.'),
  bodyText: t('Trade any token on MTV Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.metaviralswap.com/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'MTV', alt: t('MTV token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'DBCC', alt: t('DBCC token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('MetaViral makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.metaviralswap.com/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with MTN token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('DBCC makes our world go round.'),
  bodyText: t(
    'DBCC token is at the heart of the MetaViral ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Buy DBCC'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.metaviralswap.com/tokenomics/mtn',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/mtn/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('MTN token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
