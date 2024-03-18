<script setup lang="ts">
import type { FeaturedCardProps } from '@data/work';
import { wip } from '@data/work';

const nuxtApp = useNuxtApp();

const { data, pending } = await useAsyncData('work-projects', () => {
  return queryContent('work')
    .only(['id', 'name'])
    .find();
}, {
  lazy: true,
  getCachedData: (key) => {
    return ((nuxtApp.payload.static ?? nuxtApp.payload.data) as any)[key];
  },
});

const featuredCards = computed(() => [
  ...((data.value ?? []) as unknown as FeaturedCardProps[]),
  ...wip,
]);
</script>

<template>
  <section role="region" aria-labelledby="head-featured-work">
    <div class="sect-head">
      <h2 id="head-featured-work" class="screamer-h2">
        Featured Projects
      </h2>
      <div>
        <p class="text-balance">
          Some of my <em>best</em> work.
        </p>
        <p role="note" class="block-small">
          don't be mean :)
        </p>
      </div>
    </div>

    <div class="project-grid">
      <template v-if="pending">
        <div v-for="i in 6" :key="i" role="status" class="project-card skeleton">
          <UnoIcon class="i-carbon-image icon" />
          <span class="sr-only">Loading...</span>
        </div>
      </template>
      <template v-else>
        <WorkCard v-for="pr in featuredCards" :key="pr.id" v-bind="pr" />
      </template>
    </div>
  </section>
</template>

<style scoped lang="scss">
@keyframes pulse {
  0%,
  100% {
    opacity: 0.9;
  }

  50% {
    opacity: 0.5;
  }
}

.project-grid {
  @apply mt-8 grid gap-8 md:grid-cols-2;
}

:deep() {
  .project-card {
    @apply h-60 rd-lg bg-ml-9/100 of-hidden
      gap-0 ss500:(aspect-2 h-auto);
  }
}

.skeleton {
  @apply flex items-center justify-center;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  .icon {
    @apply w-10 h-10 text-ml-4/75;
  }
}
</style>
