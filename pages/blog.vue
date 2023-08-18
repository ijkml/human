<script setup lang="ts">
</script>

<template>
  <section aria-labelledby="blog-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="blog-heading" class="screamer-h1">Blog</h1>
      <div class="reverb">
        <p>It's coming soon. I promise.</p>
        <p>
          I'm currently building (and learning to build) a kickass blog engine
          with k8s and docker that can scale and handle traffic the size of
          Google's! Exciting! I just gotta figure out this caching problem...
        </p>
        <p>
          Meanwhile, you can
          <NuxtLink
            href="/twitter"
            class="link-xi"
            external
            rel="noopener"
            target="_blank"
            >find me on X</NuxtLink
          >. I'll appreciate it if you can send a couple 🔪🔪 emojis to
          <i>motivate</i> me to publish that "Hello World" draft :)
        </p>
      </div>
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
.reverb {
  @apply grid gap-2;
}
</style>
