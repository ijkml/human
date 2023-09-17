<script setup lang="ts">
import { VTypical } from 'vue-typical';
import { hasPlayedHero, splashLock } from '@/helpers/splash';

const screamer = 'I craft accessible and performant web experiences.';

function showNext() {
  splashLock(false);
}
</script>

<template>
  <ClientOnly>
    <span v-if="hasPlayedHero" v-text="screamer" />

    <VTypical
      v-else
      :loop="1"
      :steps="[screamer, 350, showNext]"
      wrapper="span"
    />

    <template #fallback>
      <span data-fallback v-text="screamer" />
    </template>
  </ClientOnly>
</template>
