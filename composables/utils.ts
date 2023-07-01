function scrollPageTo(selector: string, offset = 100) {
  const elem = document.querySelector(selector);

  if (!elem) {
    return;
  }

  const elPos = elem.getBoundingClientRect().top;
  const winPos = window.scrollY || window.pageYOffset;
  window.scrollTo({
    top: winPos + elPos - offset,
    behavior: 'smooth',
  });
}

const html = computed(() => {
  if (typeof window === 'undefined') {
    return null;
  }
  return document.documentElement;
});

const rootScrollLock = useScrollLock(html, false);

const scrollGap = ref<`${number}px`>('0px');

function lockRootScroll(lock: boolean) {
  if (typeof window === 'undefined') {
    return null;
  }

  scrollGap.value = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  rootScrollLock.value = lock;
  document.body.style.paddingRight = lock ? scrollGap.value : '0px';
}

function isElementVisible(element: HTMLElement | null) {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Calculate the height of the element that needs to be visible
  const elementHeight = rect.bottom - rect.top;

  // Calculate the visible area of the element (at least 50% of its height)
  const visibleArea = elementHeight * 0.5;

  // Check if the visible area of the element is within the viewport bounds
  const isVisible =
    rect.top <= windowHeight - visibleArea && rect.bottom >= visibleArea;

  return isVisible;
}

export { scrollPageTo, isElementVisible, lockRootScroll };
