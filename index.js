// document.getElementById("hambuger-menu").addEventListener("click", () => {
//   const menu = document.getElementById("menu");
//   if (menu.style.display === "none") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// });

document.getElementById("hambuger-menu").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show-menu");
  document.getElementById("gray-out").classList.toggle("gray-out");
});
