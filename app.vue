<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · ML` : 'ML';
  },
});
</script>

<template>
  <LayoutWrapper>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </LayoutWrapper>
</template>
