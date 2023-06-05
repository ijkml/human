<script setup lang="ts">
import { headerLinks } from '@data/links';
</script>

<template>
  <header class="ze-header">
    <div class="ze-inner-header">
      <div class="ze-name">ML</div>
      <nav class="ze-nav">
        <NuxtLink
          v-for="ln in headerLinks"
          :key="ln.title"
          class="link-xi"
          tabindex="0"
          exact-active-class="link-active"
          :to="ln.link"
        >
          {{ ln.title }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.ze-header {
  @apply bg-ml-1 px-4 sticky top-0;
}

.ze-inner-header {
  @apply max-w-screen-xl mx-auto flex items-center
    justify-between select-none;

  height: $nav-height;
  max-height: $nav-height;
}

.ze-name {
  @apply text-2xl;
}

.ze-nav {
  @apply text-(3.35/normal ml-4/100) mb--1 uppercase
    flex items-center gap-2 tracking-wide ss:gap-4;
}

.link-active {
  @apply text-ml-0;
}
</style>
