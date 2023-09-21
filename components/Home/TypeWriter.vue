<script setup lang="ts">
import { VTypical } from 'vue-typical';
import { endSplash, status } from '@/helpers/splash';

const screamer = 'I craft accessible and performant web experiences.';
</script>

<template>
  <ClientOnly>
    <span v-if="status.playedHero" v-text="screamer" />

    <VTypical
      v-else
      :loop="1"
      :steps="[screamer, 350, endSplash]"
      wrapper="span"
    />

    <template #fallback>
      <span data-fallback v-text="screamer" />
    </template>
  </ClientOnly>
</template>
