<script setup lang="ts">
import { hasProtocol } from 'ufo';
import { NuxtLink } from '#components';

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});

const extraProps = computed(() => {
  const isExternal =
    (props.target && props.target !== '_self') ||
    props.href === '' ||
    hasProtocol(props.href, { acceptRelative: true });

  return isExternal
    ? {
        external: true,
        rel: 'noopener nofollow',
        target: '_blank',
      }
    : null;
});
</script>

<template>
  <NuxtLink :to="href" :target="target" v-bind="extraProps">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
a {
  @apply outline-none decoration-none pb-2px
    b-b-(1 dashed current) text-ml-2/80;

  &:where(:hover, :focus-visible) {
    @apply text-ml-0/100 b-b-solid;
  }

  &:has(img) {
    @apply border-0;
  }
}
</style>
