<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · ML` : 'ML';
  },
  meta: [
    { name: 'theme-color', content: '#161618' }, // bg-ml-7
  ],
});

const isWindowFocused = useWindowFocus();
const wrapperClass = ref('');

onMounted(() => {
  nextTick().then(() => {
    watch(isWindowFocused, (hasFocus) => {
      wrapperClass.value = hasFocus ? '' : 'await';
    });
  });
});

defineOgImageComponent('PageOg', {
  link: '/ml',
});
</script>

<template>
  <LayoutWrapper :class="wrapperClass">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </LayoutWrapper>
</template>
