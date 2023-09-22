<template>
  <tbody>
    <slot />
  </tbody>
</template>

<style lang="scss" scoped>
tbody {
  &:deep() {
    tr {
      @apply b-b-(1 dashed ml-5/100);
    }

    td {
      @apply p-4;

      &:first-child {
        @apply pl-0;
      }
      &:last-child {
        @apply pr-0;
      }
    }
  }
}
</style>
