<template>
  <li><slot /></li>
</template>

<style lang="scss" scoped>
li {
  @apply list-outside my-3.5;

  > :deep(br) {
    @apply my-1 block;
  }
}
</style>
