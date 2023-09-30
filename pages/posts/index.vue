<script setup lang="ts">
useHead({
  title: 'Blog',
  // meta: [{ name: 'description', content: '' }],
});

definePageMeta({
  alias: ['/blog'],
});
</script>

<template>
  <section aria-labelledby="blog-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="blog-heading" class="screamer-h1">
        Blog
      </h1>
      <div class="reverb">
        <p>Hello, friend.</p>

        <Balancer as="p">
          It's coming soon... I'm not sure what I'm going to write about yet,
          but I promise it will be lighthearted, engaging, and informative.
          Or at least one of those things.
        </Balancer>

        <p>For now, here is a kitchen sink preview:</p>
      </div>

      <div class="mt-4">
        <ZeButton text="Kitchen Sink" small link="/posts/test" />
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
