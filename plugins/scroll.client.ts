// Fix for scrollToTop bug
export default defineNuxtPlugin({
  hooks: {
    //   window?.scrollTo({ top: 8 });
    'page:transition:finish': async function () {
      document.querySelector('[data-scroll]')?.scrollTo({ top: 8 });
    },
  },
});
