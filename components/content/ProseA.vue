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
  const isExternal
    = (props.target && props.target !== '_self')
    || props.href === ''
    || hasProtocol(props.href, { acceptRelative: true });

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
  @apply outline-none transition-200 text-ml-1/100
    decoration-(1 current underline offset-4 dashed);

  &:where(:hover, :focus-visible) {
    @apply text-ml-0/100 decoration-(offset-2);
  }
}
</style>
