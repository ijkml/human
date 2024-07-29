<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <h3 :id="id" class="novel-heading">
    <slot />
    <NuxtLink :href="`#${id}`" tabindex="-1" aria-hidden="true">
      #
    </NuxtLink>
  </h3>
</template>

<style scoped lang="scss">
h3 {
  @apply text-5/[1.1] mt-6 mb-2;
}
</style>
