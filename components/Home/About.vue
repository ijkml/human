<script setup lang="ts">
</script>

<template>
  <section
    id="about"
    class="white"
    aria-labelledby="about-heading"
    role="region"
  >
    <div class="sect-text">
      <h2 id="about-heading">
        <span class="whisper">Hello, my name is</span>
        <span class="screamer">Moses <span>Laurence</span></span>
      </h2>
      <Balancer as="div" class="reverb">
        <div>
          <p>
            I'm a dedicated self-taught web developer, avid learner & Open
            Source enthusiast. I love crafting innovative solutions and building
            performant websites.
          </p>
          <p>
            I try to give back to OSS and currently maintain a few open source
            projects.
          </p>
        </div>
      </Balancer>
      <ZeButton link="/about" text="About Me" light />
    </div>

    <Avatar height="250" class="avatar" />
  </section>
</template>

<style scoped lang="scss">
#about {
  @apply grid gap-4 bg-(ml-1/100 gradient-to-br)
    from-(transparent 35%) to-ml-0/15 pt-13 pb-4
      items-center at-ss:(px-6) sm:(grid-cols-4 gap-8 pb-13)
        md:(grid-cols-3 py-16) lg:(grid-cols-2);
}

.screamer {
  @apply mt-2 text-ml-6/100;

  span {
    @apply text-ml-6/50;
  }
}

.reverb > div {
  @apply space-y-2 md:(text-4.2);
}

.sect-text {
  @apply max-w-50ch text-ml-5/85 space-y-2.5 sm:(col-span-3)
    md:(col-span-2 mx-auto) lg:(col-span-1 max-w-60ch);
}

.avatar {
  @apply ml-auto w-auto h-full transition-all-350 max-h-30
    sm:(mx-auto max-h-40) md:(max-h-50) lg:(max-h-250px);
}
</style>
