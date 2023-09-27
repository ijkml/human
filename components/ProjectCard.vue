<script setup lang="ts">
</script>

<template>
  <div class="project-card">
    <div class="pc-inner">
      <div class="pc-details">
        <h3 class="title">
          PennyPay
        </h3>

        <div class="sub-sect">
          <div class="sub-head">
            Roles
          </div>
          <div>Designer, Developer</div>
        </div>

        <div class="sub-sect">
          <div class="sub-head">
            Project
          </div>
          <div>
            He stared at the clinic, Molly took him to the simple Chinese hollow
            points Shin had sold him.
          </div>
        </div>

        <div class="sub-sect">
          <div class="sub-head">
            Tech
          </div>
          <div class="tech">
            Vue, Nuxt, Headless UI
          </div>
        </div>

        <div>
          <ZeButton text="View Demo" small />
        </div>
      </div>

      <div class="pc-img">
        <img
          src="@img/og2.webp"
          width="600"
          height="375"
          loading="lazy"
          decoding="async"
          alt="ALT"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  @apply bg-ml-8/100 rd-2 p-2
    sm:(p-6 rd-3) md:(p-8);

  &:where(:hover, :focus-within) {
    .pc-img {
      @apply saturate-85;
    }
  }
}

.pc-inner {
  @apply grid items-start gap-8 auto-flow-dense
    sm:(grid-cols-5) md:(grid-cols-3);
}

.pc-img {
  @apply self-center row-end--1 transition-350 saturate-35
    sm:(row-end-auto col-span-3) md:(col-span-2) lg:(p-2);

  img {
    @apply w-full h-full object-(cover center)
      rd-1 aspect-1.6 sm:(rd-2);
  }
}

.pc-details {
  @apply px-4 mb-5 grid gap-4 sm:(px-0 col-span-2)
    md:(col-span-1) lg:(pr-4 py-2);
}

.title {
  @apply text-(6.5/[1.1] ml-2/90) sm:(text-7.5) md:(text-8.5);
}

.sub-sect {
  @apply p-1 text-base max-w-50ch;
}

.sub-head {
  @apply text-3.3/[1.5] font-mono text-ml-3/100
    border-(b-1 ml-3/35) min-w-25 inline-block
    tracking-wide uppercase mb-2.5 ml--1 px-1;
}

.tech {
  @apply font-mono uppercase text-3.3/[1.5] tracking-wide;
}
</style>
