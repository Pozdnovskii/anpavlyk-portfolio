export function initSVGAnimations() {
  const motionQuery = window.matchMedia(
    "(prefers-reduced-motion: no-preference)",
  );

  if (motionQuery.matches) {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const svgElement = entry.target.querySelector("[data-svg-animation]");

          if (svgElement) {
            svgElement.classList.add("animate");

            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    const animatedParents = document.querySelectorAll(
      "[data-animation-parent]",
    );
    animatedParents.forEach((parent) => observer.observe(parent));
  }
}
