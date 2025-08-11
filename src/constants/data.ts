import type { FileRouteTypes } from '@/routeTree.gen'

export type NavItem = {
  title: string
  href: FileRouteTypes['to']
  matchOptions?: {
    fuzzy?: boolean
    exact?: boolean
  }
  icon?: string
}

export const NAV_ITEMS_LIST: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Posts',
    href: '/posts',
  },
]
