<script setup lang="ts">
import type { FeaturedCardProps } from '@data/work';

const props = defineProps<FeaturedCardProps>();

const { live, id, name } = toRefs(props);

const link = live.value ? `/work/${id.value}` : undefined;
const src = `/img/projects/${live.value ? `${id.value}.webp` : 'soon.svg'}`;

function viewProject() {
  if (link)
    navigateTo(link);
}
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link"
    class="project-card"
    :class="link ? 'cursor-project' : 'coming-soon'"
    @click.prevent="viewProject"
  >
    <img class="project-img" :src="src" :alt="name">

    <div class="project-info">
      <h3 class="project-head" v-text="name" />
    </div>
  </component>
</template>

<style scoped lang="scss">
.project-card {
  @apply h-60 bg-ml-9/100 of-hidden gap-0 grid rd-lg
    outline-none transition-300 ss500:(aspect-2 h-auto);

  > * {
    grid-area: 1 / 1;
    transition: inherit;
  }

  &.coming-soon {
    @apply cursor-wait;
  }

  &:not(.coming-soon):where(:hover, :focus-visible) {
    .project-info {
      @apply bg-ml-0/10;
    }

    .project-img {
      @apply saturate-0;
    }
  }
}

.project-img {
  @apply w-full h-full object-(cover center);

  mask-image: linear-gradient(
    to bottom,
    hsl(0, 0%, 0%),
    hsla(0, 0%, 0%, 0.09) 75%,
    hsla(0, 0%, 0%, 0.02)
  );
}

.project-info {
  @apply text-ml-2/75 z-1 w-full h-full
    grid px-6 py-3 content-end;
}

.project-head {
  @apply text-5 sm:(text-6);
}
</style>
