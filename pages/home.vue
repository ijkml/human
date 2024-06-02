<script setup lang="ts">
import bg from '@img/bg-2.webp';
import { startSplash, status } from '@/helpers/splash';

definePageMeta({
  path: '/',
  alias: ['/home', '/ml'],
});

useHead({
  title: 'Software Developer',
  meta: [
    {
      name: 'description',
      content: 'Software developer & open-source enthusiast building beautiful, functional web experiences. Let\'s work together!',
    },
    { name: 'theme-color', content: '#0a090b' },
  ],
  link: [
    { rel: 'preload', as: 'image', href: bg, tagPriority: 9 },
  ],
});

defineOgImageComponent('PageOg');

startSplash();

const reverb = `Hey, I'm <b>ML</b>, a dedicated software developer and
  open-source enthusiast with a focus on frontend development.
  I love creating fast and intuitive user-centric websites.`;
</script>

<template>
  <section
    class="home-hero"
    role="region"
    aria-labelledby="hero-head-h1"
    :style="{ '--bg': `url(${bg})` }"
  >
    <div>
      <div class="text-cont">
        <h1 id="hero-head-h1" class="screamer-h1">
          <HomeTypeWriter />
        </h1>

        <div
          class="reverb trans-init"
          :class="{ 'trans-end': status.showText }"
          data-fallback
        >
          <p v-html="reverb" />

          <Available class="mt-3" />
        </div>
      </div>

      <ClientOnly>
        <HomeLinks
          class="trans-init"
          :class="{ 'trans-end': status.showLinks }"
        />

        <template #fallback>
          <HomeLinks data-fallback />
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-hero {
  @apply transition-all-250 pointer-events-none
    px-4 ss:(px-6) sm:(px-12) md:(px-16);

  $overlay: hsla(0, 0%, 0%, 0.58);

  background:
    linear-gradient(to bottom right, $overlay, $overlay),
    theme('colors.ml.9') var(--bg) center bottom / cover no-repeat;
  height: auto;
  min-height: 100vh;
  min-height: 100dvh;

  @media (width >= 1024px) {
    min-height: auto;
    height: clamp(700px, 100vh, 900px);
    height: clamp(700px, 100dvh, 900px);
  }

  padding-top: calc(7.5rem + var(--nav-height));
  padding-bottom: 7.5rem;
  margin-top: calc(-1 * var(--nav-height));

  > div {
    @apply mx-auto w-full max-w-screen-lg grid items-start
      gap-8 mt-24 pointer-events-auto lg:(grid-cols-5);
  }

  @media (height >= 800px) {
    min-height: auto;
    height: auto;

    > div {
      @apply mt-50;
    }
  }
}

.screamer-h1 {
  @apply mx-0;
}

.text-cont {
  @apply w-full mx-auto transition-all-500
    md:(mx-0) lg:(col-span-3);

  > * {
    @apply transition-inherit;
  }
}

.reverb {
  @apply mt-6 text-(4/[1.6] ml-2/80 balance)
    backdrop-blur-2 max-w-55ch lg:(text-4.5 max-w-45ch);

  :deep() {
    b {
      @apply font-normal text-ml-0/100;
    }
  }
}

.trans-init {
  @apply transition-all-500 op-0 translate-y-25%
    pointer-events-none invisible;

  &.trans-end {
    @apply op-100 translate-y-0 visible
      pointer-events-unset;
  }
}
</style>
