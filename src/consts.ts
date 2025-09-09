import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'p4rr4',
  description:
    'Cybersecurity Blog',
  href: 'https://p4rr4.github.io',
  author: 'p4rr4',
  locale: 'en-UK',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
    { href: '/blog', label: 'blog' },
    { href: '/tags', label: 'tags' },
    { href: '/bookmarks', label: 'bookmarks'},
    { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: SocialLink[] = [
    { href: 'https://github.com/p4rr4', label: 'GitHub' },
    { href: 'https://twitter.com/_p4rr4', label: 'Twitter' },
    { href: 'https://linkedin.com/in/p4rr4', label: 'LinkedIn' },
    { href: '/rss.xml', label: 'RSS' },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
