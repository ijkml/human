<template>
  <code>
    <slot />
  </code>
</template>


<style lang="scss" scoped>
code {
  @apply font-mono mx-1px rd-1.5 py-0.2em px-0.5em inline
    text-(85% ml-2/100) leading-[1] bg-zinc-8/100;

  white-space: break-spaces;
  word-wrap: break-word;

  tbody & {
    @apply text-0.95em;
  }

  :where(h1, h2, h3, h4, h5, h6) & {
    @apply text-75%;
  }

  .novel-heading > & {
    @apply align-mid;
  }

  a > & {
    @apply text-inherit px-0.4em;
  }
}
</style>
