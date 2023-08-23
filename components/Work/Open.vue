<script setup lang="ts">
</script>

<template>
  <section role="region" aria-labelledby="head-oss">
    <div class="sect-head gap-4">
      <h2 id="head-oss" class="screamer-h2">Open For Work</h2>
      <Balancer as="p">
        I'm a dedicated web developer with a passion for building simple and
        usable websites. I'm looking for an internship or full-time position at
        a company that values creativity and <i>good</i> sense of humour. I'm
        available for full-time, part-time, or remote work. I'm confident that I
        can make a significant contribution to your team.
      </Balancer>
      <Balancer as="p">
        I am currently freelancing and open to gigs. Get in touch, let's talk.
      </Balancer>
      <div class="action">
        <ZeButton primary link="/contact" text="Get in touch" />
        <ZeButton link="/cv" text="Get my CV" external />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.action {
  @apply inline-flex items-center flex-wrap gap-4;
}
</style>
