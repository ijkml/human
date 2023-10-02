import antfu from '@antfu/eslint-config';

export default antfu(
  {},
  {
    rules: {
      'curly': ['error', 'all'],
      'style/semi': ['error', 'always'],
      'style/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    },
  },
);
