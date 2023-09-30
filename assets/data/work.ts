// this whole thing is a royal mess
// but it works... fix it later :)

interface Project {
  id: string
  live: boolean
  name: string
  details: string
  link: string
  kind: 'Personal' | 'Contract' | 'Full-time'
  period: string
  roles: string[]
  tools: string[]
  // optional
  git?: string
  credits?: { name: string; link: string }[]
}

const oss = [
  { title: 'Nuxt Umami', link: 'ijkml/nuxt-umami' },
  { title: 'Nuxt', link: 'nuxt/nuxt' },
];

const featuredProjects: Project[] = [
  {
    id: 'moi-montessori',
    live: false,
    name: 'MOI Montessori',
    details: '',
    kind: 'Contract',
    period: '2023',
    link: '',
    roles: [],
    tools: [],
  },
  {
    id: 'human-v0',
    live: false,
    name: 'Human v0',
    details: '',
    kind: 'Full-time',
    link: 'https://ijkml.vercel.app',
    period: '2015 - Present',
    roles: ['Designer', 'Developer'],
    tools: ['Vue/TS', 'Nuxt', 'Uno/Sass', 'Nuxt Studio'],
    git: 'https://github.com/ijkml/human',

  },
  {
    id: 'moi-immigration',
    live: true,
    name: 'MOI Immigration',
    details:
      'I collaborated with MOI Immigration Solutions, a Canadian Immigration Consulting firm with offices in Edmonton, Canada, and Ibadan, Nigeria. Together with their in-house team, we transitioned their website from WordPress to a modern, responsive, and user-friendly design.',
    kind: 'Contract',
    period: 'Nov 2022',
    link: 'https://www.moiimmigrationsolutions.com/',
    roles: ['Developer'],
    tools: ['Vue/TS', 'Nuxt', 'Windi/Less', 'Umami'],
  },
  {
    id: 'voe',
    live: true,
    name: 'Voe',
    details:
      'Voe is a responsive demo of Egbo Prosper\'s Voe Airport landing page (nice pun, huh?). The website features a sleek dark mode and GPT-translation in 5 languages: English, Spanish, French, Japanese, and Chinese).',
    kind: 'Personal',
    period: 'Nov 2022 - Jan 2023',
    link: 'https://voey.netlify.app/',
    roles: ['Developer'],
    tools: [
      'Vue/TS',
      'Nuxt',
      'Nuxt i18n',
      'Uno/Sass',
      'Headless UI',
      'Iconify',
    ],
    git: 'https://github.com/ijkml/Voe',
    credits: [
      {
        name: 'Egbo Prosper (Design)',
        link: 'https://www.behance.net/gallery/156009795/Voe-_-Landing-page-UI-design',
      },
    ],
  },
  {
    id: 'pennypay',
    live: true,
    name: 'PennyPay',
    details:
      'Designed and developed a pseudo-minimalist landing page for a fictional global payments and commerce company, incorporating a sleek dark mode for a modern and engaging user experience.',
    kind: 'Personal',
    period: 'Jan - Feb 2023',
    link: 'https://pennypay.netlify.app/',
    roles: ['Designer', 'Developer'],
    tools: ['Vue/TS', 'Nuxt', 'Uno/Sass', 'Headless UI', 'Iconify'],
    git: 'https://github.com/ijkml/PennyPay',
  },
];

type FeaturedCardProps = Pick<Project, 'id' | 'name' | 'live'>;

const featuredCards = featuredProjects
  .map(({ name, live, id }) => ({
    id,
    name,
    live,
  }))
  // sort by "live", put live projects first
  .sort(({ live: l1 }, { live: l2 }) => l1 === l2 ? 0 : l1 ? -1 : 1) satisfies FeaturedCardProps[];

const publicWork = featuredProjects.filter(p => p.live).map(p => p.id);

export { oss, featuredProjects, featuredCards, publicWork };

export type { Project, FeaturedCardProps };
