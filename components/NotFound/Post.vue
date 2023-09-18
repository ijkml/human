<script setup lang="ts">
useHead({
  title: 'Post not found',
  meta: [
    {
      name: 'description',
      content: 'This post does not exist or has been removed.',
    },
  ],
});

const props = {
  title: 'Unwritten',
  paragraph: `What is this code if, full of bugs, <br />
              We have no time to fix and shrug?`,

  links: [{ text: 'All Posts', link: '/posts' }],
};
</script>

<template>
  <NotFound class="padded" v-bind="props" />
</template>
