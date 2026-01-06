export function initTestimonial() {
  const item = document.getElementById("testimonial-2");
  if (!item) return;

  const btn = item.querySelector("#show-more-btn");
  if (!btn) return;

  btn.onclick = () => {
    const expanded = item.classList.toggle("expanded");
    btn.textContent = expanded ? "Show less" : "Show more";
    btn.setAttribute("aria-expanded", expanded);
  };
}
