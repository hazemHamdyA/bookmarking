const tapsContiner = document.querySelector(".taps");
const taps = document.querySelectorAll("[data-windows]");
const show = document.querySelectorAll("[data-show]");
tapsContiner.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tap")) return;
  taps.forEach((e, i) => {
    e.classList.remove("active-tap");
    show[i].classList.add("hide");
  });
  const { tap } = e.target.dataset;
  const content = e.target
    ?.closest(".section__taps")
    .querySelector(`[data-content="${tap}"]`);
  content?.classList.remove("hide");
  e.target?.classList.add("active-tap");
});

const headContiner = document.querySelector("[data-slide]");
const heads = document.querySelectorAll(".head");
const headBodys = document.querySelectorAll("[data-body]");
headContiner.addEventListener("click", (e) => {
  if (!e.target.classList.contains("head")) return;
  heads.forEach((one, i) => {
    one.classList.remove("active-comp");
    e.target.classList.add("active-comp");
    headBodys[i].classList.add("hidden");
  });
  const { head } = e.target.dataset;
  e.target
    .closest(".perent-head")
    .querySelector(`[data-body="${head}"]`)
    .classList.remove("hidden");
});

const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");

openBtn.addEventListener("click", () => {
  overlay.classList.remove("hide");
  openBtn.classList.add("hide");
  closeBtn.classList.remove("hide");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hide");
  openBtn.classList.remove("hide");
  closeBtn.classList.add("hide");
});
