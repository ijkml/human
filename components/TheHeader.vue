<script setup lang="ts">
import { headerLinks, linkIcons } from '@data/links';

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
      <NuxtLink to="/" class="ze-logo" aria-label="ML">
        <TheLogo height="32" />
      </NuxtLink>
      <nav class="ze-nav">
        <NuxtLink
          v-for="ln in headerLinks"
          :key="ln.title"
          class="link-wrap link-xi"
          tabindex="0"
          exact-active-class="link-active"
          :to="ln.link"
        >
          <div class="link-icon" aria-hidden="true">
            <component :is="linkIcons[ln.icon]" />
          </div>
          <span class="link-text" v-text="ln.title" />
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.ze-header {
  @apply sticky top-0 z-16 transform-gpu w-full
    will-change-transform transition-all-350;

  &.scrolled {
    @apply translate-y--101%;
  }
}

.ze-inner-header {
  @apply max-w-screen-xl flex items-center select-none
    justify-between transition-inherit mx-auto mt-1 px-4
      w-92% rd-md relative backdrop-blur-4 sm:(mt-8px w-90%);

  height: $nav-height-inner;
  max-height: $nav-height-inner;

  &::before {
    @apply content-[''] inset-0 w-full h-full rd-inherit op-0
      z--2 bg-(gradient-to-r ml-8/100) from-(ml-8/100 75%)
        to-(ml-0/25 150%) transition-inherit absolute;
  }

  .contrast &::before {
    @apply op-100;
  }
}

.ze-logo {
  @apply transition-all-250 outline-none
    decoration-none text-ml-3/100;

  > svg {
    @apply h-6 ss500:h-8 transition-inherit pointer-events-none;
  }

  &:where(:hover, :focus-visible) {
    @apply text-ml-0;
  }
}

.ze-nav {
  @apply text-3.5/normal mb--1 flex
    items-center gap-4 tracking-wide sm:gap-6;
}

.link-active {
  @apply text-ml-0;
}

.link-wrap {
  @apply text-ml-2/100 lt-sm:bg-none;

  &:where(:hover, :focus-visible) {
    @apply text-ml-0/100;
  }

  .link-icon {
    @apply mx-1;

    &,
    & > svg {
      @apply h-auto w-5.5;
    }
  }

  .link-text {
    @apply sr-only;
  }

  @screen sm {
    .link-icon {
      @apply hidden;
    }

    .link-text {
      @apply not-sr-only;
    }
  }
}
</style>
