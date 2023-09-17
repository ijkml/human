<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <h1 :id="id" class="novel-heading">
    <slot />
    <NuxtLink :href="`#${id}`" tabindex="-1" aria-hidden="true">#</NuxtLink>
  </h1>
</template>

<style scoped lang="scss">
h1 {
  @apply block text-9/[1.1] mt-0 mb-4;
}
</style>
