const hambugerMenu = document.getElementById("hambuger-menu");
const menu = document.getElementById("menu");
const grayOut = document.getElementById("gray-out");
const header = document.getElementsByTagName("header")[0];

hambugerMenu.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  grayOut.classList.toggle("gray-out");
  if (window.scrollY == "0") {
    header.classList.toggle("dark");
  }
});

window.onscroll = function () {
  if (window.scrollY != "0") {
    header.classList.add("dark");
  } else {
    header.classList.remove("dark");
  }
};
