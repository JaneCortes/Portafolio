const carrousel = document.querySelector(".carrousel-tarjet");
const btnPrev = document.querySelector(".button1");
const btnNext = document.querySelector(".button2");
const tarjeta = document.querySelector(".tarjeta");

function getScrollAmount() {
  const style = window.getComputedStyle(carrousel);
  const gap = parseInt(style.columnGap || style.gap) || 0;
  return tarjeta.offsetWidth + gap;
}

btnNext.addEventListener("click", () => {
  carrousel.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

btnPrev.addEventListener("click", () => {
  carrousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});
