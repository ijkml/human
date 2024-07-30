<script setup lang="ts">
import bg from '@img/bg-2.webp';
import { split } from '~/helpers/split-text';

definePageMeta({
  path: '/',
  alias: ['/home', '/ml'],
});

useHead({
  title: 'Software Developer',
  meta: [
    {
      name: 'description',
      content: `Software developer & open-source enthusiast building beautiful, functional web experiences. Let's work together!`,
    },
    { name: 'theme-color', content: '#0a090b' },
  ],
});

defineOgImageComponent('PageOg');

const screamer = ref('I craft performant and accessible web experiences.');
const links = [
  { text: 'Get in touch', to: '/contact' },
  { text: 'My work', to: '/work' },
  { text: 'Introducing me', to: '/about' },
];
const [h1Chunks, h1ChunkCount] = split(screamer);

function endSplash() {
  document.documentElement.classList.add('splashed');
}

onBeforeUnmount(endSplash);
</script>

<template>
  <section
    class="hero"
    role="region"
    aria-labelledby="hero-head"
    :style="{ '--bg': `url(${bg})` }"
  >
    <div>
      <div class="heading-wrap">
        <h1 id="hero-head">
          <span v-for="(word, index) in h1Chunks" :key="index" class="word">
            <span
              v-for="{ char, pos } in word"
              :key="pos"
              :style="{ '--pos': pos }"
              class="blur-fade-in char"
              v-text="char"
            />
          </span>
          <div class="sr-only" v-text="screamer" />
        </h1>

        <div class="blur-fade-in reverb">
          <p>
            Hi, I'm <em>Moses Laurence</em> (ijkML), a dedicated
            software developer and open-source enthusiast. I enjoy and
            excel at creating fast, intuitive, and user-centric websites.
          </p>

          <Available class="mt-3" />
        </div>
      </div>

      <div class="blur-fade-in links-container" @animationend="endSplash">
        <NuxtLink v-for="ln in links" :key="ln.to" :to="ln.to" class="hero-link">
          <div class="link-text" v-text="ln.text" />

          <div class="link-arrow">
            <UnoIcon class="i-carbon-arrow-right h-6 w-6" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  --char-count: v-bind('h1ChunkCount');
  --char-delay: 50ms;
  --anime-gap: 300ms;
  --h1-duration: 3000ms;
  --text-duration: 500ms;
  --char-duration: calc(
    var(--h1-duration) - ((var(--char-count) - 1) * var(--char-delay))
  );
  --text-delay: calc(var(--h1-duration) + var(--anime-gap));
  --links-delay: calc(
    var(--text-delay) + var(--text-duration) + var(--anime-gap)
  );

  @apply transition-all-250 pointer-events-none px-4
    min-h-(100vh 100dvh) ss:(px-6) sm:(px-12) md:(px-16);

  $overlay: hsla(0, 0%, 0%, 0.58);

  background:
    linear-gradient(to bottom right, $overlay, $overlay),
    theme('colors.ml.9') var(--bg) center bottom / cover no-repeat;
  height: auto;
  padding-top: calc(7.5rem + var(--nav-height));
  padding-bottom: 10rem;
  margin-top: calc(-1 * var(--nav-height));
  > div {
    @apply mx-auto w-full max-w-screen-lg grid items-start
        gap-8 mt-24 pointer-events-auto lg:(grid-cols-5);
  }

  @media (width >= 1024px) {
    min-height: auto;
    height: clamp(700px, 100vh, 900px);
    height: clamp(700px, 100dvh, 900px);
  }

  @media (height >= 800px) {
    min-height: auto;
    height: auto;

    > div {
      @apply mt-50;
    }
  }
}

@keyframes blurFadeIn {
  25% {
    // we may have stumbled 'pon cool thingie here
    // try adding color, whee!
    @apply op-50;
  }

  100% {
    @apply op-100 blur-0 transform-none;
  }
}

.blur-fade-in {
  animation-name: blurFadeIn;
  animation-timing-function: cubic-bezier(0.57, 0.4, 0.55, 1.35);
  animation-fill-mode: forwards;

  .await & {
    @apply animate-paused;
  }

  .splashed & {
    @apply op-100 blur-0 transform-none;

    &:not(.char) {
      @apply animate-none;
    }
  }
}

.heading-wrap {
  @apply w-full mx-auto transition-all-500
    md:(mx-0) lg:(col-span-3);
}

h1 {
  @apply text-(9/1.1em ml-0/85) tracking-tighter font-light
    mx-0 max-w-75 ss:(text-9.8 max-w-80) sm:(text-12 max-w-95)
    md:(text-15 max-w-120) lg:(text-16 max-w-125);

  .word {
    &:where(:nth-of-type(3), :nth-of-type(4), :nth-of-type(5)) {
      @apply text-ml-2/85;
    }
  }
}

:is(.word, .char) {
  @apply inline-block whitespace-pre;
}

.char {
  @apply blur-10 op-0 mx--0.01em;
  // ALT: typing style, remove transform, use ease

  --delay: calc(var(--pos, 0) * var(--char-delay));

  transform: translate3d(0, 1em, 0);
  animation-duration: var(--char-duration);
  animation-delay: var(--delay);
  animation-timing-function: ease;

  // animation-timing-function: linear(0, -0.1, 0.75 80%, 1.1, 1);
  // linear(0, -0.1, 0.75, 1)
  // linear(0, 0.25, -0.25, 1) // wavy, whee!

  .splashed & {
    @apply animate-running;
  }
}

.reverb {
  @apply mt-6 text-(4/[1.6] ml-2/80) blur-10 op-0
    backdrop-blur-1 max-w-55ch lg:(text-4.5 max-w-45ch);

  transform: translate3d(0, 20%, 0);
  animation-duration: var(--text-duration);
  animation-delay: var(--text-delay);

  em {
    @apply not-italic font-normal text-ml-0/100;
  }
}

.links-container {
  @apply w-full max-w-100 mt-auto grid gap-4
    blur-10 op-0 lg:(col-span-2);
  --border-size: 8px;

  width: calc(100% + var(--border-size));
  margin-left: calc(-1 * var(--border-size));
  transform: translate3d(0, 25%, 0);

  animation-duration: 500ms;
  animation-delay: var(--links-delay);
}

.link-arrow {
  @apply transition-inherit transform
    preserve-3d backface-hidden;
}

.hero-link {
  @apply flex items-center justify-between px-4 py-3.5 rd-lg
    border-ml-5/50 cursor-pointer transition-300 select-none
    outline-none bg-ml-8/100 text-4/none transform-gpu
    b-0 b-l-width-[var(--border-size)] md:(py-5 text-4.5);

  &:is(:hover, :focus-visible) {
    @apply bg-ml-7/100 border-ml-0/50 text-ml-2/90 scale-103;

    .link-arrow {
      @apply text-ml-0/90 rotate--45;
    }
  }
}
</style>
