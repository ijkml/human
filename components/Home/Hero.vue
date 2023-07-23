<script setup lang="ts">
import { VTypical as TypeWriter } from 'vue-typical';
import HeroVector from '@img/svg/08.svg?component';
import { hasPlayedHeroAnim, splashLock } from '@/helpers/splash';

splashLock(true);

const screamer = 'I craft accessible and performant web experiences.';
const reverb = `Hey, I'm <b>ML</b>, a dedicated web developer and
  open-source enthusiast. I love building performant websites, and solving
  problems.`;

const showSub = ref(false);

function showNext() {
  showSub.value = true;
  splashLock(false);
}
</script>

<template>
  <section
    class="home-hero"
    role="region"
    aria-labelledby="hero-head-h1"
    :class="{ 'hero-splash': !showSub && !hasPlayedHeroAnim }"
  >
    <div>
      <div v-auto-animate="{ duration: 500 }" class="text-cont">
        <h1 id="hero-head-h1" class="tl-screamer">
          <ClientOnly>
            <TypeWriter
              :loop="1"
              :steps="[screamer, 350, showNext]"
              wrapper="span"
            />
            <template #fallback>
              <span data-fallback v-text="screamer" />
            </template>
          </ClientOnly>
        </h1>

        <ClientOnly>
          <div v-if="showSub">
            <p class="reverb"><Balancer v-html="reverb" /></p>
            <ZeButton text="Get in touch" link="/contact" />
          </div>

          <template #fallback>
            <div data-fallback>
              <p class="reverb" v-html="reverb" />
              <ZeButton text="Get in touch" link="/contact" />
            </div>
          </template>
        </ClientOnly>
      </div>

      <div
        v-auto-animate="{ duration: 500 }"
        class="vector-cont"
        aria-hidden="true"
      >
        <ClientOnly>
          <HeroVector v-if="showSub" class="vector-img" />

          <template #fallback>
            <HeroVector class="vector-img data-fallback" />
          </template>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-hero {
  @apply flex bg-ml-8/100 transition-colors-250
    py-30 px-4 ss:(px-6) sm:(px-12) md:(px-16);

  &:not(.hero-splash) {
    height: clamp(700px, 100vh, 1000px);
    height: clamp(700px, 100dvh, 1000px);

    padding-top: calc(7.5rem + $nav-height);
    padding-bottom: 7.5rem;
    margin-top: -$nav-height;
  }

  > div {
    @apply m-auto w-full max-w-screen-lg
      lg:(flex justify-around items-center);
  }
}

.vector-cont {
  @apply hidden lg:(block shrink-0 w-230px);
}

.vector-img {
  @apply w-full;
}

.tl-screamer {
  @apply mx-0;
}

.text-cont {
  @apply w-full max-w-184 mx-auto md:(mx-0);
}

.reverb {
  @apply my-6 text-(4/[1.6] ml-2/80) max-w-50ch
    lg:(text-4.5 max-w-120);

  :deep() {
    b {
      @apply font-normal text-ml-0/100;
    }
  }
}
</style>
