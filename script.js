const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* =========================
   SCROLL ANIMATIONS
========================= */

const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card, .service-card"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();