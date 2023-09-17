<template>
  <code>
    <slot />
  </code>
</template>


<style lang="scss" scoped>
code {
  @apply font-mono mx-1px rd-1 py-0.2em px-0.5em
    text-(0.87em ml-2/100) leading-[1] bg-zinc-8/100;

  word-wrap: break-word;
  white-space: break-spaces;

  tbody & {
    @apply text-0.95em;
  }

  :where(h1, h2, h3, h4, h5, h6) & {
    @apply text-0.75em;
  }

  .novel-heading > & {
    @apply align-mid;
  }

  a > & {
    @apply text-inherit align-text-top;
  }

  // a:where(:hover, :focus-visible) & {}
}
</style>
