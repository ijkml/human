<script setup lang="ts">
</script>

<template>
  <section id="projects" class="sect-work" role="region">
    <h2 class="screamer">Featured Projects</h2>

    <div class="project-grid">
      <ProjectCard v-for="i in 2" :key="i" />

      <div class="more-btn">
        <ZeButton text="All Projects" link="/work" />
      </div>
    </div>

    <hr class="hr" />
  </section>
</template>

<style scoped lang="scss">
#projects {
  // @apply outline-(1 dotted yellow-3/100);

  @apply py-10 text-ml-2/80 sm:(py-13)
    md:(bg-ml-6/35 border-1 border-ml-5/35) lg:(py-16);
}

.screamer {
  @apply text-ml-2/100 mx--2 sm:(mx--4) lg:(mx-0);
}

.reverb {
  @apply px-1 md:(text-4.2);
}

.project-grid {
  @apply mt-8 grid gap-8 mx--3 sm:(mx--4vw gap-12)
    md:(mx--2vw) lg:(mx-0);
}

.more-btn {
  @apply p-4 text-center;
}

.hr {
  @apply mb--10 mt-10 max-w-80% mx-auto sm:(mb--13 mt-13) md:(hidden);
}
</style>
