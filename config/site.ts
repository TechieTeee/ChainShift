// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  previewImg: string
  localeDefault: string
  links: {
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = 'https://chainshift.vercel.app'

export const siteConfig: SiteConfig = {
  name: 'ChainShift',
  title: 'ChainShift: A Paradigm Shift in Supply Chain Payments',
  emoji: '🔗',
  description: 'ChainShift: A Paradigm Shift in Supply Chain Payments',
  previewImg: `${SITE_CANONICAL}/preview.png`,
  localeDefault: 'en',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com/TechieTeee/ChainShift',
  },
}
