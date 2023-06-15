<script setup lang="ts">
import type { RouteLocationRaw } from '@/.nuxt/vue-router';

const props = withDefaults(
  defineProps<{
    text: string;
    dark?: boolean;
    small?: boolean;
    link?: RouteLocationRaw;
    external?: boolean;
    regular?: boolean;
  }>(),
  {
    dark: false,
    small: false,
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

const { text, dark, small, external, link, regular } = toRefs(props);

const isLink = computed(() => {
  return !!link.value;
});

const element = computed(() => {
  return isLink.value ? (regular.value ? 'a' : 'nuxt') : 'button';
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
  const textArr = text.value.split('');
  const baseDelay = textArr.length > 11 ? 30e-3 : 45e-3;

  return textArr.map((char, id) => ({
    char,
    delay: `${(id * baseDelay).toFixed(3)}s`,
  }));
});

const content = computed(() => {
  return `'${text.value}'`;
});
</script>

<template>
  <DefineTemplate>
    <span
      v-for="c in chunks"
      :key="c.delay"
      :style="{ '--delay': c.delay }"
      v-text="c.char"
    />
  </DefineTemplate>

  <template v-if="element === 'nuxt'">
    <NuxtLink
      class="ze-button"
      :class="{ dark, small }"
      v-bind="linkProps"
      tabindex="0"
      :aria-label="text"
      @click="bubble"
    >
      <ReuseTemplate />
    </NuxtLink>
  </template>

  <template v-else-if="element === 'a'">
    <a
      class="ze-button"
      :class="{ dark, small }"
      v-bind="linkProps"
      tabindex="0"
      :aria-label="text"
      @click="bubble"
    >
      <ReuseTemplate />
    </a>
  </template>

  <template v-else>
    <button
      class="ze-button"
      :class="{ dark, small }"
      tabindex="0"
      :aria-label="text"
      @click="bubble"
    >
      <ReuseTemplate />
    </button>
  </template>
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

  &:where(.dark) {
    @apply border-ml-5/100 text-ml-3/100;
  }

  &:is(.small) {
    @apply min-w-auto max-w-full text-3.1 h-8.5;
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
