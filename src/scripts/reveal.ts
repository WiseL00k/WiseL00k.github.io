declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

const root = document.documentElement;
window.__revealReady = true;

if (root.classList.contains('reveal-on')) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
  } else {
    root.classList.remove('reveal-on');
  }
}

export {};
