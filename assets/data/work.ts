interface Project {
  // !! sync with schema
  id: string
  name: string
  details: string
  link: string
  kind: 'Personal' | 'Contract' | 'Full-time'
  period: string
  roles: string[]
  tools: string[]
  wip?: boolean
  git?: string
  credits?: { name: string; link: string }[]
}

type FeaturedCardProps = Pick<Project, 'id' | 'name' | 'wip'>;

type WIP = FeaturedCardProps & {
  wip: true
};

const oss = [
  { title: 'Nuxt Umami', link: 'ijkml/nuxt-umami' },
  { title: 'Nuxt', link: 'nuxt/nuxt' },
];

const wip: WIP[] = [
  {
    id: 'moi-montessori',
    wip: true,
    name: 'MOI Montessori',
  },
  {
    id: 'human-v0',
    wip: true,
    name: 'Human v0',
    // details: '',
    // kind: 'Full-time',
    // link: 'https://ijkml.vercel.app',
    // period: '2015 - Present',
    // roles: ['Designer', 'Developer'],
    // tools: ['Vue/TS', 'Nuxt', 'Uno/Sass', 'Nuxt Studio'],
    // git: 'https://github.com/ijkml/human',
  },
];

export { oss, wip };

export type { Project, FeaturedCardProps };
