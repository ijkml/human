<script setup lang="ts">
import { VTypical as TypeWriter } from 'vue-typical';

const screamer = 'Crafting engaging and accessible web experiences.';
const reverb = `Hey, I'm <b>ML</b>, a web developer with a strong commitment to delivering web experiences that not only captivate audiences but also perform seamlessly across devices.`;

const showSub = ref(false);

const headingEl = ref<HTMLElement | null>(null);

onMounted(() => {
  nextTick().then(() => {
    if (isElementVisible(headingEl.value) && !heroAnimationPlayed.value) {
      lockRootScroll(true);
    }
  });
});

function showNext() {
  showSub.value = true;
  heroAnimationPlayed.value = true;
  lockRootScroll(false);
}
</script>

<template>
  <section class="home-hero">
    <div v-auto-animate="{ duration: 500 }">
      <h1 ref="headingEl" class="screamer">
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
  </section>
</template>

<style scoped lang="scss">
.home-hero {
  @apply flex py-30 px-4;

  min-height: calc(100vh - ($nav-height * 1.2));

  > div {
    @apply w-full max-w-184 m-auto;
  }
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
    @apply text-14 max-w-110;
  }
}

@screen lg {
  .home-hero {
    @apply text-center;
  }

  .screamer {
    @apply text-16 max-w-125 mx-auto;
  }

  .reverb {
    @apply max-w-120 mx-auto;
  }
}
</style>
