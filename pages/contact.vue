<script setup lang="ts">
import { contactEmail, socials } from '@data/links';

useHead({
  title: 'Contact',
  // meta: [{ name: 'description', content: 'Get in touch' }],
});

definePageMeta({
  alias: ['/contact-me'],
});

const coaxTexts = [
  'Thank you!',
  'Not impressed? Sponsor me so I can level up & do better :)',
  'Pretty please?',
  'Want to see something cool?',
] as const;

const bmcLinkProps = {
  regular: true,
  external: true,
  link: '/coffee',
};

const interacted = ref(false);
const accepted = ref(false);
const convinced = ref(false);

const msgId = ref(0);

function coax() {
  interacted.value = true;

  if (convinced.value) {
    return sayThanks();
  }

  const id = msgId.value;

  if (id === coaxTexts.length - 2) {
    convinced.value = true;
  }

  const typingDuration = Math.floor(Math.random() * (2000 - 800 + 1)) + 800;
  // random, 800 - 2000
  msgId.value = -1;

  const dotsTimer = setTimeout(() => {
    msgId.value = id + 1;
    clearTimeout(dotsTimer);
  }, typingDuration);
}

function sayThanks() {
  msgId.value = 0;
  accepted.value = true;
  interacted.value = true;
}

const btnText = computed(() => {
  return msgId.value < 0 ? '...' : convinced.value ? 'Fine' : 'No';
});
</script>

<template>
  <section role="region" aria-labelledby="get-in-touch" class="sect-space-top">
    <div class="heading-wrap">
      <h1 id="get-in-touch" class="screamer-h1">
        Contact
      </h1>
      <Balancer as="p">
        I'm always open to new opportunities and connections. Reach out anytime
        to discuss a project or just chat.
      </Balancer>

      <Available class="mt-4" :link="contactEmail.link" />
    </div>

    <div class="options-deck">
      <div class="black-red bc-card intro-card">
        <h3 class="heading-lv-3">
          Let's chat
        </h3>

        <p>
          <a
            href="/telegram"
            class="link-xi"
            rel="noopener"
            target="_blank"
          >Telegram</a> is the fastest way to reach me. If it's official
          <small>(or you might need the paper trail)</small>,
          <a class="link-xi" rel="noopener" :href="contactEmail.link">
            here's my email</a> or better,
          <a
            class="link-xi"
            href="/resume"
            rel="noopener"
            target="_blank"
          >grab my resume</a>. You can also catch me stalking folks on
          <a
            href="/twitter"
            class="link-xi"
            rel="noopener"
            target="_blank"
          >
            Twitter/X
          </a>.
        </p>

        <div class="intro-actions">
          <ZeButton
            text="Chat"
            link="/telegram"
            external
            primary
            :delay="80"
            icon="i-carbon-send-alt w-4"
            suffix
          />
          <ZeButton text="Email" :link="contactEmail.link" :delay="80" />
        </div>
      </div>

      <div class="black-red bc-card">
        <h3 class="heading-lv-3">
          Find me on
        </h3>

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

      <div class="black-red bc-card">
        <h3 class="heading-lv-3">
          Coffee?
        </h3>

        <p>
          If you find value in my work and/or want to support me, please
          consider buying me a coffee.
        </p>

        <div class="coffee-action">
          <ZeButton
            class="coffee"
            text="Buy me a coffee"
            link="/coffee"
            external
            primary
            :delay="30"
            @click="sayThanks"
          />
          <ClientOnly>
            <ZeButton
              v-if="!accepted"
              class="no-coffee"
              :delay="80"
              :disabled="msgId < 0"
              :text="btnText"
              v-bind="convinced && msgId > 0 ? bmcLinkProps : null"
              @click="coax"
            />
          </ClientOnly>
        </div>

        <ClientOnly>
          <Transition name="slide-fade" mode="out-in">
            <div v-if="interacted" :key="msgId" class="no-coffee-message">
              <template v-if="msgId < 0">
                . . .
              </template>
              <template v-else>
                {{ coaxTexts[msgId] }}
              </template>
            </div>
          </Transition>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.options-deck {
  @apply mx-auto mt-24 gap-6 grid ss500:(gap-8) sm:(grid-cols-2)
    md:(max-w-200) lg:(grid-cols-3 max-w-screen-xl);
}

.bc-card {
  @apply rd-2 p-(x-4 b-8 t-24) text-(3.8/[1.5] ml-3/100)
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
    .no-coffee {
      @apply min-w-15;
    }
  }
}

.no-coffee-message {
  @apply w-full max-w-50 text-90%;
}

.intro-card {
  @apply to-ml-9/25 leading-[1.65]
    sm:(col-span-2) lg:(col-span-1);

  small {
    @apply text-85% op-90;
  }

  a {
    @apply text-ml-1/100 px-1px;

    &:where(:hover, :focus-visible) {
      @apply text-ml-0/100;
    }
  }
}

.intro-actions {
  @apply flex flex-wrap gap-3 items-center w-auto;
}

.slide-fade-enter-active {
  transition: all 250ms ease;
}

.slide-fade-leave-active {
  transition: all 250ms ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply op-0 translate-y-4;
}
</style>
