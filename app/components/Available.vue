<script setup lang="ts">
withDefaults(defineProps<{
  link?: string;
  text?: string;
}>(), {
  link: '/contact',
  text: 'Open to work',
});

function monitor() {
  umTrackEvent('available-beacon', { page: useRoute().path });
}
</script>

<template>
  <div>
    <NuxtLink
      :to="link"
      class="available"
      @click="monitor"
    >
      <Chip>
        <span class="availa-bull i-carbon-dot-mark" />
        {{ text }}
      </Chip>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.available {
  @apply outline-none;

  &:is(:hover, :focus-visible) {
    @apply text-green-6/100 transition-300;
  }
}

:is(.chip) {
  @apply tracking-0.1em;
}

@keyframes flicker {
  25% {
    @apply op-20;
  }
}

.availa-bull {
  @apply text-green-5/100 ml--1 mr-1 block pointer-events-none;

  // thanks, Jhey
  animation: flicker 3s infinite
    linear(
      0 0% 0.5%,
      0.1723 0.7925%,
      0.2408 0.865%,
      0.1991 1.6425%,
      0 7.69% 13.69%,
      0.3451 3.795%,
      0.0006 3.94%,
      0.5332 4.37%,
      0.0001 4.895%,
      0.595 5.175%,
      0.0001 6.29%,
      0.6263 6.755%,
      0.0004 7.7775%,
      0.4634 7.8725%,
      0.4869 8.075%,
      0.6052 8.455%,
      0.6504 8.9525%,
      0.0011 9.0925%,
      0.6832 10.3875%,
      0.2716 11.5425%,
      0.5783 11.6675%,
      0.5956 13.0475%,
      0.1565 13.6625%,
      0.869 15.095%,
      0.4566 15.745%,
      0.3918 15.975%,
      0.4768 16.1675%,
      0.3041 17.29%,
      0.5036 17.295%,
      0.9561 17.96%,
      0.4202 18.1475%,
      0.9997 18.59%,
      0.9389 18.9675%,
      0.5199 19.5325%,
      0.9878 19.6325%,
      0.5212 19.8075%,
      0.8476 21.1625%,
      0.5724 21.615%,
      0.7517 21.9%,
      0.5716 22.4%,
      0.8177 22.8325%,
      0.9997 23.865%,
      1 25%,
      1 100%
    )
    both;
}
</style>
