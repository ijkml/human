import type { RouteLocationRaw } from '#vue-router';

import IconCode from '@/components/Icons/Code.vue';
import IconCall from '@/components/Icons/Call.vue';
import IconMe from '@/components/Icons/Me.vue';

const linkIcons = {
  about: IconMe,
  work: IconCode,
  contact: IconCall,
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
  { title: 'Contact', link: '/contact', icon: 'contact' },
];

const socials: SocialLinkFormat[] = [
  {
    title: 'GitHub',
    link: '/github',
    external: true,
    icon: 'none',
  },
  {
    title: 'Twitter',
    link: '/twitter',
    external: true,
    icon: 'none',
  },
  {
    title: 'Telegram',
    link: '/telegram',
    external: true,
    icon: 'none',
  },
];

const contactEmail = {
  title: 'me.mlaure@gmail.com',
  link: 'mailto:me.mlaure@gmail.com',
};

const footerLinks: LinkFormat[][] = [headerLinks, socials];

export { headerLinks, footerLinks, contactEmail, linkIcons };
