<script setup lang="ts">
import type { FeaturedCardProps } from '@data/work';
import { wip } from '@data/work';

const { data } = await useAsyncData('home', () => {
  return queryContent('work').only(['id', 'name']).find();
});

const featuredCards = [...((data.value ?? []) as unknown as FeaturedCardProps[]), ...wip];
</script>

<template>
  <section role="region" aria-labelledby="head-featured-work">
    <div class="sect-head">
      <h2 id="head-featured-work" class="screamer-h2">
        Featured Work
      </h2>
      <div>
        <Balancer as="p">
          Some of my <em>best</em> work.
        </Balancer>
        <p role="note" class="block-small">
          don't be mean :)
        </p>
      </div>
    </div>

    <div class="project-grid">
      <WorkCard v-for="pr in featuredCards" :key="pr.id" v-bind="pr" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.project-grid {
  @apply mt-8 grid gap-8 md:grid-cols-2;
}
</style>
