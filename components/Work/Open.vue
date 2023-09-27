<script setup lang="ts">
</script>

<template>
  <section role="region" aria-labelledby="head-oss">
    <div class="sect-head gap-4">
      <h2 id="head-oss" class="screamer-h2">
        Open For Work
      </h2>
      <Balancer as="p">
        I am a dedicated and self-driven web developer with a passion for
        learning and growing. I am actively looking for an internship or
        full-time position. I'm self-taught and eager to improve. I'm available
        for full-time, part-time, or remote work.
      </Balancer>
      <Balancer as="p">
        I am also available for freelance projects. I am confident that I can
        deliver high-quality work on time and within budget.
      </Balancer>
      <div class="action">
        <ZeButton primary link="/contact" text="Get in touch" />
        <ZeButton link="/cv" text="Get my CV" external />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.action {
  @apply inline-flex items-center flex-wrap gap-4;
}
</style>
