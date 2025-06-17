document.addEventListener("DOMContentLoaded", () => {
  console.log("asdasdasdasd");
  const links = document.querySelectorAll(".scroll-link");
  const indicator = document.querySelector(".indicator");

  const sections = Array.from(links).map((link) => {
    const id = link.getAttribute("href").substring(2);
    return document.getElementById(id);
  });

  console.log(sections);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target);
          links.forEach((link) => link.classList.remove("active"));
          links[index].classList.add("active");
          moveIndicator(links[index]);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  function moveIndicator(activeLink) {
    const rect = activeLink.getBoundingClientRect();
    const navRect = activeLink.closest("nav").getBoundingClientRect();

    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - navRect.left}px)`;
  }

  const activeLink = document.querySelector(".scroll-link.active");
  if (activeLink) {
    moveIndicator(activeLink);
  }

  window.addEventListener("resize", () => {
    const activeLink = document.querySelector(".scroll-link.active");
    if (activeLink) moveIndicator(activeLink);
  });
});
