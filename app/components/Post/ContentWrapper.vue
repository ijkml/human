<script setup lang="ts">
import type { PostContent } from '~/types/content';

const prop = defineProps<{
  doc: PostContent;
}>();

const title = prop.doc.title;
const { origin, pathname } = useRequestURL();

defineOgImageComponent('PostOg', {
  title,
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
  ...describe(title, prop.doc.subtitle),
});

const tweet = `${title} by @ijk_ml\n\n${origin + pathname}`;
const shareTwix = encodeURI(`https://twitter.com/intent/tweet?text=${tweet}`);

const { y: scrolledHeight } = useWindowScroll();
const { height: screenHeight } = useWindowSize();

const article = ref<HTMLElement | null>(null);
const showJump = ref(false);

watchThrottled(
  scrolledHeight,
  (nv) => { showJump.value = nv > screenHeight.value * 0.75; },
  { throttle: 150 },
);

function backToTop() {
  article.value?.scrollIntoView({
    behavior: 'smooth',
  });

  history.pushState('', title, pathname);
}
</script>

<template>
  <div class="layout-pad">
    <article ref="article">
      <header>
        <nav aria-label="Breadcrumbs">
          <ol class="breadcrumbs">
            <li>
              <NuxtLink to="/posts">
                <IconsBlog class="icon" /> Posts
              </NuxtLink>
              <Icon class="i-carbon-chevron-right divider" />
            </li>
            <li>
              <span v-text="title" />
            </li>
          </ol>
        </nav>

        <h1 class="title">
          {{ doc.title }}
        </h1>
        <p class="sub-title">
          {{ doc.subtitle }}
        </p>
        <time v-if="doc.date" :datetime="doc.date">
          {{ formatDate(doc.date, 'readable') }}
        </time>
      </header>

      <ContentRenderer :value="doc" />

      <footer>
        <NuxtLink to="/posts" class="footer-link">
          back(<Icon class="i-carbon-arrow-left icon" />)
        </NuxtLink>

        <a
          :href="shareTwix"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          tweet(<Icon class="i-carbon-logo-twitter icon" />)
        </a>

        <button
          class="to-top"
          :class="{ shown: showJump }"
          title="Scroll to top"
          @click="backToTop"
        >
          <UnoIcon class="i-carbon-arrow-up" />
        </button>
      </footer>
    </article>
  </div>
</template>

<style scoped lang="scss">
.layout-pad {
  @apply p-4 ss:(px-7) sm:(px-10) xl:(px-13)
    isolate text-wrap leading-snug;
}

article {
  @apply mx-auto mt-16 max-w-55ch sm:(mt-28) md:(max-w-65ch);
}

.breadcrumbs {
  @apply text-3.8/[1] font-500 text-ml-4/100 select-none;

  &,
  a,
  li {
    @apply inline-flex items-center outline-none transition-200;
  }

  li:not(:has(a)) {
    @apply text-amber-2/80;
  }

  a:is(:hover, :focus-visible) {
    @apply text-ml-0/100;
  }

  .icon {
    @apply size-1.1em mr-1.5;
  }

  .divider {
    @apply mx-2;
  }
}

header {
  @apply grid gap-4 mb-12;
}

.title {
  @apply mx-0 font-semibold text-(ml-2/100 8/[1.2]) sm:(text-10);
}

.sub-title {
  @apply text-lg;
}

time {
  @apply text-ml-4/100;
}

footer {
  @apply flex gap-4 justify-between my-24;

  :is(a, button) {
    @apply outline-none;
  }
}

.footer-link {
  @apply font-mono text-(4/[1] amber-2/80) bg-ml-9/100
    px-2 py-2 rd-1 inline-flex items-center transition-200;

  .icon {
    @apply size-3.8 leading-0 inline-block text-ml-2/80;
  }

  &:is(:hover, :focus-visible) {
    @apply text-ml-0/100;

    .icon {
      @apply text-amber-2/80;
    }
  }
}

.to-top {
  @apply inline-flex items-center justify-center rd-1
    fixed right-2 bottom-13.5 size-10 text-amber-2/80
    bg-ml-9/100 transition-250 ss500:(bottom-3 right-3)
    sm:(right-4 bottom-4) lg:(bottom-8 right-8);

  &:not(.shown) {
    @apply op-0 pointer-events-none;
  }

  &.shown:is(:hover, :focus-visible) {
    @apply text-ml-0/100;
  }
}
</style>
