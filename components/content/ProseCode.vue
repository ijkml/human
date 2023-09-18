<script setup lang="ts">
import type { Lang } from 'shiki-es';

// import { CopyCodeButton } from '#components';

const props = withDefaults(
  defineProps<{
    code: string;
    language: Lang | null;
    filename: string | null;
    highlights: number[];
  }>(),
  {
    code: '',
    language: null,
    filename: null,
    highlights: () => [],
  }
);

const hovered = ref(false);

const copyButtonRef = ref<HTMLElement>();
const state = ref('init');

const { copy: copyToClipboard } = useClipboard({ legacy: true });

function copy(_e: MouseEvent) {
  copyToClipboard(props.code)
    .then(() => {
      state.value = 'copied';
    })
    .catch((err) => {
      console.warn("Couldn't copy to clipboard!", err);
    });
}

onClickOutside(copyButtonRef, () => {
  if (state.value === 'copied') {
    state.value = 'init';
  }
});
</script>

<template>
  <div
    :class="[`highlight-${language}`]"
    class="novel-code"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>

    <slot />

    <button
      ref="copyButtonRef"
      :class="[(hovered || state === 'copied') && 'show']"
      class="copy-button"
      @click="copy"
    >
      <span class="sr-only">Copy to clipboard</span>
      <span class="icon-wrapper">
        <Transition name="fade">
          <UnoIcon v-if="state === 'copied'" class="icon i-carbon-checkmark" />
          <UnoIcon v-else class="icon i-carbon-copy" />
        </Transition>
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-200;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.novel-code {
  @apply text-ml-2/90 bg-#0e0e0e relative of-hidden rd-2
    b-(0 none) my-6 text-3.5 backdrop-contrast-100 w-full;

  :deep(code) {
    @apply w-full;
  }

  &.highlight {
    &-sh,
    &-bash,
    &-zsh,
    &-shell,
    &-shellscript {
      :deep(code .line) {
        @apply relative ps-4;

        &::before {
          @apply content-['>'] absolute inset-0 max-w-min select-none
            font-inherit inline-flex items-center text-(ml-5/100 0.9em/[0]);
        }
      }
    }
  }

  &:hover {
    :deep(.filename) {
      @apply op-0;

      &:hover {
        @apply op-100;
      }
    }
  }
}

.filename {
  @apply font-mono backdrop-blur-4 transition-200
    rd-14px inset-e-0 absolute top-0 p-(y-2 x-3)
      text-xs/normal text-ml-3/100 select-all;
}

.copy-button {
  @apply absolute bottom-0 op-0 inset-e-0 p-1 m-1 rd-3px
    transition-all-200 transform-gpu scale-80 outline-none;

  &:focus-visible {
    @apply op-100 ring-(2 emerald-6/100);
  }

  &.show {
    @apply scale-100 op-100;
  }

  .icon-wrapper {
    @apply flex relative w-4.8 h-4.8;
  }

  .icon {
    @apply block m-auto text-ml-4/100 w-4 h-4;
  }
}

:deep() {
  code {
    @apply flex flex-col;
  }

  .line {
    @apply inline-table min-h-4;
  }

  .line.highlight {
    @apply bg-zinc-5/25;
  }

  pre {
    @apply flex flex-1 of-x-auto leading-relaxed m-0 p-4 bg-inherit;

    code {
      @apply pe-30px;
    }
  }
}
</style>
