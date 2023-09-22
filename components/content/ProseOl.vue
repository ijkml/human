<template>
  <ol>
    <slot />
  </ol>
</template>

<style lang="scss" scoped>
ol {
  @apply list-(outside decimal) my-6 mx-0 pl-21px;

  > :deep(li) {
    &::marker {
      @apply text-current;
    }

    ul,
    ol {
      @apply m-0;
    }
  }
}
</style>
