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
        freelance opportunities. Hit me up if you want to discuss a
        project or creative idea.
      </p>
      <div class="action">
        <ZeButton primary link="/contact" text="Get in touch" />
        <ZeButton
          link="/github"
          text="View GitHub"
          external
          @click="umTrackView('/github')"
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
