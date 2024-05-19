<script setup lang="ts">
import { contactEmail, footerLinks } from '@data/links';

const { copy, copied } = useClipboard({ legacy: true });

function monitor(isExternal = false, link: string) {
  if (!isExternal)
    return;

  umTrackView(link);
}
</script>

<template>
  <footer class="ze-footer">
    <div class="ze-footer-inner">
      <div class="ze-contact">
        <p class="ze-contact-head">
          I'm always up for a chat,
          <NuxtLink class="link-xi" to="/contact">
            get in touch &rarr;
          </NuxtLink>
        </p>
        <div class="email-link">
          <a
            :href="contactEmail.link"
            class="link-xi text-current"
            @click="umTrackEvent('send-mail');"
          >
            {{ contactEmail.title }}
          </a>

          <ClientOnly>
            <button
              type="button"
              title="Copy Email Address"
              class="copy-btn"
              :class="copied ? 'i-carbon-checkmark' : 'i-carbon-copy'"
              @click="copy(contactEmail.title)"
            />
          </ClientOnly>
        </div>
      </div>
      <nav aria-label="Footer navigation" class="ze-links-outer">
        <div v-for="(col, i) of footerLinks" :key="i" class="ze-links-inner">
          <NuxtLink
            v-for="ln of col"
            :key="ln.title"
            :to="ln.link"
            :target="ln.external ? '_blank' : '_self'"
            rel="noopener"
            class="link-xiii"
            @click="monitor(ln.external, ln.link)"
          >
            <div>
              {{ ln.title }}
              <span v-if="ln.external" aria-hidden="true" class="arrow">↗︎</span>
            </div>
          </NuxtLink>
        </div>
      </nav>
    </div>
    <div class="ze-copyright">
      <a
        rel="noopener"
        target="_blank"
        class="link-xi"
        href="https://github.com/ijkml/human/"
      >&copy;{{ new Date().getFullYear() }} ML</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.ze-footer {
  @apply bg-ml-9/100 text-ml-3/100 z-2 border-(b-5 ml-0/25);
}

.ze-footer-inner {
  @apply max-w-screen-lg mx-auto pt-12 px-8 grid gap-8;
}

.ze-contact-head {
  @apply text-6.6/1.35em tracking--0.02em font-light;

  a {
    @apply px-1px inline-block text-ml-1/100;
  }
}

.email-link {
  @apply inline-flex justify-self-start items-center gap-2 mt-4;
}

.copy-btn {
  @apply op-40 transition-200 w-4 h-4;

  &:is(:hover, :focus-visible) {
    @apply op-100 text-ml-0/100;
  }
}

.ze-contact {
  @apply grid items-start max-w-380px mb-4;

  a:is(:hover, :focus-visible) {
    @apply text-ml-0/100;
  }
}

.ze-links-outer {
  @apply inline-grid grid-cols-2 gap-8 items-start;
}

.ze-links-inner {
  @apply grid gap-3 justify-items-start;
}

@screen sm {
  .ze-footer-inner {
    @apply grid-cols-2;
  }

  .ze-links-inner {
    @apply justify-items-end;
  }

  .ze-contact {
    @apply mb-0;
  }

  .ze-contact-head {
    @apply text-7;
  }
}

@screen md {
  .ze-footer-inner {
    @apply grid grid-cols-5;
  }

  .ze-contact {
    @apply col-span-3;
  }

  .ze-contact-head {
    @apply text-8;
  }

  .ze-links-outer {
    @apply col-span-2;
  }
}

.ze-copyright {
  @apply text-(3.2/normal center) p-2 mt-8;

  a {
    @apply p-2px mx-2px text-ml-3/100;

    &:is(:hover, :focus-visible) {
      @apply text-inherit;
    }
  }
}
</style>
