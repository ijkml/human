<template>
  <th><slot /></th>
</template>

<style lang="scss" scoped>
th {
  @apply text-(left ml-2/80) font-semibold p-4 pt-0;

  &:first-child {
    @apply pl-0;
  }
  &:last-child {
    @apply pr-0;
  }
}
</style>
