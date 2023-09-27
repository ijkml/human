import antfu from '@antfu/eslint-config';

export default antfu(
  {},
  {
    rules: {
      'style/semi': ['error', 'always'],
      'style/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    },
  },
);
