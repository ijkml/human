const html = computed(() => {
  if (typeof window === 'undefined')
    return null;

  return document.documentElement;
});

const status = reactive({
  playedHero: false,
  showText: false,
  showLinks: false,
});

const rootScrollLock = useScrollLock(html, false);

const scrollGap = ref<`${number}px`>('0px');

function splashLock(lock = true) {
  if (typeof window === 'undefined' || status.playedHero)
    return;

  scrollGap.value = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  rootScrollLock.value = lock;
  document.body.style.paddingRight = lock ? scrollGap.value : '0px';

  if (lock)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  else
    status.playedHero = true;
}

function endSplash() {
  splashLock(false);
  status.showText = true;

  const timer1 = setTimeout(() => {
    status.showLinks = true;
    clearTimeout(timer1);
  }, 800);
}

export { splashLock as startSplash, endSplash, status };
