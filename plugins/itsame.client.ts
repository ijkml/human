// app:beforeMount

// Prevent Umami from tracking my prints
// -> get unique param from url, `itsame`
// -> disable Umami
export default defineNuxtPlugin({
  hooks: {
    'app:beforeMount': async function () {
      const query = useRoute().query;
      if ('itsame' in query) {
        navigateTo({ query: {} });
        window.localStorage.setItem('umami.disabled', '1');
        window.console.info(`It's-a me, Mario.`);
      }
    },
  },
});
