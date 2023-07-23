<script setup lang="ts">
// import { contactEmail, footerLinks } from '@data/links';
import { bmcLink, contactEmail, socials } from '@data/links';

const coaxTexts = [
  'Thank you!',
  'Not impressed? Sponsor me so I can level up & do better :)',
  'Pretty please?',
  'Preeeeety pleeeeease?',
];

const linkProps = {
  regular: true,
  external: true,
  link: bmcLink,
};

const interacted = ref(false);
const accepted = ref(false);
const convinced = ref(false);

const msgId = ref(0);

function coax() {
  interacted.value || (interacted.value = true);

  if (convinced.value) {
    navigateTo(bmcLink, {
      external: true,
      open: { target: '_blank', windowFeatures: { noopener: true } },
    });

    return sayThanks();
  }

  msgId.value = msgId.value + 1;

  if (msgId.value === coaxTexts.length - 1) {
    convinced.value = true;
  }
}

function sayThanks() {
  msgId.value = 0;
  accepted.value = true;
  interacted.value || (interacted.value = true);
}
</script>

<template>
  <section
    role="region"
    aria-labelledby="get-in-touch"
    class="sect-space-top section-contact"
  >
    <div class="heading-wrap">
      <h1 id="get-in-touch" class="tl-screamer">Get in Touch</h1>
      <Balancer as="p">
        I'm always open to new opportunities and connections. Reach out anytime
        to discuss a project or just chat.
      </Balancer>
    </div>

    <div class="options-deck">
      <div class="black-red bc-card email-card">
        <h3 class="heading-lv-3">Let's chat</h3>

        <p>
          <NuxtLink
            href="/telegram"
            class="link-xi"
            external
            no-rel
            target="_blank"
            >Telegram</NuxtLink
          >
          is the fastest way to reach me. If it's official
          <small>(or you might want to sue me about it later)</small>,
          <a class="link-xi" :href="contactEmail.link">here's my email</a>. I
          also do
          <NuxtLink
            href="/twitter"
            class="link-xi"
            external
            no-rel
            target="_blank"
            >Twitter</NuxtLink
          >
          but almost never check, so please tweet @me if I don't reply within 6
          months.
        </p>

        <div>
          <ZeButton
            text="Send me an email"
            :link="contactEmail.link"
            external
            suffix
            :delay="30"
          />
        </div>
      </div>

      <div class="black-red bc-card">
        <h3 class="heading-lv-3">Find me on</h3>

        <div class="socials-list">
          <NuxtLink
            v-for="ln of socials"
            :key="ln.title"
            :href="ln.link"
            rel="noopener"
            target="_blank"
            class="link-xiii"
          >
            <div>
              {{ ln.title }}
              <span aria-hidden="true" class="arrow">↗︎</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div v-auto-animate class="black-red bc-card">
        <h3 class="heading-lv-3">Coffee?</h3>

        <p>
          If you find value in my work and/or want to support me, please
          consider buying me a coffee.
        </p>

        <div class="coffee-action">
          <ZeButton
            class="coffee"
            text="Buy me a coffee"
            :link="bmcLink"
            external
            :delay="30"
            @click="sayThanks"
          />
          <ClientOnly>
            <ZeButton
              v-if="!accepted"
              class="no-coffee"
              :delay="80"
              :text="convinced ? 'Fine' : 'No'"
              v-bind="convinced ? linkProps : null"
              @click.prevent="coax"
            />
          </ClientOnly>
        </div>

        <ClientOnly>
          <div v-if="interacted" :key="msgId" class="no-coffee-message">
            {{ coaxTexts[msgId] }}
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-contact {
  @apply px-2 ss:(px-3) ss500:(px-4) sm:(px-6)
    md:(px-10) xl:(px-13);
}

.options-deck {
  @apply mx-auto mt-24 gap-6 grid ss500:(gap-8) sm:(grid-cols-2)
    md:(max-w-200) lg:(grid-cols-3 max-w-screen-xl);
}

.bc-card {
  @apply rd-2 p-(x-4 b-8 t-24) text-(3.8/[1.5] ml-2/75)
    justify-items-start content-end grid gap-4 ss:(px-6)
      sm:(min-h-80) md:(px-8) at-lg:(px-6);
}

.socials-list {
  @apply inline-grid px-1 gap-2.5;
}

.link-xiii {
  --len: 3em;
}

.coffee-action {
  @apply flex flex-wrap items-end w-auto
    gap-3 justify-(start items-start);

  :deep() {
    .coffee {
      &:where(:hover, :focus-visible) {
        @apply text-yellow-5/90;
      }
    }

    .no-coffee {
      @apply min-w-20;
    }
  }
}

.no-coffee-message {
  @apply w-full max-w-50 text-90%;
}

.email-card {
  @apply to-ml-8/25 leading-[1.65]
    sm:(col-span-2) lg:(col-span-1);

  small {
    @apply text-85% op-90;
  }

  a {
    @apply text-ml-0/100 px-1px;

    &:where(:hover, :focus-visible) {
      @apply text-ml-1/100;
    }
  }
}
</style>
