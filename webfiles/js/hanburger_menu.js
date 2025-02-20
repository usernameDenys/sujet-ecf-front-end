const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-link");
const intro = document.querySelector("#intro");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  intro.style.marginTop = "250px";
});

links.forEach((element) =>
  element.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = element.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
