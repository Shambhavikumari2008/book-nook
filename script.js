// 1. Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// 2. Image carousel
const carousel = document.getElementById("carousel");
const slides = document.getElementById("slides");
const dots = document.getElementById("dots");
const total = slides.children.length;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let index = 0;
let timer;

for (let i = 0; i < total; i++) {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", "Show trip " + (i + 1));
  dot.addEventListener("click", () => show(i));
  dots.appendChild(dot);
}

function show(i) {
  index = (i + total) % total;
  slides.style.transform = "translateX(-" + index * 100 + "%)";
  [...dots.children].forEach((d, n) => d.classList.toggle("active", n === index));
}
function start() { if (!reduceMotion) timer = setInterval(() => show(index + 1), 5000); }
function stop() { clearInterval(timer); }

document.getElementById("prev").addEventListener("click", () => show(index - 1));
document.getElementById("next").addEventListener("click", () => show(index + 1));
carousel.addEventListener("mouseenter", stop);
carousel.addEventListener("mouseleave", start);
carousel.addEventListener("focusin", stop);
carousel.addEventListener("focusout", start);
show(0);
start();

// 3. Book filter buttons
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.setAttribute("aria-pressed", b === btn));
    const choice = btn.dataset.filter;
    cards.forEach((card) => {
      card.hidden = !(choice === "all" || card.dataset.cat === choice);
    });
  });
});

// 4. Mark-as-read buttons and the counter
const savedCount = document.getElementById("savedCount");

document.querySelectorAll(".save").forEach((btn) => {
  btn.addEventListener("click", () => {
    const saved = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", saved);
    btn.textContent = saved ? "Read" : "Mark as read";
    savedCount.textContent = document.querySelectorAll('.save[aria-pressed="true"]').length;
  });
});
