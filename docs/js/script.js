document.documentElement.classList.add('js');

const nav = document.getElementById('nav');
const navButton = document.getElementById('navBtn');
const navLinks = document.getElementById('navLinks');

const closeMenu = () => {
  if (!navButton || !navLinks) return;
  navLinks.classList.remove('open');
  navButton.setAttribute('aria-expanded', 'false');
  navButton.setAttribute('aria-label', 'Open menu');
};

if (nav) {
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

if (navButton && navLinks) {
  navButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navButton.setAttribute('aria-expanded', String(isOpen));
    navButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      navButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('in'));
}
