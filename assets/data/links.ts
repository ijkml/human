import { email } from '@/content/data/contact.json';

import IconHome from '@/components/Icons/Home.server.vue';
import IconAbout from '@/components/Icons/About.server.vue';
import IconWork from '@/components/Icons/Work.server.vue';
import IconBlog from '@/components/Icons/Blog.server.vue';
import IconContact from '@/components/Icons/Contact.server.vue';

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
  title: string
  link: string
  external?: boolean
  icon: LinkIcon
  children?: string
}

interface SocialLinkFormat extends LinkFormat {
  external: true
}

const headerLinks: LinkFormat[] = [
  { title: 'Home', link: '/', icon: 'home' },
  { title: 'About', link: '/about', icon: 'about' },
  { title: 'Work', link: '/work', icon: 'work', children: 'work-all' },
  { title: 'Posts', link: '/posts', icon: 'blog', children: 'posts-all' },
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
    title: 'Telegram',
    link: '/telegram',
    external: true,
    icon: 'none',
  },
  {
    title: 'X (Twitter)',
    link: '/twitter',
    external: true,
    icon: 'none',
  },
];

const contactEmail = {
  title: email,
  link: `mailto:${email}`,
} as const;

const footerLinks: LinkFormat[][] = [
  headerLinks.slice(1, headerLinks.length - 1),
  socials,
];

export {
  headerLinks,
  footerLinks,
  contactEmail,
  linkIcons,
  socials,
};
