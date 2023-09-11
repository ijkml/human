<script setup lang="ts">
import { headerLinks, linkIcons } from '@data/links';
</script>

<template>
  <nav aria-label="Bottom navigation" class="sticky-bottom">
    <NuxtLink
      v-for="ln in headerLinks"
      :key="ln.title"
      class="link-icon"
      :to="ln.link"
      :aria-label="ln.title"
      prefetch
      exact-active-class="active-link"
    >
      <component :is="linkIcons[ln.icon]" aria-hidden="true" />
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.sticky-bottom {
  @apply sticky bottom-0 p-1 w-full bg-ml-8/90
    backdrop-blur-4 z-13 border-t-(1 solid ml-5/30);

  height: $nav-height-inner;
  max-height: $nav-height-inner;

  @apply flex items-center justify-around gap-4 ss500:(hidden);
}

.link-icon {
  @apply h-full bg-blue-9x flex-grow flex items-center
    justify-center transition;

  & > svg {
    @apply h-auto w-5.5 max-h-full transition-inherit;
  }

  &:where(:hover, :focus-visible, .active-link) {
    @apply text-ml-0/100;
  }
}
</style>
