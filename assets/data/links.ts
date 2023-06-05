import type { RouteLocationRaw } from '#vue-router';

interface LinkFormat {
  title: string;
  link: RouteLocationRaw;
  external?: boolean;
}

interface SocialLinkFormat extends LinkFormat {
  external: true;
}

const headerLinks: LinkFormat[] = [
  // { title: 'About', link: '/about' },
  { title: 'About', link: '/' },
  { title: 'Work', link: '/work' },
  { title: 'Contact', link: '/contact' },
];

const socials: SocialLinkFormat[] = [
  {
    title: 'GitHub',
    link: '/github',
    external: true,
  },
  {
    title: 'Twitter',
    link: '/twitter',
    external: true,
  },
  {
    title: 'Telegram',
    link: '/telegram',
    external: true,
  },
];

const contactEmail = {
  title: 'me.mlaure@gmail.com',
  link: 'mailto:me.mlaure@gmail.com',
};

const footerLinks: LinkFormat[][] = [headerLinks, socials];

export { headerLinks, footerLinks, contactEmail };
