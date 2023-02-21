document.getElementById("hambuger-menu").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show-menu");
  document.getElementById("gray-out").classList.toggle("gray-out");
  if (window.scrollY == "0") {
    document.getElementsByTagName("header")[0].classList.toggle("dark");
  }
});

window.onscroll = function () {
  if (window.scrollY != "0") {
    document.getElementsByTagName("header")[0].classList.add("dark");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("dark");
  }
};
