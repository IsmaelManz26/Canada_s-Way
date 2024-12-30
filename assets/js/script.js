const navBar = document.querySelector(".nav-bar");
const menu_on = document.querySelector(".menu-on");
const header = document.querySelector("header");

if (navBar) {
  navBar.addEventListener("click", function () {
    navBar.classList.toggle("open");
    menu_on.classList.toggle("menu-mobile");
    header.classList.toggle("menu-open");
  });
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollHeight =
    parseFloat(header.getAttribute("data-scroll-height")) || 0.7;
  if (window.scrollY > window.innerHeight * scrollHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

// BOTON DE SCROLL
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const arrowIcon = scrollButton.querySelector("i");

  scrollButton.addEventListener("click", function () {
    if (window.scrollY === 0) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight / 2) {
      arrowIcon.classList.remove("fa-arrow-down");
      arrowIcon.classList.add("fa-arrow-up");
    } else {
      arrowIcon.classList.remove("fa-arrow-up");
      arrowIcon.classList.add("fa-arrow-down");
    }
  });
});
