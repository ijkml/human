<script setup lang="ts">
import { formatDate } from '~/composables/date';

const keys = ['_path', 'tags', 'date', 'title', 'description'] as const;

type QueryResult = Promise<Array<
  // Record<string, string> & // uncomment for looser types
  Record<(typeof keys)[number], string>
>>;

// TODO
// pagination

const { data } = await useAsyncData('post-list', () => {
  return queryContent('posts')
    .only(['_path', 'tags', 'date', 'title', 'description'])
    .sort({ date: -1 })
    .find() as QueryResult;
});
</script>

<template>
  <div class="content-list">
    <NuxtLink
      v-for="article in data"
      :key="article._path"
      :to="article._path"
      class="black-red article"
    >
      <h2 class="blog-head">
        {{ article.title }}
      </h2>

      <Balancer as="p">
        {{ article.description }}
      </Balancer>

      <PostTags :tags="article.tags" />

      <div class="date">
        {{ formatDate(article.date, 'short') }}
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.content-list {
  @apply mb-8 mt-16 grid gap-8 md:(grid-cols-3);
}

.blog-head {
  @apply tracking-tight text-(ml-3/100 5/1.1em)
    ss:(text-6) sm:(text-7) md:(text-8) lg:(text-9);
}

.article {
  @apply grid gap-3 transition-300 relative;

  @apply rd-2 p-(l-4 r-8 b-8 t-16) text-(3.8/[1.5] ml-3/100)
    justify-items-start content-end of-hidden ss:(px-6)
    sm:(min-h-80) md:(px-8) at-lg:(px-6);

  &::after {
    @apply content-[''] size-110% absolute top--5% left--5%
      bg-gradient-to-br from-(ml-0/0 35%) to-(ml-0/50 200%)
      transition-1000 transform-gpu z-0 translate-100% blur-5;
  }

  > * {
    @apply relative z-1 transition-inherit;
  }

  &:hover {
    &::after {
      @apply translate-0 transition-500;
    }

    .blog-head {
      @apply text-ml-1/100;
    }
  }
}

.date {
  @apply text-(4 ml-3/50) absolute bottom-10% right-2
    font-mono rotate-180 tracking-wider;

  writing-mode: vertical-lr;
}
</style>
