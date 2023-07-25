import type { RouteLocationRaw } from '#vue-router';

import IconHome from '@/components/Icons/Home.vue';
import IconAbout from '@/components/Icons/About.vue';
import IconWork from '@/components/Icons/Work.vue';
import IconBlog from '@/components/Icons/Blog.vue';
import IconContact from '@/components/Icons/Contact.vue';

const linkIcons = {
  about: IconAbout,
  contact: IconContact,
  work: IconWork,
  home: IconHome,
  blog: IconBlog,
  none: 'i',
} as const;

type LinkIcon = keyof typeof linkIcons;

interface LinkFormat {
  title: string;
  link: RouteLocationRaw;
  external?: boolean;
  icon: LinkIcon;
}

interface SocialLinkFormat extends LinkFormat {
  external: true;
}

const headerLinks: LinkFormat[] = [
  { title: 'About', link: '/about', icon: 'about' },
  { title: 'Work', link: '/work', icon: 'work' },
  { title: 'Blog', link: '/blog', icon: 'blog' },
  { title: 'Contact', link: '/contact', icon: 'contact' },
];

const headerLinksWithHome: LinkFormat[] = [
  {
    title: 'Home',
    link: '/',
    icon: 'home',
  },
  ...headerLinks,
];

const socials: SocialLinkFormat[] = [
  {
    title: 'GitHub',
    link: '/github',
    external: true,
    icon: 'none',
  },
  {
    title: 'Telegram',
    link: '/telegram',
    external: true,
    icon: 'none',
  },
  {
    title: 'Twitter',
    link: '/twitter',
    external: true,
    icon: 'none',
  },
];

const bmcLink = 'https://bmc.link/ijkml';
const bioLink = 'https://bio.link/ijkml';

const contactEmail = {
  title: 'me.mlaure@gmail.com',
  link: 'mailto:me.mlaure@gmail.com',
} as const;

const footerLinks: LinkFormat[][] = [headerLinks, socials];

export {
  headerLinks,
  headerLinksWithHome,
  footerLinks,
  contactEmail,
  linkIcons,
  socials,
  bmcLink,
  bioLink,
};
