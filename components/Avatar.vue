<script setup lang="ts">
import Avatar from '@img/svg/avatar.svg?component';
</script>

<template>
  <Avatar class="avatar" height="250" aria-hidden="true" />
</template>

<style scoped lang="scss">
:where(.avatar) {
  @apply transition-all-350;

  --stare: #ff0;
  --eyes: theme('colors.ml.0');
  --body: theme('colors.ml.6');

  fill: var(--body);

  :deep() {
    path {
      @apply transition-inherit;
    }

    .eyes {
      fill: var(--eyes);
    }

    path:hover + .eyes,
    .eyes:hover {
      fill: var(--stare);
    }
  }
}
</style>
