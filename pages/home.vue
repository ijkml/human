<script setup lang="ts">
import { startSplash, status } from '@/helpers/splash';

definePageMeta({
  path: '/',
  alias: ['/home'],
});

useHead({
  title: 'Home',
  meta: [
    // { name: 'description', content: '' }
    { name: 'theme-color', content: '#0a090b' },
  ],
});

startSplash();

const reverb = `Hey, I'm <b>ML</b>, a dedicated front-end developer
  and open-source enthusiast. I like to build simple and usable websites.`;
</script>

<template>
  <section class="home-hero" role="region" aria-labelledby="hero-head-h1">
    <div>
      <div class="text-cont">
        <h1 id="hero-head-h1" class="screamer-h1">
          <HomeTypeWriter />
        </h1>

        <ClientOnly>
          <Transition name="slide-fade">
            <div v-if="status.showText" class="reverb">
              <Balancer as="p">
                <span v-html="reverb" />
              </Balancer>

              <Available class="mt-3" />
            </div>
          </Transition>

          <template #fallback>
            <div class="reverb" data-fallback>
              <p v-html="reverb" />

              <Available class="mt-3" />
            </div>
          </template>
        </ClientOnly>
      </div>

      <ClientOnly>
        <Transition name="slide-fade">
          <HomeLinks v-if="status.showLinks" />
        </Transition>

        <template #fallback>
          <HomeLinks data-fallback />
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-hero {
  @apply transition-all-250 px-4 ss:(px-6)
    sm:(px-12) md:(px-16) lg:(bg-fixed);

  background: theme('colors.ml.9') url('@img/svg/bg-1.svg') center / cover
    no-repeat;
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
    @apply mx-auto w-full max-w-screen-lg grid
      items-start gap-8 mt-24 lg:(grid-cols-5);
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
  @apply w-full mx-auto transition-all-500 md:(mx-0) lg:(col-span-3);

  > * {
    @apply transition-inherit;
  }
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

.slide-fade-enter-active {
  transition: all 500ms ease-out;
}

.slide-fade-leave-active {
  transition: all 500ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply op-0 translate-y-25%;
}
</style>
