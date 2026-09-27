const petals = [...document.querySelectorAll(".petal")];
const flower = document.getElementById("flower");
const title = document.getElementById("bloomTitle");
const hint = document.getElementById("bloomHint");
const sub = document.getElementById("bloomSub");
let count = 0;

function updateBloom() {
  petals.forEach((petal, index) => {
    petal.classList.toggle("show", index < count);
  });

  title.textContent = `LISSUIN BLOOM · ${String(Math.max(count,1)).padStart(2,"0")} / 08`;

  if (count === 0) {
    hint.textContent = "Click the flower";
    sub.textContent = "Each touch adds a new petal.";
  } else if (count < 8) {
    hint.textContent = count === 1 ? "A first petal." : `${count} petals in bloom.`;
    sub.textContent = "Keep going — one touch, one petal.";
  } else {
    hint.textContent = "The flower is complete.";
    sub.textContent = "Click again to begin a new bloom.";
    flower.classList.add("complete");
  }
}

flower.addEventListener("click", () => {
  if (count === 8) {
    count = 0;
    flower.classList.remove("complete");
  } else {
    count += 1;
  }
  updateBloom();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
