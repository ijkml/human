<script setup lang="ts">
</script>

<template>
  <section aria-labelledby="blog-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="blog-heading" class="screamer-h1">Blog</h1>
      <p class="mb-1em">It's coming soon. I promise.</p>
      <Balancer as="p">
        Meanwhile, you can
        <NuxtLink
          href="/twitter"
          class="link-xi"
          external
          rel="noopener"
          target="_blank"
          >find me on X</NuxtLink
        >. I'll appreciate it if you can send a couple knife emojis to
        <i>motivate</i> me to publish that "Hello World" draft :)
      </Balancer>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sect-space-top {
  @apply px-2 ss:(px-3) ss500:(px-4) sm:(px-6)
    md:(px-10) xl:(px-13);
}

a {
  @apply text-ml-0/100 px-1px;

  &:where(:hover, :focus-visible) {
    @apply text-ml-1/100;
  }
}
</style>
