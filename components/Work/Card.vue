<script setup lang="ts">
import type { FeaturedCardProps } from '@data/work';

const props = defineProps<FeaturedCardProps>();

const { wip, id, name } = toRefs(props);

const link = !wip.value ? `/work/${id.value}` : undefined;
const src = `/img/projects/${!wip.value ? `${id.value}.webp` : 'soon.svg'}`;

function viewProject() {
  if (link) {
    navigateTo(link);
  }
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
.project-info {
  @apply text-ml-2/75 z-1 w-full h-full
    grid px-6 py-3 content-end;
}

.project-img {
  @apply w-full h-full object-(cover center);

  mask-image: linear-gradient(
    to bottom,
    hsl(0deg 0% 0%),
    hsl(0deg 0% 0% / 9%) 75%,
    hsl(0deg 0% 0% / 2%)
  );
}

.project-card {
  @apply bg-ml-9/100 of-hidden gap-0 grid
    rd-lg outline-none transition-300;

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

.project-head {
  @apply text-5 sm:(text-6);
}
</style>
