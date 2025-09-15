function initMobileMenu() {
  if (window.matchMedia("(max-width: 47.999rem)").matches) {
    const toggleButton = document.getElementById("header-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!toggleButton || !mobileMenu) {
      return;
    }

    if (toggleButton.hasAttribute("aria-expanded")) {
      return;
    }

    toggleButton.setAttribute("aria-expanded", "false");

    const menuLinks = mobileMenu.querySelectorAll("a");

    const openMenu = () => {
      mobileMenu.style.display = "flex";
      document.body.style.overflowY = "hidden";
      requestAnimationFrame(() => {
        toggleButton.setAttribute("aria-expanded", "true");
      });
    };

    const closeMenu = () => {
      mobileMenu.classList.remove("mob-menu_active");
      toggleButton.setAttribute("aria-expanded", "false");
      document.body.style.overflowY = "";
      setTimeout(() => {
        mobileMenu.style.display = "none";
      }, 250);
    };

    toggleButton.addEventListener("click", () => {
      const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
        setTimeout(() => {
          history.replaceState(null, "", window.location.pathname);
        }, 10);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", initMobileMenu);
document.addEventListener("astro:page-load", initMobileMenu);

if (document.readyState !== "loading") {
  initMobileMenu();
}

export {};
