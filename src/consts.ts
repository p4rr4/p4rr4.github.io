export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'p4rr4',
  DESCRIPTION:
    'Cybersecurity Blog',
  EMAIL: 'antispam@antispam.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://p4rr4.github.io',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/tags', label: 'tags' },
  { href: '/bookmarks', label: 'bookmarks'},
  { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/p4rr4', label: 'GitHub' },
  { href: 'https://twitter.com/_p4rr4', label: 'Twitter' },
  { href: 'https://linkedin.com/in/p4rr4', label: 'LinkedIn' },
  { href: '/rss.xml', label: 'RSS' },
]