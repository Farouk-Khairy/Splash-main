const nav = document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-bar");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("transform");
  nav.classList.toggle("list-active");
});
