<script setup lang="ts">
useHead({
  title: 'Blog',
  // meta: [{ name: 'description', content: '' }],
});

definePageMeta({
  alias: ['/blog'],
});

// TODO
// pagination
</script>

<template>
  <section aria-labelledby="blog-heading" class="sect-space-top" role="region">
    <div class="heading-wrap">
      <h1 id="blog-heading" class="screamer-h1">
        Posts
      </h1>
      <div class="reverb">
        <Balancer as="p">
          It's coming soon... I'm not sure what I'm going to write about yet,
          but I promise it will be lighthearted, engaging, and informative.
          Or at least one of those things.
        </Balancer>
      </div>
    </div>

    <PostList />
  </section>
</template>

<style scoped lang="scss">
.heading-wrap {
  @apply text-center mx-auto;
}

.reverb {
  @apply grid gap-2;
}
</style>
