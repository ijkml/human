<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import { getTimeAgo } from '~/composables/date';

useHead({
  title: 'Blog',
  // meta: [{ name: 'description', content: '' }],
});

definePageMeta({
  alias: ['/blog'],
});

// TODO
// pagination
const query: QueryBuilderParams = {
  path: '/posts',
  sort: [{ date: 1 }],
};
</script>

<template>
  <section aria-labelledby="blog-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="blog-heading" class="screamer-h1">
        Posts
      </h1>
      <div class="reverb">
        <Balancer as="p">
          It's coming soon... I'm not sure what I'm going to write about yet,
          but I promise it will be lighthearted, engaging, and informative.
          Or at least one of those things.
        </Balancer>
      </div>
    </div>

    <nav class="content-list">
      <ContentList v-slot="{ list }" :query>
        <template v-for="article in list" :key="article._path">
          <div class="list-item">
            <ArticleTags :tags="article.tags" />

            <h2 class="blog-head">
              <NuxtLink :to="article._path">
                {{ article.title }}
              </NuxtLink>
            </h2>

            <div class="time-ago" v-text="getTimeAgo(article.date)" />
          </div>

          <hr class="hr">
        </template>
      </ContentList>
    </nav>
  </section>
</template>

<style scoped lang="scss">
.heading-wrap {
  @apply text-center mx-auto;
}

.reverb {
  @apply grid gap-2;
}

.hr {
  @apply w-75% mx-auto;
}

.content-list {
  @apply text-center mx-auto mb-8 mt-16 max-w-130 grid gap-8;

  hr:last-of-type {
    @apply hidden;
  }
}

.list-item {
  @apply grid gap-1;
}

.blog-head {
  @apply tracking-tight transition-300 my-4
    text-(ml-1/100 5/1.1em) ss:(text-6)
    sm:(text-7) md:(text-8) lg:(text-9);

  a {
    @apply transition-inherit;

    &:where(:hover, :focus-visible) {
      @apply text-ml-0/90;
    }
  }
}

.time-ago {
  @apply text-(3 ml-3/100);
}
</style>
