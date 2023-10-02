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
];

export { oss, wip };

export type { Project, FeaturedCardProps };
