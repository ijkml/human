<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <h2 :id="id" class="novel-heading">
    <slot />
    <NuxtLink :href="`#${id}`" tabindex="-1" aria-hidden="true">#</NuxtLink>
  </h2>
</template>

<style scoped lang="scss">
h2 {
  @apply text-7/[1.2] mt-8 mb-4;
}
</style>
