<script setup lang="ts">
definePageMeta({
  path: '/',
  alias: ['/home'],
});
</script>

<template>
  <div>
    <HomeHero />

    <div class="section-offset">
      <HomeAbout />
      <HomeProjects />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-offset {
  @apply mt-13 grid gap-16 px-2.5 sm:(px-4vw);

  > section {
    @apply px-4 w-full max-w-screen-xl rd-2 mx-auto
      sm:(px-8) md:(rd-2.7 px-13) lg:(px-16);
  }

  :deep() {
    .screamer {
      @apply text-(8/1.1em) block tracking-tighter
        font-light ss:(text-8.5) sm:(text-10) md:(text-12);
    }

    .whisper {
      @apply text-3.4 font-mono tracking-wide uppercase block;
    }
  }
}
</style>
