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
      <h2 id="bottom-action-head">Let's work together</h2>
    </NuxtLink>
  </section>
</template>

<style scoped lang="scss">
.bottom-action {
  @apply px-4 py-12 max-w-screen-lg text-center
    mx-auto my-16 sm:(px-8) lg:(px-16 py-24);
}

.cta-head {
  @apply relative inline-block text-(9/[1.1] ml-0/100) p-1
    select-none outline-none decoration-none tracking-tighter
      mx-auto my-0 transition-all-500 saturate-50 font-light
        ss:(text-10) sm:(text-15) lg:(text-16 tracking--1);

  background: linear-gradient(to right, currentColor, currentColor) no-repeat
    center bottom / 0% 1px;

  &:where(:hover, :focus-visible) {
    @apply saturate-100;

    background-size: 100% 1px;
  }
}
</style>
