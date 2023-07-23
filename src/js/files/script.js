// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    let target;
    if (e.target.closest(".header__select-btn")) {
      e.preventDefault();
      document.documentElement.classList.toggle("open-country");
    } else if (
      !e.target.closest(".header__select") &&
      document.querySelector(".open-country")
    ) {
      document.querySelector(".open-country").classList.remove("open-country");
    }
  });
});
