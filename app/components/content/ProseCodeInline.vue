<template>
  <code><slot /></code>
</template>

<style lang="scss" scoped>
code {
  @apply text-(0.9em amber-2/80) font-mono select-all rd-1.5 mx-1px;

  white-space: break-spaces;
  word-wrap: break-word;

  &::before,
  &::after {
    content: '`';
  }

  > span {
    @apply select-all;
  }

  tbody & {
    @apply text-0.95em;
  }

  :is(h1, h2, h3, h4, h5, h6) & {
    @apply text-0.75em;
  }

  .novel-heading > & {
    @apply align-mid;
  }

  a > & {
    @apply text-inherit px-0.4em;
  }
}
</style>
