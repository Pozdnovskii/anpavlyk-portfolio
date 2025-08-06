const item = document.getElementById("testimonial-2");
if (item) {
  const btn = item.querySelector("#show-more-btn");
  btn.addEventListener("click", () => {
    const expanded = item.classList.toggle("expanded");
    btn.textContent = expanded ? "Show less" : "Show more";
    btn.setAttribute("aria-expanded", expanded);
  });
}

export {};
