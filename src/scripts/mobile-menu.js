export function initMobileMenu() {
  if (!window.matchMedia("(max-width: 47.999rem)").matches) return;

  const toggleButton = document.getElementById("header-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggleButton || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
    requestAnimationFrame(() => {
      toggleButton.setAttribute("aria-expanded", "true");
    });
  };

  const closeMenu = () => {
    toggleButton.setAttribute("aria-expanded", "false");
    document.body.style.overflowY = "";
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 250);
  };

  toggleButton.onclick = () => {
    const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  };

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.onclick = () => closeMenu();
  });
}

// function initMobileMenu() {
//   if (window.matchMedia("(max-width: 47.999rem)").matches) {
//     const toggleButton = document.getElementById("header-btn");
//     const mobileMenu = document.getElementById("mobile-menu");

//     if (!toggleButton || !mobileMenu) {
//       return;
//     }

//     if (toggleButton.hasAttribute("aria-expanded")) {
//       return;
//     }

//     toggleButton.setAttribute("aria-expanded", "false");

//     const menuLinks = mobileMenu.querySelectorAll("a");

//     const openMenu = () => {
//       mobileMenu.style.display = "flex";
//       document.body.style.overflowY = "hidden";
//       requestAnimationFrame(() => {
//         toggleButton.setAttribute("aria-expanded", "true");
//       });
//     };

//     const closeMenu = () => {
//       mobileMenu.classList.remove("mob-menu_active");
//       toggleButton.setAttribute("aria-expanded", "false");
//       document.body.style.overflowY = "";
//       setTimeout(() => {
//         mobileMenu.style.display = "none";
//       }, 250);
//     };

//     toggleButton.addEventListener("click", () => {
//       const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
//       isOpen ? closeMenu() : openMenu();
//     });

//     menuLinks.forEach((link) => {
//       link.addEventListener("click", () => {
//         closeMenu();
//         setTimeout(() => {
//           history.replaceState(null, "", window.location.pathname);
//         }, 10);
//       });
//     });
//   }
// }
