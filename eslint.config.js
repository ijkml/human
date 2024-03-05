import antfu from '@antfu/eslint-config';

export default antfu({
  formatters: { css: true },
  stylistic: {
    semi: true,
    overrides: {
      // curly
    },
  },
});
