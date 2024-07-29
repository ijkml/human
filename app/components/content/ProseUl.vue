<template>
  <ul>
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
ul {
  @apply list-(outside disc) my-6 mx-0 pl-21px;

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
