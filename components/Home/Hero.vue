<script setup lang="ts">
import { VTypical as TypeWriter } from 'vue-typical';
import HeroVector from '@img/svg/08.svg?component';

const screamer = 'Crafting engaging and accessible web experiences.';
const reverb = `Hey, I'm <b>ML</b>, a web developer with a strong commitment to delivering web experiences that not only captivate audiences but also perform seamlessly across devices.`;

const showSub = ref(false);

function showNext() {
  showSub.value = true;
}
</script>

<template>
  <section class="home-hero">
    <div>
      <div v-auto-animate="{ duration: 500 }" class="text-cont">
        <h1 class="screamer">
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
  @apply flex py-30 px-4;

  min-height: calc(100vh - ($nav-height * 1.2));

  > div {
    // @apply outline-(1 dashed yellow-3);

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

.screamer {
  // Manual max-widths because Balancer makes the animation janky

  @apply tracking-tighter font-light
    text-(9/1.1em ml-1/100) max-w-72;
}

.reverb {
  @apply my-6 text-(lg ml-2/80) max-w-50ch;

  :deep() {
    b {
      @apply font-normal text-ml-0/100;
    }
  }
}

@screen ss {
  .home-hero {
    @apply px-6;
  }

  .screamer {
    @apply text-10 max-w-80;
  }
}

@screen sm {
  .home-hero {
    @apply px-12;
  }

  .screamer {
    @apply text-12 max-w-95;
  }
}

@screen md {
  .home-hero {
    @apply px-16;
  }

  .screamer {
    @apply text-15 max-w-120;
  }
}

@screen lg {
  .home-hero {
    // @apply text-center;
  }

  .screamer {
    @apply text-16 max-w-125;
  }

  .reverb {
    @apply max-w-120;
  }
}
</style>
