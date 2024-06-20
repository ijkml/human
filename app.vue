<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · ML` : 'ML';
  },
  meta: [
    { name: 'theme-color', content: '#161618' }, // bg-ml-7
  ],
});

defineOgImageComponent('PageOg', {
  link: '/ml',
});
</script>

<template>
  <LayoutWrapper>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </LayoutWrapper>
</template>
