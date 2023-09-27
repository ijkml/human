<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <h1 :id="id" class="novel-heading">
    <slot />
    <NuxtLink :href="`#${id}`" tabindex="-1" aria-hidden="true">
      #
    </NuxtLink>
  </h1>
</template>

<style scoped lang="scss">
h1 {
  @apply text-8/[1.2] mt-0 mb-4;
}
</style>
