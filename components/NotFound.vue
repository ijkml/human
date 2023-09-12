<script setup lang="ts">
import NotFoundSvg from '@img/svg/404.svg?component';

defineProps<{
  title: string;
  paragraph: string;
  links: { text: string; link: string }[];
}>();
</script>

<template>
  <section class="page-section">
    <div class="sect-wrap">
      <div class="text-cont">
        <h1 class="screamer-h1" v-html="title" />
        <Balancer as="p">
          <span v-html="paragraph" />
        </Balancer>
        <div class="actions">
          <ZeButton
            v-for="(ln, id) in links"
            :key="ln.link"
            :link="ln.link"
            :text="ln.text"
            :primary="id === 0"
          />
        </div>
      </div>

      <div class="img-cont" aria-hidden="true">
        <NotFoundSvg />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.page-section {
  @apply max-w-screen-lg mx-auto mt-24 px-4
    sm:(px-6) md:(px-10 mt-36);

  &.padded {
    // project page 404 has no CTA
    @apply mb-24 md:(mb-36);
  }
}

.sect-wrap {
  @apply mx-auto grid gap-8 items-center
    ss500:(max-w-500px) sm:(max-w-screen-sm)
      md:(max-w-full grid-cols-2) lg:(gap-12);
}

.text-cont {
  @apply w-full grid gap-3 text-center justify-items-center
    max-w-50ch mx-auto md:(text-left justify-items-start m-0);
}

.screamer-h1 {
  @apply m-0;
}

.actions {
  @apply inline-flex flex-wrap
    items-center mt-2 gap-3 justify-center;
}

.img-cont {
  @apply relative w-full;

  > :where(svg, img) {
    @apply w-full object-contain max-h-80 md:(max-h-96) lg:(max-h-128);
  }
}
</style>
