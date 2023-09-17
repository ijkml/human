const html = computed(() => {
  if (typeof window === 'undefined') {
    return null;
  }
  return document.documentElement;
});

const hasPlayedHero = ref(false);
const rootScrollLock = useScrollLock(html, false);

const scrollGap = ref<`${number}px`>('0px');

function splashLock(lock: boolean) {
  if (typeof window === 'undefined' || hasPlayedHero.value) {
    return;
  }

  scrollGap.value = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  rootScrollLock.value = lock;
  document.body.style.paddingRight = lock ? scrollGap.value : '0px';

  if (lock) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    hasPlayedHero.value = true;
  }
}

export { splashLock, hasPlayedHero };
