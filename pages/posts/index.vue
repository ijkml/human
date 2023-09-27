<script setup lang="ts">
useHead({
  title: 'Blog',
  // meta: [{ name: 'description', content: '' }],
});

definePageMeta({
  alias: ['/blog'],
  documentDriven: false,
});
</script>

<template>
  <section aria-labelledby="blog-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="blog-heading" class="screamer-h1">
        Blog
      </h1>
      <div class="reverb">
        <p>It's coming soon. I promise.</p>
        <p>
          I'm currently building a kickass blog engine
          with docker, k8s and [buzzword] that can scale and handle traffic the size of
          Google's!
        </p>
        <div>
          <ZeButton text="Blog Post" link="/posts/test" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
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
