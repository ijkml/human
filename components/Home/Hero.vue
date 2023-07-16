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
    :class="{ 'hero-splash': !showSub && !hasPlayedHeroAnim }"
  >
    <div>
      <div v-auto-animate="{ duration: 500 }" class="text-cont">
        <p class="tl-screamer">
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
        </p>

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
  @apply flex py-30 px-4 transition-colors-250
    ss:(px-6) sm:(px-12) md:(px-16);

  min-height: calc(100vh - ($nav-height * 1.2));

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
