<script setup lang="ts">
import type { PostContent } from '~/types/content';

const prop = defineProps<{
  doc: PostContent;
}>();

defineOgImageComponent('PostOg', {
  title: prop.doc.title,
  subtitle: prop.doc.subtitle,
});

function describe(title: string, subtitle: string) {
  const t = title.trim();
  const p = ['.', '!', '?'].includes(t.charAt(t.length - 1)) ? ' ' : ': ';

  return {
    title: t,
    description: t + p + subtitle.trim(),
  };
}

useContentHead({
  ...prop.doc,
  ...describe(prop.doc.title, prop.doc.subtitle),
});

const { y: scrolledHeight } = useWindowScroll();
const { height: screenHeight } = useWindowSize();

const showJump = ref(false);

watchThrottled(
  scrolledHeight,
  (nv) => {
    showJump.value = nv > screenHeight.value * 0.75;
  },
  { throttle: 150 },
);

const article = ref<HTMLElement | null>(null);

function backToTop() {
  history.pushState('', document.title, window.location.pathname);

  article.value?.scrollIntoView({
    behavior: 'smooth',
  });
}
</script>

<template>
  <div class="layout-pad">
    <article ref="article">
      <div class="heading">
        <h1 class="title">
          {{ doc.title }}
        </h1>
        <p class="sub-title">
          {{ doc.subtitle }}
        </p>
        <time v-if="doc.date" :datetime="doc.date">
          {{ formatDate(doc.date, 'readable') }}
        </time>
      </div>
      <div class="body">
        <ContentRenderer :value="doc" />
      </div>
      <button
        class="to-top"
        :class="{ shown: showJump }"
        title="Scroll to top"
        @click="backToTop"
      >
        <UnoIcon class="i-carbon-arrow-up" />
      </button>
    </article>
  </div>
</template>

<style scoped lang="scss">
.layout-pad {
  @apply p-4 ss:(px-7) sm:(px-10) xl:(px-13) isolate;
}

article {
  @apply mx-auto mt-16 max-w-55ch sm:(py-12) md:(max-w-65ch);
}

.heading {
  @apply grid gap-4;
}

.title {
  @apply mx-0 font-semibold text-(ml-2/100 8/[1.2]) sm:(text-10);
}

.sub-title {
  @apply text-xl;
}

time {
  @apply text-ml-4/100;
}

.to-top {
  @apply h-10 w-10 inline-flex items-center justify-center
    rd-full outline-none transition-250 right-3 bottom-13
    fixed ss500:(bottom-3);

  &:not(.shown) {
    @apply op-0 pointer-events-none;
  }

  &.shown:is(:hover, :focus-visible) {
    @apply bg-ml-9/100 text-ml-0/100;
  }
}
</style>
