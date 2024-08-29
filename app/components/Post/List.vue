<script setup lang="ts">
import { formatDate } from '~/composables/date';
import type { PostContent } from '~/types/content';

// TODO
// * pagination
// * draft / empty / coming soon

const { data, status } = await useAsyncData('post-list', () => {
  return queryContent<PostContent>('posts')
    .where({ _draft: false })
    .only(['_path', 'tags', 'date', 'title', 'subtitle'])
    .sort({ date: -1 })
    .find();
}, { lazy: true });
</script>

<template>
  <div class="content-list">
    <template v-if="status === 'pending'">
      <div v-for="a in 3" :key="a" class="black-red article skeleton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32" height="32" viewBox="0 0 24 24"
          class="icon"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path
              d="M2.906 17.505L5.337 3.718a2 2 0 0 1 2.317-1.623L19.472
              4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317
              1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z"
            />
            <path
              stroke-linecap="round"
              d="m8.929 6.382l7.879 1.389m-8.574 2.55l7.879 1.39M7.54 14.26l4.924.869"
            />
          </g>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </template>
    <template v-else-if="status === 'error'">
      <div class="mx-4 text-amber-7/100">
        Oops... could not fetch posts.<br>
        Please try refreshing the page.
      </div>
    </template>
    <template v-else>
      <NuxtLink
        v-for="article in data"
        :key="article._path"
        :to="article._path"
        class="black-red article"
      >
        <h2 class="blog-head" v-text="article.title" />
        <p class="sub-head" v-text="article.subtitle" />

        <PostTags :tags="article.tags" />

        <div class="date">
          {{ formatDate(article.date, 'short') }}
        </div>
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped lang="scss">
.content-list {
  @apply mb-8 mt-16 grid gap-8 sm:(grid-cols-2) xl:(grid-cols-3);
}

.article {
  @apply grid gap-3 transition-300 relative;

  @apply rd-2 p-(x-4 b-8 t-16) min-h-70 text-ml-3/100
    leading-[1.25] justify-items-start content-end of-hidden
    ss:(px-6) sm:(min-h-80) md:(px-8) at-lg:(px-6);

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

.blog-head {
  @apply text-(ml-3/100 6) max-w-125 tracking-tight
    mr-5 ss:(text-7) md:(text-8) lg:(text-9) xl:(text-8);
}

.sub-head {
  @apply text-4 m-(r-5 t--1 b-1) max-w-100;
}

.date {
  @apply text-(3 ml-3/50) absolute bottom-10% right-2
    font-mono rotate-180 tracking-wider ss:(text-4);

  writing-mode: vertical-lr;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.9;
  }

  50% {
    opacity: 0.5;
  }
}

.skeleton {
  @apply flex items-center justify-center pointer-events-none;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  .icon {
    @apply w-10 h-10 text-ml-4/75;
  }
}
</style>
