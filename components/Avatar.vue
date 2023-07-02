<script setup lang="ts">
import Avatar from '@img/svg/avatar.svg?component';
</script>

<template>
  <Avatar class="avatar" height="250" />
</template>

<style scoped lang="scss">
:where(.avatar) {
  @apply fill-ml-6/100 transition-all-350;

  :deep() {
    path {
      @apply transition-inherit;
    }
  }

  :deep() {
    path:hover + .eyes,
    .eyes:hover {
      @apply fill-ml-0/100;
    }
  }
}
</style>
