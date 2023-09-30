<template>
  <span class="chip"><slot /></span>
</template>

<style scoped lang="scss">
.chip {
  @apply inline-flex items-center text-2.8/0
    border-(1 ml-5/33) px-2.25 h-6 uppercase rd
    tracking-wide bg-ml-6/100 font-(mono medium);
}
</style>
