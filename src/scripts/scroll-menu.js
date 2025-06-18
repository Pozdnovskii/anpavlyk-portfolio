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

document.addEventListener("DOMContentLoaded", () => {
  updateActiveLink();
});

// // const links = document.querySelectorAll(".scroll-link");
// // const navList = document.getElementById("header-ul");

// // const sections = Array.from(links).map((link) => {
// //   const id = link.getAttribute("href").substring(2);
// //   return document.getElementById(id);
// // });

// // const observer = new IntersectionObserver(
// //   (entries) => {
// //     entries.forEach((entry) => {
// //       if (entry.isIntersecting) {
// //         const index = sections.indexOf(entry.target);
// //         links.forEach((link) => link.classList.remove("active"));
// //         links[index].classList.add("active");
// //         moveNavList(links[index]);
// //       }
// //     });
// //   },
// //   {
// //     threshold: 0.1,
// //   },
// // );

// // sections.forEach((section) => {
// //   if (section) observer.observe(section);
// // });

// // function moveNavList(activeLink) {
// //   const rect = activeLink.getBoundingClientRect();
// //   const navRect = activeLink.closest("ul").getBoundingClientRect();

// //   navList.style.setProperty("--indicator-width", `${rect.width}px`);
// //   navList.style.setProperty("--indicator-x", `${rect.left - navRect.left}px`);
// // }

// // const activeLink = document.querySelector(".scroll-link.active");
// // if (activeLink) {
// //   moveNavList(activeLink);
// // }

// const links = document.querySelectorAll(".scroll-link");
// const navList = document.getElementById("header-ul");

// const sections = Array.from(links).map((link) => {
//   const id = link.getAttribute("href").substring(2);
//   return document.getElementById(id);
// });

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const index = sections.indexOf(entry.target);

//         if (index === -1) {
//           links.forEach((link) => link.classList.remove("active"));
//           navList.style.setProperty("--indicator-width", "0px");
//           navList.style.setProperty("--indicator-x", "0px");
//           return;
//         }

//         links.forEach((link) => link.classList.remove("active"));
//         links[index].classList.add("active");
//         moveNavList(links[index]);
//       }
//     });
//   },
//   {
//     threshold: 0.1,
//   },
// );

// sections.forEach((section) => {
//   if (section) observer.observe(section);
// });

// function moveNavList(activeLink) {
//   const rect = activeLink.getBoundingClientRect();
//   const navRect = navList.getBoundingClientRect();

//   navList.style.setProperty("--indicator-width", `${rect.width}px`);
//   navList.style.setProperty("--indicator-x", `${rect.left - navRect.left}px`);
// }

// const activeLink = document.querySelector(".scroll-link.active");
// if (activeLink) {
//   moveNavList(activeLink);
// } else {
//   navList.style.setProperty("--indicator-width", "0px");
//   navList.style.setProperty("--indicator-x", "0px");
// }
