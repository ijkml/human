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
    classe.contrast = nv > 200;
    classe.scrolled = nv > ov && nv > screenHeight.value * 0.5;
  },
  { throttle: 150 },
);

// FIX: NuxtLink activeClass doesn't work?
const activeClass = 'link-active';
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
          :exact-active-class="activeClass"
          :class="ln.children === $route.name ? activeClass : null"
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
    w-92% rd-md relative outline-(1 solid transparent)
    sm:(mt-2 w-90%);

  height: $nav-height-inner;
  max-height: $nav-height-inner;

  &::before {
    @apply content-[''] absolute inset-0 op-0 z--2
      bg-(gradient-to-r ml-8/100) from-(ml-8/100 75%)
      to-(ml-0/25 150%) transition-inherit rd-inherit;
  }

  .contrast & {
    @apply outline-ml-6/75;

    &::before {
      @apply ss500:(op-100);
    }
  }
}

.ze-logo {
  @apply transition-all-300 outline-none
    decoration-none text-ml-3/100;

  > svg {
    @apply h-8 transition-inherit pointer-events-none;
  }

  &:is(:hover, :focus-visible) {
    @apply text-ml-0/100;
  }
}

.ze-nav {
  @apply text-3.5/snug tracking-wide hidden
    items-center ss500:(flex gap-4) sm:(gap-6);
}

.link-text {
  @apply text-ml-2/100;

  &:is(:hover, :focus-visible) {
    @apply text-ml-0/100;
  }

  &:first-of-type {
    @apply hidden sm:(flex);
  }

  &.link-active {
    @apply text-ml-0/100;
  }
}
</style>
