<script setup lang="ts">
import { contactEmail } from '@data/links';
</script>

<template>
  <section
    v-if="!['home', 'posts-all'].includes($route.name)"
    role="region"
    aria-labelledby="bottom-action-head"
    class="bottom-action"
  >
    <NuxtLink
      :to="$route.path === '/contact' ? contactEmail.link : '/contact'"
      class="cta-head"
      tabindex="0"
    >
      <h3 id="bottom-action-head">
        Let's work together
      </h3>
    </NuxtLink>
  </section>
</template>

<style scoped lang="scss">
.bottom-action {
  @apply px-4 py-12 max-w-screen-lg text-center
    mx-auto my-16 sm:(px-8) lg:(px-16 py-24);
}

.cta-head {
  @apply relative inline-block text-(7.5/[1.1] ml-0/100) p-1
    select-none outline-none decoration-none tracking-tighter
    mx-auto my-0 transition-all-500 saturate-50 font-light
    ss:(text-9) sm:(text-15) lg:(text-16 tracking--1);

  background: linear-gradient(to right, currentColor, currentColor) no-repeat
    center bottom / 0% 1px;

  &:is(:hover, :focus-visible) {
    @apply saturate-100;

    background-size: 100% 1px;
  }
}
</style>
