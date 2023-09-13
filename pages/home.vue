<script setup lang="ts">
import { splashLock, hasPlayedHeroAnim as splashOver } from '@/helpers/splash';

definePageMeta({
  path: '/',
  alias: ['/home'],
  documentDriven: false,
});

useHead({
  title: 'Home',
  // meta: [{ name: 'description', content: '' }],
});

splashLock(true);

const reverb = `Hey, I'm <b>ML</b>, a dedicated front-end developer and open-source enthusiast. I like to build simple and usable websites.`;
</script>

<template>
  <section
    class="home-hero"
    role="region"
    aria-labelledby="hero-head-h1"
    :class="{ 'hero-splash': !splashOver }"
  >
    <div>
      <div v-auto-animate="{ duration: 500 }" class="text-cont">
        <h1 id="hero-head-h1" class="screamer-h1">
          <HomeTypeWriter />
        </h1>

        <ClientOnly>
          <p v-if="splashOver" class="reverb">
            <Balancer v-html="reverb" />
          </p>

          <template #fallback>
            <p class="reverb" data-fallback v-html="reverb" />
          </template>
        </ClientOnly>
      </div>

      <ClientOnly>
        <HomeLinks v-if="splashOver" />

        <template #fallback>
          <HomeLinks data-fallback />
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-hero {
  @apply flex bg-ml-9/100 transition-colors-250
    py-30 px-4 ss:(px-6) sm:(px-12) md:(px-16);

  // copy-paste to no-script.css
  &:not(.hero-splash) {
    height: clamp(700px, 100vh, 900px);
    height: clamp(700px, 100dvh, 900px);

    padding-top: calc(7.5rem + var(--nav-height));
    padding-bottom: 7.5rem;
    margin-top: calc(-1 * var(--nav-height));

    @apply lt-lg:h-auto;
  }

  > div {
    @apply mx-auto w-full max-w-screen-lg grid
      items-end gap-8 lg:(grid-cols-5);
  }
}

.screamer-h1 {
  @apply mx-0;
}

.text-cont {
  @apply w-full mx-auto md:(mx-0) lg:(col-span-3);
}

.reverb {
  @apply mt-6 text-(4/[1.6] ml-2/80) max-w-50ch
    lg:(text-4.5 max-w-120);

  :deep() {
    b {
      @apply font-normal text-ml-0/100;
    }
  }
}
</style>
