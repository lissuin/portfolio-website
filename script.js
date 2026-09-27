const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const header = document.querySelector(".nav-wrap");
let lastY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  header.style.boxShadow = currentY > 10 ? "0 8px 30px rgba(52,61,50,.06)" : "none";
  lastY = currentY;
}, { passive: true });
