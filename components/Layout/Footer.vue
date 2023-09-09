<script setup lang="ts">
import { contactEmail, footerLinks } from '@data/links';

const { copy, copied } = useClipboard({ legacy: true });
</script>


<template>
  <footer class="ze-footer">
    <div class="ze-footer-inner">
      <div class="ze-contact">
        <p class="ze-contact-head">
          I'm always up for a chat,
          <NuxtLink class="link-xi" to="/contact">get in touch &rarr;</NuxtLink>
        </p>
        <div class="email-link">
          <a :href="contactEmail.link" class="link-xi">
            {{ contactEmail.title }}
          </a>

          <button
            type="button"
            title="Copy Email Address"
            aria-lab
            :class="copied ? 'i-carbon-checkmark' : 'i-carbon-copy'"
            @click="copy(contactEmail.title)"
          />
        </div>
      </div>
      <nav aria-label="Footer navigation" class="ze-links-outer">
        <div v-for="(col, i) of footerLinks" :key="i" class="ze-links-inner">
          <NuxtLink
            v-for="ln of col"
            :key="ln.title"
            :to="ln.link"
            :target="ln.external ? '_blank' : '_self'"
            class="link-xiii"
          >
            <div>
              {{ ln.title }}
              <span v-if="ln.external" aria-hidden="true" class="arrow"
                >↗︎</span
              >
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
        >&copy;{{ new Date().getFullYear() }} ML</a
      >
    </div>
  </footer>
</template>


<style lang="scss" scoped>
.ze-footer {
  @apply border-(b-5 ml-0/25);

  @apply bg-ml-8/100 text-ml-3/100;
}

.ze-footer-inner {
  @apply max-w-screen-lg mx-auto pt-12 px-8 grid gap-8;
}

.ze-contact-head {
  @apply text-6.6/1.35em tracking--0.02em font-light;

  a {
    @apply inline-block text-ml-1;
  }
}

.email-link {
  @apply inline-flex justify-self-start items-center gap-2 mt-4;

  > button {
    @apply text-90% op-40 transition-200;

    &:where(:focus-visible, :hover) {
      @apply op-100;
    }
  }

  > a {
    @apply text-current;
  }
}

.ze-contact {
  @apply grid items-start max-w-380px mb-4;

  a:where(:hover, :focus-visible) {
    @apply text-ml-0;
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
  }
}
</style>
