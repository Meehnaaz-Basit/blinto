// footer scrool

const scrollButton = document.querySelector(".foot-scroll");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// nav menu open in small screen

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const navButtons = document.querySelector(".nav-buttons");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  navButtons.classList.toggle("active");
});

// tectimonial button

function toggleItems() {
  const items = document.querySelectorAll(".testimonial-item");
  const testiButton = document.querySelector(".load-more");
  const isShowingAll = testiButton.textContent === "Show Less";
  const plusImage = document.querySelector(".plus");

  if (isShowingAll) {
    items.forEach((item, index) => {
      if (index >= 3) {
        item.classList.remove("show");
      }
    });
    testiButton.textContent = "Load More";
    plusImage.classList.remove("hidden");
  } else {
    items.forEach((item, index) => {
      if (index >= 3) {
        item.classList.add("show");
      }
    });
    testiButton.textContent = "Show Less";
    plusImage.classList.add("hidden");
  }
}

// faq toggle answer
const faqs = document.querySelectorAll(".faq-text");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
