/* cards transition anim */
const elements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {threshold: 0.15});
elements.forEach((el) => observer.observe(el));

/* theme buttns */
const btnDark = document.querySelector(".theme_dark");
const btnWhite = document.querySelector(".theme_white");

btnDark.addEventListener("click", () => {
    document.body.classList.remove("white");
});

btnWhite.addEventListener("click", () => {
    document.body.classList.add("white");
});



