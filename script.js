const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const header = document.querySelector(".nav-wrap");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 10 ? "0 8px 30px rgba(52,61,50,.06)" : "none";
}, { passive: true });

const bloomButton = document.getElementById("lissuinFlower");
const progressLabel = document.querySelector(".flower-progress");
let stage = 1;

function renderBloom() {
  bloomButton.className = `lissuin-flower stage-${stage}`;
  bloomButton.setAttribute("aria-pressed", String(stage === 8));
  bloomButton.querySelectorAll(".petal").forEach((petal, index) => {
    petal.classList.toggle("active", index < stage);
  });
  progressLabel.textContent = `${String(stage).padStart(2, "0")} / 08`;
}

if (bloomButton) {
  renderBloom();
  bloomButton.addEventListener("click", () => {
    stage = stage >= 8 ? 1 : stage + 1;
    renderBloom();
  });
}
