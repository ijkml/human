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
    justify-between mx-auto px-4 transition-inherit;

  height: $nav-height;
  max-height: $nav-height;

  @apply backdrop-blur-4 w-92% rd-md mt-1
    bg-(ml-8 op-0) sm:(mt-2 w-90%);

  .contrast & {
    @apply bg-op-80;
  }
}

.ze-logo {
  @apply transition-all-250 outline-none
    decoration-none text-ml-3/100;

  > svg {
    // alt logo color: #6f1f27
    @apply h-8 transition-inherit pointer-events-none;
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
