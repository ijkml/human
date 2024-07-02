<script setup lang="ts">
</script>

<template>
  <section id="open-to-work" role="region" aria-labelledby="head-otw">
    <div class="sect-head gap-4">
      <h2 id="head-otw" class="screamer-h2">
        Open To Work
      </h2>
      <p>
        I am actively seeking full-time work, but I am also open to
        freelance opportunities. Hit me up if you have any new projects,
        creative ideas, or collaborations in the works.
      </p>
      <div class="action">
        <ZeButton primary link="/contact" text="Get in touch" />
        <ZeButton
          link="/resume"
          text="Get my CV"
          external
          @click="umTrackView('/resume')"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.action {
  @apply inline-flex items-center flex-wrap gap-4;
}
</style>
