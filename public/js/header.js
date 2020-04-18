(function () {
const media = window.matchMedia("(max-width: 905px)");
const aboutLink = document.querySelector(".aboutLink");
const dropdown = document.querySelector(".dropdown-menu");
const listItem = document.querySelectorAll(".navbar-nav > *");
const navBar = document.querySelector(".navbar");
const navToggler = document.querySelector(".navbar .navbar-toggler");
const logoLink = document.querySelector(".logoLink");

function events() {
  window.addEventListener("scroll", debounce(scrollHeader, 30));
  listItem[2].addEventListener("click", toggleDropdown);
}

function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

let debounce = function (func, threshold, execAsap) {
  let timeout;
  return function debounced() {
    let obj = this,
      args = arguments;

    function delayed() {
      scrollHeader();
      if (!execAsap) func.apply(obj, args);
      timeout = null;
    };

    if (timeout) clearTimeout(timeout);
    else if (execAsap) func.apply(obj, args);
    timeout = setTimeout(delayed, threshold || 100);
  };
}

function scrollHeader(e) {
  if (media.matches) {
    if (window.scrollY > 150) {
      navBar.style.transform = "translatey(-17px)";
      navBar.classList.add("transp");
      logoLink.classList.add("smaller");
    } else {
      navBar.style.transform = "translatey(0px)";
      navBar.style.background = "rgba(0, 0, 0, 0.705)";
      navBar.classList.remove("transp");
      logoLink.classList.remove("smaller");
    }
  } else {
    if (window.scrollY > 50) {
      navBar.style.transform = "translatey(-100px)";
      navBar.classList.add("borderCh");
    } else {
      navBar.style.transform = "translatey(0px)";
      navBar.classList.remove("borderCh");
    }
  }
}

if (!media.matches) {
  if (location.pathname.substring(1, 4) == "ser") {
    aboutLink.href = "o-nama";
  }
  else {
    aboutLink.href = "about";
  }
}
else {
  aboutLink.style.pointerEvents = "none";
  const newLink = document.createElement("a");
  newLink.classList.add("dropdown-item");
  dropdown.prepend(newLink)
  if (location.pathname.substring(1, 4) == "ser") {
    newLink.innerHTML = "O nama";
    dropdown.firstElementChild.href = "o-nama";
  }
  else {
    newLink.innerHTML = "About us";
    dropdown.firstElementChild.href = "about";
  }
}

$(document).on("mouseenter", ".nav-link", function (e) {
  e.target.nextElementSibling.firstElementChild.style.transition = "1.5s";
  e.target.nextElementSibling.firstElementChild.style.width = "100%";
});

$(document).on("mouseleave", ".nav-link", function (e) {
  e.target.nextElementSibling.firstElementChild.style.transition = "0.5";
  e.target.nextElementSibling.firstElementChild.style.width = "0%";
});


function toggleDropdown() {
  dropdown.classList.toggle("shown")
}

events();
})()