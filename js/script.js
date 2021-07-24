//tas
const tabs = document.querySelectorAll(".btn__tab");
const tabsContainer = document.querySelector(".objectives__tabs-container");
const tabsContent = document.querySelectorAll(".objectives__content");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector(".header");
const services = document.querySelector(".services");
tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn__tab");
  console.log("clicked", clicked);
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("btn__tab--active"));
  clicked.classList.add("btn__tab--active");
  tabsContent.forEach((c) => c.classList.remove("objectives__content--active"));
  document
    .querySelector(`.objectives__content--${clicked.dataset.tab}`)
    .classList.add("objectives__content--active");
});

//stick navigation
window.addEventListener("scroll", (e) => {});

const obsCallback = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(obsCallback, obsOptions);

headerObserver.observe(header);

const allSections = document.querySelectorAll(".section");

//reveal
console.log("sections are", allSections);

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
