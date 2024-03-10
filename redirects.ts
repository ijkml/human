import { redirects as links } from './content/data/contact.json';

function toObject<T extends { [key: string]: any }>(entries: [string, T][]) {
  return Object.fromEntries(entries) as { [key: string]: T };
}

const redirects = toObject(
  Object.entries(links).map(([path, link]) => {
    return [`/${path}`, { redirect: { to: link } }];
  }),
);

export { redirects };
