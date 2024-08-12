"use strict";

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/gi);
  },
  BlackBerry: () => {
    navigator.userAgent.match(/BlackBerry/gi);
  },
  IOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/gi);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/gi);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/gi);
  },
  any: () => {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  const menuArrows = document.querySelectorAll(".arrow__menu");
  if (menuArrows.length > 0) {
    menuArrows.forEach((menuArrow) => {
      menuArrow.addEventListener('click', () => {
        menuArrow.parentElement.classList.toggle("_active");
      })
    });
  }
} else {
  document.body.classList.add("_pc");
}
