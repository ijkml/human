const links = {
  github: 'https://github.com/ijkml/',
  telegram: 'https://t.me/ijk_ml',
  twitter: 'https://twitter.com/ijk_ml',
};

// '/github': { redirect: { to: 'https://github.com/ijkml/' } },
const redirects = Object.fromEntries(
  Object.entries(links).map(([path, link]) => {
    return [[`/${path}`], { redirect: { to: link } }];
  }),
);

export { redirects };
