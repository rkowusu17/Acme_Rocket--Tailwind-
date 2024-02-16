let year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.textContent = thisYear;

const initApp = () => {
  let hamburgerBtn = document.getElementById("humbuger-button");
  let mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
