// Swipper

let swiper = new Swiper(".brand-container", {
  spaceBetween: 40,
  cssMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
  },
});

// scroll reveal

ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".header-title", { delay: 500 });
ScrollReveal().reveal(".logo, .header-subtitle", { delay: 800 });
ScrollReveal().reveal(".button-reveal", { delay: 1500, origin: "left" });

ScrollReveal().reveal(".brand-title", { delay: 1500, origin: "top" });
ScrollReveal().reveal(".secondary-section", { delay: 1600, origin: "top" });
ScrollReveal().reveal(".brand-container, .palette-box", {
  delay: 1500,
  origin: "left",
});
ScrollReveal().reveal(".paragraph-subtitle", { delay: 1600, origin: "left" });
ScrollReveal().reveal(".brand-container", { delay: 1600, origin: "left" });
