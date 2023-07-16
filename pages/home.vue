<script setup lang="ts">
definePageMeta({
  path: '/',
  alias: ['/home'],
});
</script>

<template>
  <div class="home-container">
    <HomeHero />

    <HomeLinks />
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
