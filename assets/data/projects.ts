const oss = [
  { title: 'Nuxt', link: 'nuxt/nuxt' },
  { title: 'Nuxt Umami', link: 'ijkml/nuxt-umami' },
];

interface BasicProject {
  name: string;
  id: string;
  img: string;
  type: string;
  year: string;
  live: boolean;
}

const featured: BasicProject[] = [
  {
    name: 'MOI Montessori',
    id: 'moi-montessori',
    img: 'Montz.webp',
    type: 'Web Development',
    year: '2023',
    live: false,
  },
  {
    name: 'MOI Immigration',
    id: 'moi-immigration',
    img: 'MIS.webp',
    type: 'Web Development',
    year: '2022',
    live: true,
  },
  {
    name: 'PennyPay',
    id: 'pennypay',
    img: 'PennyPay.webp',
    type: 'Website Demo',
    year: '2023',
    live: true,
  },
  {
    name: 'Voe Air',
    id: 'voe-air',
    img: 'Voe.webp',
    type: 'Website Demo',
    year: '2023',
    live: true,
  },
];

export { oss, featured, BasicProject };
