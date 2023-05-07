const fabars = document.querySelector(".fa-bars");
const headerNav = document.querySelector(".header__nav");
const xmark = document.querySelector(".fa-xmark");
fabars.addEventListener("click", () => {
  headerNav.classList.add("show");
  xmark.style.display = "block";
});

xmark.addEventListener("click", () => {
  headerNav.classList.remove("show");
  xmark.style.display = "none";
});
