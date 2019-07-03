const navSlide = () => {
  const body = document.querySelector("body");
  const showcase = document.querySelector(".showcase__content");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Toggle Nav
  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active");
    body.classList.toggle("dark-overlay");
    showcase.classList.toggle("dark-overlay");

    //   Animage Links
    // index represents the index of each li in the array
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    // Burger animate
    burger.classList.toggle("toggle");
  });
};

navSlide();
