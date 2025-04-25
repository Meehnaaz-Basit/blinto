const scrollButton = document.querySelector(".foot-scroll");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const navButtons = document.querySelector(".nav-buttons");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  navButtons.classList.toggle("active");
});
