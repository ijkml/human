// Fix for scrollToTop bug
export default defineNuxtPlugin({
  hooks: {
    'page:transition:finish': async function () {
      //   window?.scrollTo({ top: 8 });
      document.querySelector('[data-scroll]')?.scrollTo({ top: 8 });
    },
  },
});
