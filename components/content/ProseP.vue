<template>
  <p><slot /></p>
</template>

<style lang="scss" scoped>
p {
  @apply my-6;

  :deep(br) {
    @apply block content-[''] m-0 mt-3;
  }
}
</style>
