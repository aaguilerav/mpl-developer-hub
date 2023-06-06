import {
  changelogSection,
  documentationSection,
  recipesSection,
  referencesSection,
} from '@/shared/sections'
import { Logo } from './Logo'

export const candyMachine = {
  name: 'Candy Machine',
  headline: 'NFT launchpad',
  description: 'TODO',
  path: 'candy-machine',
  logo: Logo,
  github: 'https://github.com',
  sections: [
    {
      ...documentationSection('candy-machine'),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Getting started', href: '/candy-machine' },
            { title: 'Installation', href: '/candy-machine/installation' },
          ],
        },
      ],
    },
    {
      ...referencesSection('candy-machine'),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Getting started', href: '/candy-machine/references' },
            { title: 'Installation', href: '/candy-machine/references/installation' },
          ],
        },
      ],
    },
    { ...recipesSection('candy-machine') },
    { ...changelogSection('candy-machine') },
  ],
}
