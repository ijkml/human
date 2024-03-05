<script setup lang="ts">
defineProps<{
  title?: string;
  date?: string;
}>();

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
          <Balancer :ratio="0.5">
            {{ title }}
          </Balancer>
        </h1>
        <time v-if="date" :datetime="date">
          {{ formatDate(date) }}
        </time>
      </div>
      <div class="body">
        <slot />
      </div>
      <button class="to-top" :class="{ shown: showJump }" title="Scroll to top" @click="backToTop">
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
  // @apply outline-(1 dashed yellow/50);

  @apply mx-auto mt-16 max-w-55ch sm:(py-12) md:(max-w-65ch);
}

.title {
  @apply mx-0 mb-4 font-semibold text-(ml-2/100 8/[1.2]) sm:(text-10);
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

  &.shown:where(:hover, :focus-visible) {
    @apply bg-ml-9/100 text-ml-0/100;
  }
}
</style>
