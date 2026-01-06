let cleanup = null;

export function initScrollMenu() {
  if (window.matchMedia("(min-width: 48rem)").matches) {
    const links = document.querySelectorAll(".scroll-link");
    const navList = document.getElementById("header-ul");

    const sections = Array.from(links).map((link) => {
      const id = link.getAttribute("href").substring(2);
      return document.getElementById(id);
    });

    function updateActiveLink() {
      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (rect.top <= window.innerHeight * 0.5 && distance < minDistance) {
          closestSection = index;
          minDistance = distance;
        }
      });

      links.forEach((link) => link.classList.remove("active"));

      if (closestSection !== null) {
        const activeLink = links[closestSection];
        activeLink.classList.add("active");
        moveNavList(activeLink);
      } else {
        navList.style.setProperty("--indicator-width", "18%");
        navList.style.setProperty("--indicator-x", "0px");
        navList.style.setProperty("--indicator-opacity", "0");
      }
    }

    function moveNavList(activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = navList.getBoundingClientRect();

      navList.style.setProperty("--indicator-width", `${rect.width - 2}px`);
      navList.style.setProperty(
        "--indicator-x",
        `${rect.left - navRect.left + 1}px`,
      );
      navList.style.setProperty("--indicator-opacity", "1");
    }

    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    updateActiveLink();

    cleanup = () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }
}

export function destroyScrollMenu() {
  cleanup?.();
  cleanup = null;
}
