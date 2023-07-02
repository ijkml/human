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

export { scrollPageTo };
