<script setup lang="ts">
import { withBase } from 'ufo';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//'))
    return withBase(props.src, useRuntimeConfig().app.baseURL);

  return props.src;
});
</script>

<template>
  <img
    v-bind="$attrs"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
  >
</template>

<style lang="scss" scoped>
img {
  @apply rd-1.75 my-8 sm:(rd-2.5);
}
</style>
