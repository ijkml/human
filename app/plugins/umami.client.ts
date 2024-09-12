// testing refs
const origins = {
  wa: 'https://whatsapp.com/',
  tg: 'https://telegram.org/',
  // ... more?
};

const refs = new Set(Object.getOwnPropertyNames(origins));

export default defineNuxtPlugin({
  hooks: {
    'app:beforeMount': async function () {
      let update = false;
      const query = { ...useRoute().query };

      // https://umami.nuxt.dev/api/tips-and-faqs
      if ('itsame' in query) {
        delete query.itsame;
        window.localStorage.setItem('umami.disabled', '1');
        window.console.info(`It's-a me, Mario.`);
        update = true;
      }

      // testing refs
      if ('rfr' in query) {
        const ref = query.rfr;
        delete query.rfr;

        if (typeof ref !== 'string' || !refs.has(ref))
          return;

        query.ref = origins[ref as keyof typeof origins];
        update = true;
      }

      // push changes
      if (update)
        navigateTo({ query });
    },
  },
});
