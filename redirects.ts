import { redirects as links } from './content/data/contact.json';

// '/github': { redirect: { to: 'https://github.com/ijkml/' } },
const redirects = Object.fromEntries(
  Object.entries(links).map(([path, link]) => {
    return [[`/${path}`], { redirect: { to: link } }];
  }),
);

export { redirects };
