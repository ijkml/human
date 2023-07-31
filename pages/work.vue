<script setup lang="ts">

</script>

<template>
  <section aria-labelledby="work-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="work-heading" class="screamer-h1">Work</h1>
      <Balancer as="p">
        My work experiences, including select creative projects and
        contributions to open source.
      </Balancer>
    </div>

    <div class="subsect-offset">
      <WorkFeatured />

      <WorkOSS />

      <WorkOpen />
    </div>
  </section>
</template>

<style scoped lang="scss">
.sect-space-top {
  @apply px-2 ss:(px-3) ss500:(px-4) sm:(px-6)
    md:(px-10) xl:(px-13);
}

:deep() {
  .screamer-h2 {
    @apply text-ml-2/80;
  }
}

.subsect-offset {
  @apply mt-24 grid gap-24 ss500:px-1 sm:px-6;

  > * {
    @apply w-full mx-auto ss500:(container) lg:(max-w-full);
  }

  :deep() {
    .sect-head {
      @apply grid gap-3 max-w-50ch;
    }
  }
}

:deep() {
  @media (hover: hover) and (pointer: fine) {
    .cursor-project {
      cursor: url('@img/svg/cursor.svg'), pointer;
    }

    .cursor-project-alt {
      cursor: url('@img/svg/cursor-alt.svg'), pointer;
    }
  }
}
</style>
