<script setup lang="ts">
import { contactEmail } from '@data/links';
</script>

<template>
  <section role="region" aria-labelledby="head-oss">
    <div class="sect-head">
      <h2 id="head-oss" class="screamer-h2">Open For Work</h2>
      <Balancer as="p">
        I'm a highly dedicated web developer with a passion for building
        innovative products. I'm looking for an internship or full-time position
        at a company that values creativity and <i>good</i> sense of humour. I'm
        available for full-time, part-time, or remote work. I'm confident that I
        can make a significant contribution to your team.
      </Balancer>
      <div>
        <ZeButton :link="contactEmail.link" text="Get in touch" external />
      </div>
    </div>
  </section>
</template>
