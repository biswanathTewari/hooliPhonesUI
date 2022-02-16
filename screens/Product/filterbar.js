const filterbarMobile = document.querySelector(".filterbar-mobile");
const filterbarHeaderMobile = document.querySelector(
  ".filterbar-header-mobile"
);
const filterbarBodyMobile = document.querySelector(".filterbar-body-mobile");
const arrow = document.querySelector(".fa-sort-down");

const toggleMobileFilter = () => {
  if (arrow.style.animation) {
    arrow.style.animation = "fa-sort-down 0.5s ease forwards";
    setTimeout(() => (arrow.style.animation = ""), 500);
  } else {
    arrow.style.animation = "fa-sort-up 0.5s ease forwards";
  }
  filterbarMobile.classList.toggle("filterbar-mobile-active");
  filterbarBodyMobile.classList.toggle("filterbar-body-mobile-active");
};

filterbarHeaderMobile.addEventListener("click", toggleMobileFilter);
