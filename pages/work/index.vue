<script setup lang="ts">
useHead({
  title: 'Work',
  meta: [
    {
      name: 'description',
      content: `Software developer & open-source enthusiast building
        beautiful, functional web experiences. Get in touch.`,
    },
  ],
});

definePageMeta({
  alias: ['/projects', '/works'],
});

defineOgImageComponent('PageOg', {
  link: '/work',
});
</script>

<template>
  <section aria-labelledby="work-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="work-heading" class="screamer-h1">
        Work
      </h1>

      <p class="text-balance">
        My work experiences, including select creative projects and
        contributions to open source.
      </p>

      <Available class="mt-4" link="#open-to-work" />
    </div>

    <div class="subsect-offset">
      <WorkFeatured />

      <WorkOSS />

      <WorkOpen />
    </div>
  </section>
</template>

<style scoped lang="scss">
.subsect-offset {
  @apply mt-24 grid gap-24 ss500:(px-1) sm:(px-6);

  > * {
    @apply w-full mx-auto grid-cols-2 ss500:(max-w-screen-ss500)
      sm:(max-w-screen-sm) md:(max-w-full);
  }

  :deep() {
    .sect-head {
      @apply grid gap-3 max-w-50ch;
    }
  }
}

:deep() {
  .screamer-h2 {
    @apply text-ml-2/80;
  }

  @media (hover: hover) and (pointer: fine) {
    .cursor-project {
      cursor:
        url('@img/svg/cursor.svg') 50 50,
        pointer;
    }

    .cursor-project-alt {
      cursor:
        url('@img/svg/cursor-alt.svg') 50 50,
        pointer;
    }
  }
}
</style>
