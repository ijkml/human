<script setup lang="ts">
</script>

<template>
  <section class="oss-sect">
    <div class="head-wrap">
      <h2 class="screamer">OSS</h2>
      <div class="reverb">
        <p>Some open-source projects I have contributed to...</p>
        <code>chore(docs): fix typo</code>
      </div>
    </div>

    <div class="project-grid"></div>
  </section>
</template>

<style scoped lang="scss">
.oss-sect {
  @apply bg-ml-8/100 text-ml-3/100 p-16;
}
.head-wrap {
  @apply grid gap-3;
}

.screamer {
  @apply text-ml-2/100;
}

code {
  @apply text-3.4 font-mono bg-ml-6
    py-0.25em px-0.4em inline-block;
}

.reverb {
  @apply space-y-2 px-1 md:(text-4.2);
}

.project-grid {
  @apply mt-8 grid gap-8;
}
</style>
