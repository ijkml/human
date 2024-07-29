<template>
  <div class="novel-table">
    <table>
      <slot />
    </table>
  </div>
</template>

<style lang="scss" scoped>
.novel-table {
  @apply of-x-auto max-w-full my-6 mx-0;
}

table {
  @apply w-full table-auto text-(sm/6 start);

  :deep(code) {
    @apply whitespace-nowrap;
  }
}
</style>
