const toggleButton = document.getElementById("header-btn");
const mobileMenu = document.getElementById("mobile-menu");
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
