<script setup lang="ts">
import type { RouteLocationRaw } from '@/.nuxt/vue-router';

const props = withDefaults(
  defineProps<{
    text: string;
    light?: boolean;
    small?: boolean;
    /**
     * base animation delay (keep between 1 and 100)
     */
    delay?: number;
    link?: RouteLocationRaw;
    external?: boolean;
    regular?: boolean;
  }>(),
  {
    light: false,
    small: false,
    delay: 45,
    link: undefined,
    external: false,
    regular: false,
  }
);

const emit = defineEmits<{
  click: [event: any];
}>();

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();

function bubble(event: any) {
  emit('click', event);
}

const { text, light, small, delay, external, link, regular } = toRefs(props);

const content = computed(() => {
  return `'${text.value}'`;
});

const element = computed(() => {
  return link.value ? (regular.value ? 'a' : 'nuxt') : 'button';
});

const chunks = computed(() => {
  return text.value.split('').map((char, pos) => ({
    char,
    delay: `${(pos * delay.value * 1e-3).toFixed(3)}s`,
  }));
});

const bindProps = computed<{}>(() => {
  const linkProps = {
    ...(regular.value ? { href: link.value } : { to: link.value }),
    ...(external.value && {
      ...(!regular.value && { external: true }),
      target: '_blank',
      rel: 'noopener',
    }),
  };

  return {
    class: {
      'ze-button': true,
      light: light.value,
      small: small.value,
    },
    tabindex: 0,
    ...(element.value !== 'button' && linkProps),
  };
});
</script>

<template>
  <DefineTemplate>
    <span
      v-for="c in chunks"
      :key="c.delay"
      class="char"
      :style="{ '--delay': c.delay }"
      v-text="c.char"
    />
    <span class="sr-only" v-text="text" />
  </DefineTemplate>

  <NuxtLink v-if="element === 'nuxt'" v-bind="bindProps" @click="bubble">
    <ReuseTemplate />
  </NuxtLink>

  <a v-else-if="element === 'a'" v-bind="bindProps" @click="bubble">
    <ReuseTemplate />
  </a>

  <button v-else v-bind="bindProps" @click="bubble">
    <ReuseTemplate />
  </button>
</template>

<style scoped lang="scss">
.ze-button {
  @apply inline-flex font-(normal mono) px-4 tracking-wider
    relative uppercase text-(3.5 ml-3/100 center) min-w-30
      transition-300 bg-none select-none cursor-pointer z-1
        outline-none h-9.5 items-center justify-center rd
          of-hidden border-(1 solid ml-5/100);

  .char {
    @apply align-middle transition-300 transform-gpu
      translate-y--10px inline-block whitespace-pre
        op-0 select-none pointer-events-none mt-1px
          text-size-inherit leading-0;
  }

  &::before {
    content: v-bind(content);

    @apply absolute inset-0 w-full h-full inline-flex
      items-center justify-center rd-inherit p-inherit
        transition-inherit transform-gpu
          text-size-inherit leading-0 mt-1px;
  }

  &:where(.light) {
    @apply border-ml-3/100 text-ml-5/100;
  }

  &:is(.small) {
    @apply min-w-auto max-w-full text-3.1 h-8.5;
  }

  &:where(:hover, :focus-visible) {
    @apply text-ml-0/100 border-current;

    &::before {
      @apply translate-y-100% op-0;
    }

    .char {
      @apply op-100 translate-y--0 delay-[var(--delay)];
    }
  }
}
</style>
