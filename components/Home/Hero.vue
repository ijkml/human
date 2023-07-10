<script setup lang="ts">
import { VTypical as TypeWriter } from 'vue-typical';
import HeroVector from '@img/svg/08.svg?component';

const screamer = 'Crafting engaging and accessible web experiences.';
const reverb = `Hey, I'm <b>ML</b>, a web developer with a strong
  commitment to delivering web experiences that not only captivate
  audiences but also perform seamlessly across devices.`;

const showSub = ref(false);

function showNext() {
  showSub.value = true;
}
</script>

<template>
  <section class="home-hero">
    <div>
      <div v-auto-animate="{ duration: 500 }" class="text-cont">
        <h1 class="tl-screamer">
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
        <HeroVector v-if="showSub" class="vector-img" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-hero {
  @apply flex py-30 px-4 ss:(px-6) sm:(px-12) md:(px-16);

  min-height: calc(100vh - ($nav-height * 1.2));

  > div {
    @apply m-auto w-full max-w-screen-xl
      lg:(flex justify-around items-center);
  }
}

.vector-cont {
  @apply hidden lg:(block shrink-0 w-230px) xl:(w-300px);
}

.vector-img {
  @apply w-full;
}

.text-cont {
  @apply w-full max-w-184 mx-auto md:(mx-0);
}

.reverb {
  @apply my-6 text-(lg ml-2/80) max-w-50ch lg:(max-w-120);

  :deep() {
    b {
      @apply font-normal text-ml-0/100;
    }
  }
}
</style>
