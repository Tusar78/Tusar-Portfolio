/*==== Menu show vertically hidden ====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*==== MENU SHOW ====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", (event) => {
    navMenu.classList.add("show-menu");
  });
}

/*==== MENU HIDDEN ====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", (event) => {
    navMenu.classList.remove("show-menu");
  });
}

/*==== Remove menu in mobile screen ====*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each "nav__link", then we remove the "show-menu" class.
  navMenu.classList.remove("show-menu");
};

navLinks.forEach((link) => link.addEventListener("click", linkAction));

/*==== Accordion design upon skills ====*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  let skillsContentLength = skillsContent.length;

  for (let i = 0; i < skillsContentLength; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
});

/*==== Qualifications Tab ====*/
const tabs = document.querySelectorAll("[data-target]");
tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

/*==== Service Modal ====*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalButtons = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".service__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalButtons.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==== Portfolio swiper ====*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});