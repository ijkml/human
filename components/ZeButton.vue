<script setup lang="ts">
import type { RouteLocationRaw } from '@/.nuxt/vue-router';

const props = withDefaults(
  defineProps<{
    text: string;
    light?: boolean;
    primary?: boolean;
    small?: boolean;
    icon?: string;
    suffix?: boolean;
    /**
     * base animation delay (keep between 1 and 100)
     */
    delay?: number;
    link?: RouteLocationRaw;
    external?: boolean;
    class?: string;
    regular?: boolean;
  }>(),
  {
    light: false,
    small: false,
    suffix: false,
    primary: false,
    icon: undefined,
    delay: 45,
    class: '',
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

const {
  text,
  light,
  small,
  delay,
  external,
  primary,
  link,
  regular,
  icon,
  suffix,
  class: classe,
} = toRefs(props);

const element = computed(() => {
  return link.value ? (regular.value ? 'a' : 'nuxt') : 'button';
});

const chunks = computed(() => {
  return text.value.split('').map((char, pos) => ({
    char,
    delay: `${(pos * delay.value * 1e-3).toFixed(3)}s`,
  }));
});

const bindProps = computed<object>(() => {
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
      primary: primary.value,
      [classe.value]: true,
    },
    tabindex: 0,
    ...(element.value !== 'button' && linkProps),
  };
});
</script>

<template>
  <DefineTemplate>
    <span v-if="icon && !suffix" class="icon-fix prefix" aria-hidden="true">
      <slot name="icon">
        <UnoIcon class="icon" :class="icon" />
      </slot>
    </span>

    <div class="text-body">
      <span
        v-for="c in chunks"
        :key="c.delay"
        class="char"
        aria-hidden="true"
        :style="{ '--delay': c.delay }"
        v-text="c.char"
      />
      <span class="full-text" v-text="text" />
    </div>

    <span v-if="icon && suffix" class="icon-fix suffix" aria-hidden="true">
      <slot name="icon">
        <UnoIcon class="icon" :class="icon" />
      </slot>
    </span>
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
    relative uppercase text-(3.5 ml-2/90 center) min-w-24
      transition-300 bg-none select-none cursor-pointer z-1
        outline-none items-center justify-center align-middle
          of-hidden h-9.5 rd border-(1 solid ml-5/100);

  &:is(.light) {
    @apply border-ml-3/100 text-ml-5/100;
  }

  &:where(.primary) {
    @apply text-amber-5/90;
  }

  &:is(.small) {
    @apply min-w-auto max-w-full text-3.1 h-8.5;
  }
}

.text-body {
  @apply relative transition-inherit;
}

:where(.char, .full-text) {
  @apply will-change-transform transform-gpu mt-0.3;
}

:where(.char, .full-text, .icon-fix) {
  @apply transition-inherit text-inherit;
}

.char {
  @apply inline-block translate-y--10px select-none
    whitespace-pre pointer-events-none op-0;
}

.full-text {
  @apply absolute inset-0 w-full h-full inline-flex
    items-center justify-center;
}

.icon-fix {
  &.prefix {
    @apply mr-2;
  }

  &.suffix {
    @apply ml-2;
  }
}

.icon {
  @apply text-120%;
}

.ze-button:where(:hover, :focus-visible) {
  @apply text-ml-0/100 border-current;

  .full-text {
    @apply translate-y-100% op-0;
  }

  .char {
    @apply op-100 translate-y--0 delay-[var(--delay)];
  }
}
</style>
