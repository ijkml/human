<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · ML` : 'ML';
  },
  meta: [
    { name: 'theme-color', content: '#161618' }, // bg-ml-7
  ],
});
</script>

<template>
  <LayoutWrapper>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </LayoutWrapper>
</template>
