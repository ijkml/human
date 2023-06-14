<script setup lang="ts">
import { NuxtLink } from '#components';
import type { RouteLocationRaw } from '@/.nuxt/vue-router';

const props = withDefaults(
  defineProps<{
    text: string;
    dark?: boolean;
    link?: RouteLocationRaw;
    external?: boolean;
    regular?: boolean;
  }>(),
  {
    dark: false,
    link: undefined,
    external: false,
    regular: false,
  }
);

const emit = defineEmits<{
  click: [event: any];
}>();

function bubble(event: any) {
  emit('click', event);
}

const { text, dark, external, link, regular } = toRefs(props);

const isLink = computed(() => {
  return !!link.value;
});

const button = computed(() => {
  return isLink.value ? (regular.value ? 'a' : NuxtLink) : 'button';
  // return isLink.value ? NuxtLink : 'button';
});

const linkProps = computed(() => {
  if (!isLink.value) {
    return {};
  }

  return {
    ...(regular.value ? { href: link.value } : { to: link.value }),
    ...(external.value && {
      external: true,
      target: '_blank',
      rel: 'noopener',
    }),
  };
});

const chunks = computed(() => {
  return text.value.split('').map((char, id) => ({
    char,
    delay: `${(id * 45e-3).toFixed(3)}s`,
  }));
});

const content = computed(() => {
  return `'${text.value}'`;
});
</script>

<template>
  <component
    :is="button"
    class="ze-button"
    :class="{ dark }"
    v-bind="linkProps"
    tabindex="0"
    :aria-label="text"
    @click="bubble"
  >
    <span
      v-for="c in chunks"
      :key="c.delay"
      :style="{ '--delay': c.delay }"
      v-text="c.char"
    />
  </component>
</template>

<style scoped lang="scss">
.ze-button {
  @apply inline-flex font-(normal mono) px-4 tracking-wider
    relative uppercase text-(3.5 ml-5/100 center) min-w-30
      transition-300 bg-none select-none cursor-pointer z-1
        outline-none h-9.5 items-center justify-center rd
          of-hidden border-(1 solid ml-3/100);

  > span {
    @apply align-middle transition-300 transform-gpu
      translate-y--10px inline-block whitespace-pre
        op-0 select-none pointer-events-none mt-2px
          text-size-inherit leading-0;
  }

  &::before {
    content: v-bind(content);

    @apply absolute inset-0 w-full h-full inline-flex
      items-center justify-center rd-inherit p-inherit
        transition-inherit transform-gpu
          text-size-inherit leading-0 mt-2px;
  }

  &:where(.dark) {
    @apply border-ml-5/100 text-ml-3/100;
  }

  &:where(:hover, :focus-visible) {
    @apply text-ml-0/100 border-current;

    &::before {
      @apply translate-y-100% op-0;
    }

    > span {
      @apply op-100 translate-y--0 delay-[var(--delay)];
    }
  }
}
</style>
