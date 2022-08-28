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
