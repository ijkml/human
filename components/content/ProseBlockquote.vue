<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="scss" scoped>
blockquote {
  @apply my-6 py-2 b-l-(4 solid ml-5/60) text-ml-3/90
    grid gap-3 max-w-50ch pl-4 ml--5 ps-6;

  quotes: none;

  &:deep() {
    :is(p, blockquote, figcaption) {
      @apply m-0;
    }

    > figcaption {
      @apply text-;

      &::before {
        @apply content-['—'] mr-1;
      }
    }
  }
}
</style>
