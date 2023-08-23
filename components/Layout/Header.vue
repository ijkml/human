<script setup lang="ts">
import { headerLinks } from '@data/links';
import Initials from '@img/svg/ml.svg?component';

const { y: scrolledHeight } = useWindowScroll();
const { height: screenHeight } = useWindowSize();

const classe = reactive({
  scrolled: false,
  contrast: false,
});

watchThrottled(
  scrolledHeight,
  (nv, ov) => {
    classe.contrast = nv > 300;
    classe.scrolled = nv > ov && nv > screenHeight.value;
  },
  { throttle: 150 }
);
</script>

<template>
  <header class="ze-header" :class="classe">
    <div class="ze-inner-header">
      <NuxtLink to="/" class="ze-logo">
        <Initials height="32" aria-label="ML" />
      </NuxtLink>
      <nav class="ze-nav" aria-label="Primary navigation">
        <NuxtLink
          v-for="ln in headerLinks"
          :key="ln.title"
          class="link-text link-xi"
          tabindex="0"
          exact-active-class="link-active"
          :to="ln.link"
          prefetch
        >
          {{ ln.title }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.ze-header {
  @apply static top-0 z-16 transition-all-350 w-full
    will-change-transform transform-gpu ss500:(sticky);

  &.scrolled {
    @apply ss500:(translate-y--101%);
  }
}

.ze-inner-header {
  @apply max-w-screen-xl flex items-center select-none
    justify-between transition-inherit mx-auto mt-1 px-4
      w-92% rd-md relative sm:(mt-8px w-90%);

  height: $nav-height-inner;
  max-height: $nav-height-inner;

  &::before {
    @apply content-[''] inset-0 w-full h-full rd-inherit op-0
      z--2 bg-(gradient-to-r ml-8/100) from-(ml-8/100 75%)
        to-(ml-0/25 150%) transition-inherit absolute;
  }

  .contrast &::before {
    @apply ss500:(op-100);
  }
}

.ze-logo {
  @apply transition-all-300 outline-none
    decoration-none text-ml-3/100;

  > svg {
    @apply h-8 transition-inherit pointer-events-none;
  }

  &:where(:hover, :focus-visible) {
    @apply text-ml-0;
  }
}

.ze-nav {
  @apply text-3.5/normal tracking-wide mb--1 hidden
    items-center ss500:(flex gap-4) sm:(gap-6);
}

.link-text {
  @apply text-ml-2/100;

  &:first-of-type {
    @apply hidden sm:(flex);
  }

  &:where(:hover, :focus-visible) {
    @apply text-ml-0/100;
  }

  &.link-active {
    @apply text-ml-0/100;
  }
}
</style>
