<script setup lang="ts">
import { getTimeAgo } from '~/composables/date';

const keys = ['_path', 'tags', 'date', 'title', 'description'] as const;

type QueryResult = Promise<Array<
  // Record<string, string> & // uncomment for looser types
  Record<(typeof keys)[number], string>
>>;

const { data } = await useAsyncData('post-list', () => {
  return queryContent('posts')
    .only(['_path', 'tags', 'date', 'title', 'description'])
    .sort({ date: -1 })
    .find() as QueryResult;
});
</script>

<template>
  <div class="content-list">
    <template v-for="article in data" :key="article._path">
      <div class="list-item">
        <PostTags :tags="article.tags" />

        <h2 class="blog-head">
          <NuxtLink :to="article._path">
            {{ article.title }}
          </NuxtLink>
        </h2>

        <p v-text="article.description" />

        <div class="time-ago" v-text="getTimeAgo(article.date)" />
      </div>

      <hr class="hr">
    </template>
  </div>
</template>

<style scoped lang="scss">
.hr {
  @apply w-80% mx-auto b-ml-3/20 md:(w-full);
}

.content-list {
  @apply text-center mx-auto mb-8 mt-16 max-w-130 grid gap-10;

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
  @apply text-(3 ml-3/100) capitalize mt-1 font-mono;
}
</style>
