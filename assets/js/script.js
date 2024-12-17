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
  if (window.scrollY > window.innerHeight * 0.7) {
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
