const toggle = document.querySelector(".toggle i");
const sideBar = document.querySelector(".content aside");

toggle.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  toggle.classList.toggle("transition");
});
